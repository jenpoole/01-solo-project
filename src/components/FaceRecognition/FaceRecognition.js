// create a stateless component (pure function)
const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="faceRecognitionContainer">
      <img src={imageUrl} alt={''}></img>
    </div>
  )
}

export default FaceRecognition;