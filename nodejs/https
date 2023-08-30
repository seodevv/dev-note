# https
+ 사설 인증서 생성을 통한 https server 를 구축한다.

# references
+ https://brunch.co.kr/@devapril/49
+ https://github.com/FiloSottile/mkcert#windows

# install for window
+ PowerShell 을 관리자 권한으로 실행
```
# Get-ExecutionPolicy 실행
$ Get-ExecutionPolicy

# Restricted라면 AllSigned나 Bypass로 설정
# ExcutionPolicy를 AllSigned로 설정
$ Set-ExecutionPolicy AllSigned

# ExcutionPolicy를 Bypass로 설정
$ Set-ExecutionPolicy Bypass -Scope Process

# 설치!
$ Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# 확인
$ choco

# mkcert 설치
$ choco install mkcert

# CA 및 인증서/인증키 생성
$ mkcert -install
Created a new local CA 💥
The local CA is now installed in the system trust store! ⚡️
The local CA is now installed in the Firefox trust store (requires browser restart)! 🦊

$ mkcert example.com "*.example.com" example.test localhost 127.0.0.1 ::1

Created a new certificate valid for the following names 📜
 - "example.com"
 - "*.example.com"
 - "example.test"
 - "localhost"
 - "127.0.0.1"
 - "::1"

The certificate is at "./example.com+5.pem" and the key at "./example.com+5-key.pem" ✅
```

