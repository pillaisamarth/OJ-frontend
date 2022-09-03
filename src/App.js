import { Link , Outlet} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Screen from './Routes/Components/Screen';
import NavbarComponent from './Routes/Components/NavbarComponent';
import SubmissionTableComponent from './Routes/Components/SubmissionTableComponent';


const baseURL="http://192.168.29.36:8000/judge/problemlist/"

function App(props) {
  
  return (
    <>
    <NavbarComponent />
    <Screen>
        {/* <SubmissionTableComponent problemId={1}/> */}
        <Outlet />
    </Screen>
  

    
    {/* <SubmissionTableComponent/> */}
    </>
  );
}


export default App;
