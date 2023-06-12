import axios from "axios";
import {global} from "./config.js"
const {base_path} = global.config

class Api {

    access = axios.create({
        baseURL: `${base_path}api`,
        headers: {
            "Content-type": "application/json",
        }
    })
}

export default Api;