export class User {
    userId: number;
    email: string;
    userName: string;
    password: string;

    constructor(userId:number = 0, email:string = "", userName:string = "", password:string = "") {
        this.userId = userId;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }
}