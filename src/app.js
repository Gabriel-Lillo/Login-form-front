import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./pages/Login";
import SignUp from "./pages/signup";


const App = () => {
    return (
        <BrowserRouter>

            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>
        
        </BrowserRouter>
    )
}

export default App;