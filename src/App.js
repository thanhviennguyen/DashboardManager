import './App.css';
import Dashboard from './components/dashboard/index'
import Signin from './components/googleSignin/signin';
import { Container } from 'react-bootstrap';

function App() {
  return ( 
    // <Container className="d-flex align-item-center justify-content-center"
    // style={{minHeight: "100vh" }}>
    //   <div className='w-100' style={{maxWidth: "400px"}}>
        <Signin />
    //     </div>
    // </Container>
    // <Dashboard/>
  );
}
export default App;
