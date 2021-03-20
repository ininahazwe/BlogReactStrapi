import React from 'react'
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import {Container} from "@material-ui/core";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
      <Container>
          <div className="App">
              <Router>
                  <Route path="/" exact component={PostsPage} />
                  <Route path="/post/:id" component={PostPage} />
              </Router>
          </div>
      </Container>
  );
}

export default App;
