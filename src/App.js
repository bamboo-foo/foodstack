import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Component } from "react";
import "./App.css";
import AuthPage from "./pages/AuthPage/AuthPage";
// import FoodSearchForm from "./components/FoodSearchForm";

class App extends Component {
  state = {
    user: null,
  };

  setUserInState = () => {
    return;
  };

  render() {
    return (
      <main className="App">
        {this.state.user ? (
          <></>
        ) : (
          // <Switch>
          //   {/* <Route
          //     path="/foods/search"
          //     render={}
          //   /> */}
          //   <Route
          //     path="/foods"
          //     render={(props) => (
          //       <NewOrderPage {...props} logout={this.logout} />
          //     )}
          //   />
          //   {/* and in case nothing matches, we redirect: */}
          //   <Redirect to="/orders" />
          // </Switch>
          <AuthPage setUserInState={this.setUserInState} />
        )}
      </main>
    );
  }
}

export default App;
