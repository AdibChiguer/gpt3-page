import './App.css';
import { Brande , Cta , Header , Navbar , Article , Wgpt3 , Possibility , Feature , Footer  } from './components/components';

function App() {
  return (
    <div className="App">
      <div className='Navbar-Header_section'>
        <Navbar/>
        <Header/>
      </div>
      <div className='Brande-Wgpt3_section'>
        <Brande/>
        <Wgpt3/>
      </div>
      <div className='Feature-Possibility_section'>
        <Feature/>
        <Possibility/>
      </div>
      <div className='Cta-Article_section'>
        <Cta/>
        <Article/>
      </div>
      <div className='Footer_section'>
        <Footer/>
      </div>
    </div>

  );
}

export default App;
