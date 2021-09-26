import AuthenticatedRoute from "./AuthenticatedRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cardapio from './pages/Cardapio'
import Login from './pages/Login'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <AuthenticatedRoute exact path="/" component={Cardapio} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}