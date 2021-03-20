import React from 'react'
import Posts from "./components/Posts";
import Post from "./components/Post";
import {Container} from "@material-ui/core";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
      <Container>
          <div className="App">
              <Router>
                  <Route path="/" exact component={Posts} />
                  <Route path="/post/:id" component={Post} />
              </Router>
          </div>
      </Container>
  );
}

export default App;
