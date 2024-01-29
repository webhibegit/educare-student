import './App.css';
import './assets/css/allstudent.css'
import './assets/css/app.css'
import './assets/css/index.css'
import './assets/css/dashboard.css'
import IndexRoute from './Route/Index';
import { useDispatch } from 'react-redux';
import { setuser } from './Redux/reducer/User';
import { useEffect } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';


function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    let userData=reactLocalStorage.getObject("userData")
    let login_status=reactLocalStorage.get("login_status")
    // console.log(login_status);
    if(userData && login_status){
      dispatch(setuser(userData))
    }
  },[])
  return (
    <>
    <IndexRoute/>
    </>
  );
}

export default App;
