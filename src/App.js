import React from "react";
import SearchResults from "./components/SearchResults";
import "bootstrap/dist/css/bootstrap.min.css";
import GitHubLink from "./components/GitHubLink"

function App() {
  return (
    <div className="App">
      <GitHubLink />
      <SearchResults />
    </div>
  );
}

export default App;
