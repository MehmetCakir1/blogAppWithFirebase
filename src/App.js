import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import AuthContextProvider from "./contexts/AuthContext"
import AppRouter from './router/AppRouter'
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter/>
        <ToastContainer/>
      </AuthContextProvider>
    </div>
  )
}

export default App