# winston
+ node.js 의 대표적인 logger
+ 다양한 API 를 제공하여 간편하게 logging 을 할 수 있고, 성능 최적화가 잘 되어있다고 함.

# morgan
+ node.js 의 대표적인 http logger
+ winston 과 연계하여 log 를 남기도록 설정하였다.

# references
+ https://github.com/winstonjs/winston
+ https://github.com/expressjs/morgan
+ https://basketdeveloper.tistory.com/42
+ https://yceffort.kr/2021/02/logging-in-nodejs

# notice
+ Logging levels in winston conform to the severity ordering specified by RFC5424: severity of all levels is assumed to be numerically ascending from most important to least important.
``` json
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};
```

# usage
> ./lib/logger.js
``` javascript
const appRoot = require('app-root-path');
const winston = require('winston');

// type 이 Error 인 경우 순회하며 message 를 작성
const createErrorMessage = (error) => {
  let message = `message: ${error.message}`;
  message += `trace: ${error.stack}`;
  delete error.message;
  for (key in error) {
    message += `\n  ${key}: ${error[key]}`;
  }
  return message;
};

// type 이 Error 인 경우 message 를 작성, 외에는 그대로 메시지 출력
const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: createErrorMessage(info) });
  }
  return info;
});

// winston 의 options 를 지정
// 기본적으로 file 로 log 를 남기고
// development 일 경우 console 도 남긴다.
const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/tikitaka.log`, // 로그파일을 남길 경로
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false, // 로그형태를 json으로도 뽑을 수 있다.
    colorize: true,
  },
};

// createLogger API 를 사용하여 logger 를 설정
// NODE_ENV 에 따른 level 을 설정하고
// log 의 fotmat 을 combine 을 통해 지정해준다
const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    enumerateErrorFormat(),
    process.env.NODE_ENV === 'development'
      ? winston.format.colorize()
      : winston.format.uncolorize(),
    winston.format.splat(),
    winston.format.printf(
      ({ timestamp, level, message }) => `${timestamp} [${level}] ${message}`
    )
  ),
  transports: [new winston.transports.File(options.file)],
});

// development 일 경우 console 에도 log 를 남김
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console(options.console)); // 개발 시 console로도 출력
}

// morgan 으로 부터 http log 를 받을 stream 을 생성
logger.stream = {
  write: (message) => {
    logger.info(message.replace(/\r\n|\r|\n/, ''));
  },
};

module.exports = logger;
```
> ./server.js
``` javascript
const morgan = require('morgan');
// morgan 을 middleware 로 설정하고 이를 logger.stream 으로 넘긴다
app.use(
  morgan(':method :status :url :response-time ms', { stream: logger.stream })
);

server.listen(serverPort, serverHost, () => {
  // logger 를 사용하여 log 를 남김
  logger.info(`litening on https://${serverHost}:${serverPort}`);
});
```
