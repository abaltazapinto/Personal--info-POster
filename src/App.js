import logo from './logo.svg';
import './App.css';
import Initial from './Components/Initial';
import About from './Components/About';
import Interests from './Components/Interests';
import './style.css'
import Footer from './Components/Footer';

function App() {
  const backgrounStyle = {
    backgroungImage: 'url(/img/IMG_20191231_123456.jpg)',
    bacgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    margin: '0',
    fontfamily: 'Arial, sans-serif',
  };

  return (
    <>
    <div style={backgrounStyle}>
    <div className='Main'>

    <div className='Main2'>
      <Initial />
      <About />
      <Interests />
      <Footer />
    </div>
    
    </div>
    </div>
    </>
  );
}

export default App;
