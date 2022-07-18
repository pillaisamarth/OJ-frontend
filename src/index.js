import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dummy from './Routes/Components/Dummy';
import ProblemlistComponent from './Routes/Components/ProblemlistComponent';
import ProblemDetailComponent from './Routes/Components/ProblemDetailComponent';
import { LoginFormComponent, RegisterFormComponent } from './Routes/Components/FormComponent';
import ProblemPageComponent from './Routes/Components/ProblemPageComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<ProblemlistComponent />} />
        <Route path="problem/:problemId" element={
          <ProblemPageComponent />
        } />

        
        
      </Route>  
    </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
