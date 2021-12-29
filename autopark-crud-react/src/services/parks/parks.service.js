import Axios from "axios";
import { API } from '../../constants/endpoints.constants';

export default class ParksService {

    static prefix = `${API}/park`;

    static parks (page, limit) {
        return Axios.get(`${this.prefix}s?page=${page}&limit=${limit}`);
    }

    static create (park) {
        return Axios.post(`${this.prefix}`, park);
    }
}
