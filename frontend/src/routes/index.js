import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/home/hp';
import Profil from '../pages/profile/pp';
import Group from '../pages/userlist/gp';
import Alcohol from '../pages/alcohol/ap';
import Background from '../components/background/background';
import Botbar from '../components/botbar/botbar';
import Topbar from '../components/topbar/topbar';

export default function index() {
      return (
        <Router>
            <div>
                <Background />
                <Topbar />
                <Botbar />
            </div>
            
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profil" exact component={Profil} />
                <Route path="/groupe" exact component={Group} />
                <Route path="/boissons" exact component={Alcohol} />
            </Switch>
        </Router>
    )
}