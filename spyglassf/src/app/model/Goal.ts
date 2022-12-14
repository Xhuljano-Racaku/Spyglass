import { User } from "./User";

export class Goal {
    id: number;
    name: string;
    description: string;
    image: string;
    targetDate: Date;
    targetAmount: number;
    savedAmount: number;
    user: User;

    constructor(id:number = 0, name:string = "", description:string = "", image:string = "", targetDate:Date = new Date(), targetAmount:number = 0, savedAmount:number= 0, user = new User()) {
        this.id = id;
        this.name = name;
        this. description = description;
        this.image = image;
        this.targetDate = targetDate;
        this.targetAmount = targetAmount;
        this.savedAmount = savedAmount;
        this.user = user;
    }
}