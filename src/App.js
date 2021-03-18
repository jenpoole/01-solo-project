import './App.css';
import { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import ImageUploadForm from './components/ImageUploadForm/ImageUploadForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  // create an event listener for when an image link is entered
  onInputChange = (event) => {
    console.log(event.target.value)
  }

  render () {
    return (
      <div className="App">
        <h1>Verified! Face Recognition App</h1>
        <Navigation></Navigation>
        {/* formally known as 'ImageLinkForm' */}
         <ImageUploadForm onInputChange={this.onInputChange}></ImageUploadForm>
        {/* <FaceRecognition></FaceRecognition> */}
      </div>
    )
  }
}

export default App;
