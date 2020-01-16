import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./pages/Homepage.component.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route to="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
