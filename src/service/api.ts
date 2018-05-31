import { Http } from './http';
interface User {
    id: number;
    username: string;
    password: string;
    sex: number;

}
export class ClientApi {
   private clientApi = {
        /**
         * method post,get
         * 
         * type:0推荐1最新2最热
         * 
         * body:{userId:string,token:string,type: 0|1|2}
         * 
         * response: success  =>User
         * 
         * response: error =>string
         */
        articleIndex: '/article/index',
        signup: '/signup',
        /**
         * Get
         * 
         * query:?userName,  userPassword,
         */
        loginLogin:'/login/login'
    }


    private http = new Http();


      articleIndex(type: 0|1|2){
        // return this.http.Get(this.clientApi.articleIndex,{userId,token,type})
    }
    async  loginLogin(userName,userPassword){
        let result :{code:number,msg:string,content:IUser} =await this.http.Get(this.clientApi.loginLogin,{userName,userPassword});
        if(result.code==200){
            return result.content;
        }else{
            this.http.showError(result.msg);
            return false;
        }


    }
    

}

