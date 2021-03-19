import './App.css';
import { Component } from 'react';
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation'
import ImageUploadForm from './components/ImageUploadForm/ImageUploadForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'

// initialize Clarifai with API Key
const clarifai = new Clarifai.App({
  apiKey: '79c696e2305e4d63a65a6abdee053e52'
})

// important note for Clarifai images: use direct links to .jpg files
// const testImg1 = 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fwomensmedia%2Ffiles%2F2018%2F07%2FPhoto-happy-1-unsplash-michael-dam.jpg'
// const testImg2 = 'https://clarifai.com/cms-assets/20180320221615/face-001.jpg'

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  // create an event listener for when an image link is entered
  onInputChange = (event) => {
    // console.log(event.target.value)
    this.setState({ input: event.target.value})
  }

  // handle image submission
  onSubmit = () => {
    // update the image URL in state, with the link that is entered in the text input
    // note: use `this.state.input` instead of `this.state.imageUrl` to set the value of imageUrl because of async nature of setState
    this.setState({ imageUrl: this.state.input })
    // console.log('image submitted!')
    
    // face detection model.
    // note: 1st argument can either be `Clarifai.GENERAL_MODEL` 
    // or a string of numbers to represent the detection model used. 
    clarifai.models.predict(Clarifai.COLOR_MODEL, this.state.input)
    .then(response => {
      // console.log(`clarifai response: ${JSON.stringify(response)}`) 
      console.log('outputs:', response.outputs)
    })
    .catch();
    }

  render () {
    return (
      <div className="App">
        <h1>Verified! Face Recognition App</h1>
        <Navigation></Navigation>
         <ImageUploadForm 
          onInputChange={this.onInputChange} 
          onSubmit={this.onSubmit}>
        </ImageUploadForm>
        <FaceRecognition imageUrl={this.state.imageUrl}></FaceRecognition>
      </div>
    )
  }
}

export default App;
