import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Profile from './Pages/Profile.tsx';



function App() {
  return (
    <div>
      <Profile/>
      <ToastContainer/>
    </div>
  );
}

export default App;
