import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component"
import EditExercise from "./components/edit-exercise.component"
import CreateExercise from "./components/create-exercise.component"
import CreateUser from "./components/create-user.component"

import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <Router>
      <NavBar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" exact component={EditExercise} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
