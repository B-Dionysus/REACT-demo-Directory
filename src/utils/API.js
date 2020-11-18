import axios from "axios"

export default {
    getAllUsers:function(){
        return axios.get("https://randomuser.me/api/?results=10");
    }
}
