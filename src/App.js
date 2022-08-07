import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import History from "./pages/History/History";
import HistoryDetails from "./pages/HistoryDetails/HistoryDetails";

import LiveDetection from "./pages/LiveDetection/LiveDetection";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/history">
            <History />
          </Route>
          <Route path="/liveDetection">
            <LiveDetection />
          </Route>
          <Route path="/:historyId">
            <HistoryDetails />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
