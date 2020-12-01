export default class Auth{
    static isAuthorized = () => {
        let tk = localStorage.getItem("auth-token");
        if(tk){
            return true;
        }
        return false;
    }
    static login = (user, pass) => {
        if(user === 'admin' && pass === 'admin'){
            localStorage.setItem("auth-token", "some-auth");
            return "some-auth-token";
        }
        return null;
    }
}