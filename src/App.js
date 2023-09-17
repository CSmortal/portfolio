import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppBar from './AppBar';
import './css/App.css';
import AllProjects from './AllProjects';
import WorkDetail from './detailComponents/WorkDetail';
import PersonalProjectDetail from './detailComponents/PersonalProjectDetail';
import SchoolProjectDetail from './detailComponents/SchoolProjectDetail';

function App() {
  
  return (
    <div className='app-container'>
      <AppBar />


      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element=<AllProjects/> />
          <Route path='workDetail' element=<WorkDetail/> />
          <Route path='personalProjDetail' element=<PersonalProjectDetail/> />
          <Route path='schoolProjDetail' element=<SchoolProjectDetail/> />
        </Routes>
      </BrowserRouter>
    </div>



  );
}

export default App;
