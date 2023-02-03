import axios from "axios";
import { env } from "../../env";
import { ApiRoutes } from "../Routes/ApiRoutes";

export default class Request {
    static async handleAxios(handle) {
        return await axios({
            url: handle.url,
            method: handle.method,
            data: handle.data,
        });
    }

    static async get(data) {
        return await this.handleAxios(data);
    }
}