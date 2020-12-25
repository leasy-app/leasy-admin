import { login } from "./api";
import { sha256 } from "./util";

export default class Auth{
    static isAuthorized = () => {
        let tk = localStorage.getItem("auth-token");
        if(tk){
            return true;
        }
        return false;
    }
    static login = async (user, pass) => {
        if(await login(user, pass)){
            let tk = await sha256(user + "/" + pass);
            localStorage.setItem("auth-token", tk);
            return tk;
        }
        return null;
    }
}