

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Footer from "./components/Footer";


function ReactRouter() {
    return (
        <Router>
            <header>
                <Navbar />
            </header>
            <main>
                <Switch>
                    <Route exact path="/" component={Login} />
                  
                    
                    <Route exact path="/Register" component={Registration} />
                   
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
        </Router>
    );
}

function App() {
    return (
        <div className="App">
            <ReactRouter />
        </div>
    );
}

export default App;
