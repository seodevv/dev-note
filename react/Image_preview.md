# image preview
+ 이미지를 서버에 업로드하는 과정에서 preview 를 구현해보았다.
+ FileReader API 를 사용하여 간단히 구현할 수 있다.

# Usage
``` javascript
const App = () => {
  const [imageFile, setImgFile] = useState('');
  const imageRef = useRef(null);
  const onChangeImageFile = () => {
    if(imageRef.current){
      const file = imageRef.current.files[0];
      const reader = new FileReader(); // FileReader 객체를 선언
      reader.readAsDataURL(file); // readAsDataURL method 를 사용하여 파일을 URL 로 만든다.
      reader.onloadend = () => { // 
          setImgFile(reader.result);
     	};
    }
  };

  return (
    <>
      {imageFile && <img src={imageFile} alt="image"/>}
      <label htmlFor="profileImg"
      <input
        type="file"
        accept="image/*"
        id="profileImg"
        onChange={onChangeImageFile}
        ref={imageRef}
      />
    </>
  )
}
export default App;
```
