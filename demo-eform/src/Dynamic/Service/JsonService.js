 import axios from "axios";

 class JsonService {

    getJsonData(a) {
        return axios.post("http://appdemo.afm.cc:8401/Auth/template/get",a)
    }
 }
 
 export default new JsonService();
 export const server_URL = "http://appdemo.afm.cc:8401/Auth/template/get";
 export const RIF = {
    "action": "create",
    "flow_id": "RFI_flow",
    "submit_id": "string"
}