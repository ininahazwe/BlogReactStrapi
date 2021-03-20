import {URL_COMMENTS} from "../config";
import axios from "axios";

function create(comment){
    return axios.post(URL_COMMENTS, comment)
}
function findALl(){
    return axios.get(URL_COMMENTS).then((res) => res.data);
}
export default {
    create,
    findALl,
};