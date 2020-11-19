import axios from "axios"
       
export default {
    getAllUsers:function(num){
        return axios.get("https://randomuser.me/api/?results="+num);
    }
}
