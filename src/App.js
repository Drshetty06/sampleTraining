import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import DashboardComponent from './components/DashboardComponent/DashboardComponent';
import SideDrawerComponent from './components/SideDrawerComponent/SideDrawerComponent';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
 
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<LoginForm/>} />
            <Route path="/dashboard" element={ <DashboardWithSideDrawer/>} />
          </Routes>
        
     
        </header>
      </div>

  );
}

function DashboardWithSideDrawer() {
  return (
    <>
      <DashboardComponent />
      <SideDrawerComponent />
    </>
  );
}


export default App;
