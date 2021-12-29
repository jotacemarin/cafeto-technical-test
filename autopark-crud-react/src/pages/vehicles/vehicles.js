import React from 'react';
import { Link } from 'react-router-dom';
import vehiclesService from '../../services/vehicles/vehicles.service'

const id = 1234;

const vehicles = [
    { _id : "5d4fb2df0a44e62cfe8727ac", deleted : false, mark : "chevrolet", model : "spark", relase_date : 2019, licence_plate : "btw-122", automotive_park : "5d4fae2e9116912ccfaadf18", created_at : "2019-08-11T06:17:03.173Z", __v : 0 },
    { _id : "5d507775b6ca3f158833c3a7", deleted : false, mark : "chevrolet", model : "spark", relase_date : 2019, licence_plate : "btw-124", automotive_park : "5d4fae119116912ccfaadf17", created_at : "2019-08-11T20:15:49.630Z", __v : 0 },
    { _id : "5d50777db6ca3f158833c3a8", deleted : false, mark : "chevrolet", model : "spark", relase_date : 2019, licence_plate : "ftw-124", automotive_park : "5d4fae119116912ccfaadf17", created_at : "2019-08-11T20:15:57.370Z", __v : 0 }
];

class Vehicles extends React.Component {

    park_id = this.props.park_id;

    async componentDidMount () {
        // const { match: { params } } = this.props;
        // console.log(params);
        console.log(this.park_id);
        await this.getVehicles();
    }

    edit = (vehicle) => {
        return async () => {
            console.log(vehicle._id, vehicle);
            /**
                await vehicleSrvice.update(vehicle_id, vehicle)
                    .then(reponse => {})
                    .catch(error => {});
            */
        };
    };

    remove = (vehicle_id) => {
        return async () => {
            console.log(vehicle_id);
        }
    };

    getVehicles = async (park_id = this.park_id, page = 1, limit = 100) => {
        vehiclesService.vehicles(park_id, page, limit)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        });
    };

    render() {
        return (
            <div>
                <h4>Vehicles</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link to={`/auto-park/parks/${id}/vehicles/create`}>Create Vehicle</Link>
                    </li>
                </ul>
                <h4>Vehicles</h4>
                <div className="table-responsive">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>Licence Plate</th>
                                <th scope='col'>mark</th>
                                <th scope='col'>Model</th>
                                <th scope='col'>Relase Date</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                vehicles.map(vehicle => {
                                    return (
                                        <tr key={vehicle._id}>
                                            <th scope='row'>{vehicle.licence_plate}</th>
                                            <td>{vehicle.mark}</td>
                                            <td>{vehicle.model}</td>
                                            <td>{vehicle.relase_date}</td>
                                            <td>
                                                <button className="btn bt-primary" onClick={this.edit(vehicle)}>
                                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                                </button>
                                                <button className="btn bt-primary" onClick={this.remove(vehicle._id)}>
                                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default Vehicles;