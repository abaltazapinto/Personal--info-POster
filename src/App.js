import logo from './logo.svg';
import './App.css';
import Initial from './Components/Initial';
import About from './Components/About';
import Interests from './Components/Interests';
import './style.css'
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <div className='Main'>
        <div className='Main2'>
          <Initial />
          <About />
          <Interests />
          <Footer />
       </div>
      </div>
    
    </>
  );
}

export default App;
