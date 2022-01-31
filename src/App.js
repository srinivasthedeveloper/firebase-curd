import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AddVoter from './screens/Home/AddVoter';
import AllVoter from './screens/Home/AllVoters';
import UpdateVoter from './screens/Home/UpdateVoter';


function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<AllVoter />} />
          <Route path="/add" element={<AddVoter />} />
          {/* <Route path="/edit">
            <UpdateVoter 
              data={{"age":"55",
              "address":"aldfjkadjflaks",
              "money":"5000",
              "voterId":"voter id",
              "created":{"seconds":1643621517,"nanoseconds":24000000},
              "visited":true,
              "street":"kadfka kadf street",
              "name":"name",
              "sex":"male",
              "headName":"husband",
              "phone":"9493943903409"}}
              id={"9Y2gLOeHpBL2foZi4NIE"} />
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
