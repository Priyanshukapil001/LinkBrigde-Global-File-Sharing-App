import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';
import './components/About'
import Navbar from './components/navbar/nav'
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();


  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <>
    <Navbar/>
      <div className="main">
        <div className='container'>

          <div className='logo' >
            <h1>LinkBridge</h1>
            <p>LINKING WORLDS, SHARING FILES</p>
          </div>


          <div className='wrapper'>
            <h1>Simple file sharing!</h1>
            <p>Upload and share the download link.</p>

            <button onClick={() => onUploadClick()}>Upload</button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />

            <a href={result} target='_blank'>{result}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;