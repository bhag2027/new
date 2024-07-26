import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
