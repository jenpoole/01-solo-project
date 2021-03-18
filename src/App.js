import './App.css';
import { Component } from 'react';
import Navigation from './components/Navigation/Navigation'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Verified! Face Recognition App</h1>
        <Navigation></Navigation>
        {/* rename this to ImageUploadForm */}
        {/* <ImageLinkForm></ImageLinkForm>
        <FaceRecognition></FaceRecognition> */}
      </div>
    )
  }
}

export default App;
