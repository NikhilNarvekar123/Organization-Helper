import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import TasksPage from './pages/TasksPage';
import CustomersPage from './pages/CustomersPage';
import OutreachPage from './pages/OutreachPage';
import StaffPage from './pages/StaffPage';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Switch>
        <Route path='/profile'>
          <ProfilePage/>
        </Route>
        <Route path='/tasks'>
          <TasksPage/>
        </Route>
        <Route path='/customers'>
          <CustomersPage/>
        </Route>
        <Route path='/outreach'>
          <OutreachPage/>
        </Route>
        <Route path='/staff'>
          <StaffPage/>
        </Route>
      </Switch>



      </Router>
    </div>
  );
}

export default App;
