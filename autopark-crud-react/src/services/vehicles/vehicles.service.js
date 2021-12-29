import Axios from "axios";
import { API } from '../../constants/endpoints.constants';

export default class VehicleService {

    static prefix = `${API}/vehicle`;

    static vehicles (park_id, page, limit) {
        return Axios.get(`${this.prefix}s/${park_id}?page=${page}&limit=${limit}`);
    }

    static create (vehicle) {
        return Axios.post(`${this.prefix}`, vehicle);
    }

    static remove (vehicle_id) {
        return Axios.delete(`${this.prefix}/${vehicle_id}`)
    }

    static update (vehicle_id, body) {
        return Axios.put(`${this.prefix}/${vehicle_id}`, body)
    }
}