// create a stateless component (pure function)
const FaceRecognition = ({ testImg2 }) => {
  return (
    <div>
      <img src={testImg2} alt={'demo'}></img>
    </div>
  )
}

export default FaceRecognition;