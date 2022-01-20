// import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {/* <Login/> */}
      {/* Side Bar */}
      {/* Feed */}
      {/* Widgets */}

      {/* <Sidebar/>
      <Feed/>
      <Widgets/> */}

      {!user?(<Login/>):(<>
        <Sidebar/> 
        <Feed/>
        <Widgets/>
        </>
      )}
    </div>
  );
}

export default App;
