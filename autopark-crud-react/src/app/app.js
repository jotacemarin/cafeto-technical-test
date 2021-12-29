import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../components/navbar/nav-bar';
import Autopark from '../pages/autoparks/autoparks';
import CreateAutopark from '../pages/create-autopark/create-autopark';
import CreateVehicle from '../pages/create-vehicle/create-vehicle';
import Home from '../pages/home/home';
import Vehicles from '../pages/vehicles/vehicles';
import './app.css';

function App() {

    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <div className='container-fluid'>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/auto-park/parks' component={ Autopark } />
                    <Route exact path='/auto-park/parks/create' component={ CreateAutopark } />
                    <Route exact path='/auto-park/parks/:park_id/vehicles' component={ vehicles } />
                    <Route exact path='/auto-park/parks/:park_id/vehicles/create' component={ vehicles } />
                </div>
            </BrowserRouter>
        </div>
    );

    function vehicles ({ match }) {
        const { path } = match;
        const { park_id } = match.params;
        switch (path) {
            case "/auto-park/parks/:park_id/vehicles":
                return <Vehicles park_id={ park_id } />;
            case "/auto-park/parks/:park_id/vehicles/create":
                return <CreateVehicle park_id={ park_id } />;
            default:
                return <Home />;
        }
    }

}
    
export default App;
    