import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Courses,Login,Buy} from "./components";
import './App.css'
import './responsive.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/courses" exact component={() => <Courses />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/buy" exact component={() => <Buy />} />
          
        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;