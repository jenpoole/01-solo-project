import './App.css';
import { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import ImageUploadForm from './components/ImageUploadForm/ImageUploadForm'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Verified! Face Recognition App</h1>
        <Navigation></Navigation>
        {/* formally known as 'ImageLinkForm' */}
         <ImageUploadForm></ImageUploadForm>
        {/* <FaceRecognition></FaceRecognition> */}
      </div>
    )
  }
}

export default App;
