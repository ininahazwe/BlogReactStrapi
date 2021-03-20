import {URL_POSTS} from "../config";
import axios from "axios";

function findAll(){
    return axios.get(`${URL_POSTS}`).then((res) => res.data);
    }
    function findOne(id) {
        return axios.get(`${URL_POSTS}/${id}`).then((res) => res.data);
    }
    function getComments(id){
        return axios.get(`${URL_POSTS}/${id}/comments`).then((res) => res.data);
    }
export default {
    findAll,
    findOne,
    getComments,
};