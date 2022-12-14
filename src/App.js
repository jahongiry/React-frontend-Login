import './App.css';
import Layout from './components/shared/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { AuthContextProvider } from './components/shared/AuthContext';
import Signup from './pages/Signup';
import Notes from './pages/Notes';
import CreateNotice from './pages/CreateNotice';

function App() {
  return (
    <AuthContextProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/notescreate' element={<CreateNotice />} />
        </Routes>
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
