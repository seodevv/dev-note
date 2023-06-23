# CryptoJS
+ 해쉬 알고리즘을 사용하여 암호화 해주는 라이브러리이다.
+ secretKey 를 사용해 암호화할 수 있고, 동일한 secretKey 를 통해 복호화할 수 있다.
+ 본인은 개발자 도구에서 패스워드가 평문으로 노출되는 것을 막기 위해 사용하였다.

## install
``` javascript
npm i crypto-js
```

## Usage
+ 고유한 secretKey 를 만들고, crypto-js 의 해쉬 알고리즘을 사용하여 data 를 encrypt 를 하면 된다.
``` javascript
import React, { useState } from "react";
import CryptoJS from "crypto-js";

const Test = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [encrypted, setEncrypted] = useState("");
  const [decrypted, setDecrypted] = useState("");

  const onSubmitEncrypted = (e) => {
    e.preventDefault();
    const secretkey = "1234"; // 임의의 secretKey 를 지정

    // secretKey 와 AES 알고리즘 사용하여 암호화
    const enc = CryptoJS.AES.encrypt(password, secretkey).toString();

    // 동일한 secretKey 를 통해 복호화
    const bytes = CryptoJS.AES.decrypt(enc, secretkey);
    const dec = bytes.toString(CryptoJS.enc.Utf8);
    setEncrypted(enc);
    setDecrypted(dec);
  };

  return (
    <section className="login-container">
      <form onSubmit={onSubmitEncrypted}>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton type="submit">encrypt</StyledButton>
      </form>
      {encrypted.length > 0 && (
        <h4>after encrypted : {encrypted}</h4>
      )}
      {decrypted.length > 0 && (
        <h4>after decrypted : {decrypted}</h4>
      )}
    </section>
  );
};

export default Test;
```
+ CryptoJS 라이브러리를 쓰면 간단한 AES, DES 등 해쉬 알고리즘을 사용하여 암호화할 수 있다.
+ secretKey 는 .env 파일에 보관하면 더 좋을 것 같다.
+ 이것으로 개발자 도구에서 평문으로 password 가 노출될 일은 없을 것이다.
