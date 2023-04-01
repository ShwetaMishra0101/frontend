import './App.css';
import Navbar from './Components/Navbar';
import { Side } from './Components/Side';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      {/* <Side/> */}
      
    </div>
  );
}

export default App;
