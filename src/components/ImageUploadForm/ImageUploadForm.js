// create a stateless component (pure function)
const ImageUploadForm = () => {
  return (
    <div className="imageUploadFormContainer">
      <h2>Upload Your Image</h2>
      <div>
        <input type="text"></input>
        <button>Detect</button>
      </div>
    </div>
  )
}

export default ImageUploadForm;