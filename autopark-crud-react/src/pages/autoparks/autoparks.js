import React from 'react';
import { Link } from 'react-router-dom';
import parksService from '../../services/parks/parks.service';

const parks = [
    { _id : '5d4fae119116912ccfaadf17', deleted : false, name : 'autos del valle', created_at : '2019-08-11T05:56:33.070Z', __v : 0 },
    { _id : '5d4fae2e9116912ccfaadf18', deleted : false, name : 'auto pacifico', created_at : '2019-08-11T05:57:02.496Z', __v : 0 },
    { _id : '5d4fae399116912ccfaadf19', deleted : false, name : 'toro autos', created_at : '2019-08-11T05:57:13.600Z', __v : 0 }
];

class Autopark extends React.Component {

    componentDidMount () {
        this.getParks();
    }

    getParks (page = 1, limit = 100) {
        parksService.parks(page, limit)
        .then(response => {
            this.setState({ });
            console.log(response);
        })
        .catch(error =>{
            console.error(error);
        });
    }

    render() {
        return (
            <div>
                <h4>Parks</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link to='/auto-park/parks/create'>Create Park</Link>
                    </li>
                </ul>
                <h4>Parks</h4>
                <ul className='list-group'>
                    {
                        parks.map((park) => {
                            return (
                                <li key={park._id} className='list-group-item'>
                                    <Link to={`/auto-park/parks/${park._id}/vehicles`}>{park.name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default Autopark;