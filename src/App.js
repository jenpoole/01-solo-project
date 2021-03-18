import './App.css';
import { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Hello there!</h1>
        <Navigation></Navigation>
        {/* rename this to ImageUploadForm */}
        <ImageLinkForm></ImageLinkForm>
        <FaceRecognition></FaceRecognition>
      </div>
    )
  }
}

export default App;
