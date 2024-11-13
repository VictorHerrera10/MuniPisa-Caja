import { Route, Routes } from 'react-router-dom';
import './index.css';
import { RegisterApp } from './pages/RegisterApp';
import { LoginApp } from './pages/LoginApp';
import { HomeApp } from './pages/HomeApp';
import { AuthProvider, useFirebaseApp } from 'reactfire';
import { getAuth } from 'firebase/auth';
import { AuthContextApp } from './contexts/AuthContextApp';

function App() {
  const firestoreInstance = getAuth(useFirebaseApp());
  return (
    <>
      <AuthProvider sdk={firestoreInstance}>
        <AuthContextApp>
          <Routes>
            <Route exact path='/' element={<LoginApp />} />
            <Route exact path='/login' element={<LoginApp />} />
            <Route exact path='/register' element={<RegisterApp />} />
            <Route exact path='/home' element={<HomeApp />} />
          </Routes>
        </AuthContextApp>
      </AuthProvider>
    </>
  );
}

export default App;
