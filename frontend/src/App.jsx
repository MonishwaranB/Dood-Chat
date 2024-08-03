import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Componets/Login';
import MainContainer from './Componets/MainContainer';
import CreateGroups from './Componets/CreateGroups';
import ChatArea from './Componets/ChatArea';
import Welcome from './Componets/Welcome';
import Users from './Componets/Users';
import Groups from './Componets/Groups';

function App() {
  return (
    <div className="App">
     {/*<MainContainer/> */}
     {/*<Login/>*/}
     <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='app' element={<MainContainer/>}>
              <Route path='welcome' element={<Welcome/>}></Route>
              <Route path='chat' element={<ChatArea/>}></Route>
              <Route path='users' element={<Users/>}></Route>
              <Route path='groups' element={<Groups/>}></Route>
              <Route path='create-groups' element={<CreateGroups/>}></Route>
        </Route>
     </Routes>
   
    </div>
  );
}
export default App;
