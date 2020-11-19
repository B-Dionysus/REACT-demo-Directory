import axios from "axios"
// "url": "https://cors-anywhere.herokuapp.com/api.votesmart.org/Candidates.getByZip?o=JSON&zip5="+zip+"&key="+APIKey,
       
export default {
    getAllUsers:function(num){
        return axios.get("https://randomuser.me/api/?results="+num);
    }
}
