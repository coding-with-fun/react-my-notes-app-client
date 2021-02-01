import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Topbar from "./components/Topbar";

function App() {
    return (
        <Router>
            <Topbar />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
