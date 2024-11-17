
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css'
import MyNavbar from './components/MyNavbar';
// import MyHome from './components/MyHome';
// import RegisterForm from './components/RegisterForm';
// import LoginForm from './components/LoginForm';
import MyCart from './components/MyCart';
import MyFooter from './components/MyFooter';

const App = () => {

  return (
    <>
      <MyNavbar />
      {/* <MyHome /> */}
      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
      <MyCart />
      <MyFooter />
    </>
  )
}

export default App
