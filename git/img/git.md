# git
+ 자주 사용하는 git command 를 정리

# structure
<img src="./structure.png" alt="structure.png" width="750px"/>

## git add
+ file 을 staging area 에 포함 시킨다.
```
git add {fileName}
git add {fileName1} {fileName2}
git add .
```
<img src="./gitAdd.png" alt="gitAdd.png" />


## git commit
+ staging area 에 있는 file 을 repository 에 저장한다.
```
git commit -m 'message'
```
<img src="./gitAdd.png" alt="gitCommit.png" />


## git status
+ 현재 branch 위치 및 staging area 에 포함된 file 등의 status 를 보여준다.
```
git status
```
<img src="./gitStatus.png" alt="gitStatus.png" />


## git restore
+ staging area 에 포함되었던 file 을 제외시킨다.
```
git restore ---staged {fileName}
```
<img src="./gitRestore.png" alt="gitRestore.png" />


## status
+ branch, commit, merge 등의 정보를 담은 log 를 보여준다.
```
git log --all --oneline --graph
```
<img src="./gitLog.png" alt="gitLog.png" />


## git diff / difftool
+ 현재 code 와 HEAD commit 파일과 compare 해서 보여준다.
+ difftool 을 뭔가... 잘 동작 안함 (확인해봐야 할 듯)
```
git diff
git difftool
```
<img src="./gitDiff_1.png" alt="gitDiff_1.png" width="500px"/>

```
git diff {commit_id}
git difftool {commit id}
```
+ 현재 code 와 특정 commit 파일과 compare 해서 보여준다.
<img src="./gitDiff_2.png" alt="gitDiff_2.png" />

```
git diff {commit_id} {commit_id}
git difftool {commit_id} {commit_id}
```
+ 특정 commit 파일끼리 compare 해서 보여준다.
<img src="./gitDiff_3.png" alt="gitDiff_3.png" />

## addons
+ vs code -> extension -> git Graph -> install
<img src="./gitGraph.png" alt="gitGraph.png" />
