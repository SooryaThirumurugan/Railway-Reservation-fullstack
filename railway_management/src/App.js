import './AppCss.css';
import Login from './post';
import Update from './update';
import Delete from './delete';
import Getdetails from './GetDetails';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';

function App() {
  return (
<div className='App'>
                 <Router>
                
                    <div class='nav'>

                        <h2>RAILWAY RESERVATION</h2>
                        <div class='nav-link'>
                    <Link to='/'><button>ADD PASSENGER</button></Link>
                    <Link to='/delete'><button>DELETE</button></Link>
                    <Link to='/put'><button>UPDATE</button></Link>
                    <Link to='/get'><button>VIEW PASSENGER</button></Link>
                    </div>
                    </div>
                <Routes>
                    
                <Route path='/' element={<Login/>}/>
                <Route path='/get' element={<Getdetails/>}/>
                <Route path='/put' element={<Update/>}/>
                <Route path='/delete' element={<Delete/>}/>

                </Routes>
                </Router>

        </div>
  );
}

export default App;
