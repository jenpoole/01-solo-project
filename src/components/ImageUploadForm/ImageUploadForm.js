// create a stateless component (pure function)
// destructure `onInputChange` from props received by the component
const ImageUploadForm = ({ onInputChange }) => {
  return (
    <div className="imageUploadFormContainer">
      <h2>Upload Your Image</h2>
      <div>
        <input type="text" onChange={onInputChange}></input>
        <button>Detect</button>
      </div>
    </div>
  )
}

export default ImageUploadForm;