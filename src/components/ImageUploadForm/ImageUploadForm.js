// create a stateless component (pure function)
// destructure `onInputChange`, `onSubmit` from props received by the component
const ImageUploadForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className="imageUploadFormContainer">
      <h2>Upload Your Image</h2>
      <div>
        <input type="text" onChange={onInputChange}></input>
        <button onClick={onSubmit}>Detect</button>
      </div>
    </div>
  )
}

export default ImageUploadForm;