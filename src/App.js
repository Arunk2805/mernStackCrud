
import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element ={<Navbar/>}/>
      <Route  path='/all' element ={<AllUsers/>}/>
      <Route  path='/add' element ={<AddUser/>}/>
      <Route  path='/edit/:id' element ={<EditUser/>}/>
    </Routes>
    
    </>
  );
}

export default App;
