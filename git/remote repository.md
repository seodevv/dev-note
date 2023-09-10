# Create github repository
1. git login

2. my repository

3. new repository
<img src="./img/newRepository.png" alt="git"/>

4. create repository
<img src="./img/createRepository.png" alt="git"/>

5. copy URL
<img src="./img/copyURL.png" alt="git"/>


# git push
+ git push -u ${URL} ${branch}
+ -u 옵션은 다음 번에도 해당 url 을 사용하겠다는 의미로
+ 다음 사용부터는 git push만 해도 동일한 url 로 push 된다.
```
git push -u https://github.com/seodevv/myRepo.git master
```
<img src="./img/gitPush_1.png" alt="git"/>
<img src="./img/gitPush_2.png" alt="git"/>

# git remote
+ 자주 사용하는 repository 를 변수(origin)로 등록
```
git remote add origin https://github.com/seodevv/myRepo.git
git remote -v
```
<img src="./img/gitRemote.png" alt="git"/>

```
git push origin master
```
<img src="./img/gitPushOrigin.png" alt="git"/>

# git clone
+ 해당 repository 와 동기화 시킨다.
```
git clone ${URL}
```
<img src="./img/gitClone.png" alt="git"/>

```
git clone https://github.com/seodevv/myRepo.git
```
<img src="./img/gitClone_2.png" alt="git"/>

# .gitignore
+ .gitignore 파일을 통해 remote repository 에 업로드 되지 않을 파일을 결정한다.
