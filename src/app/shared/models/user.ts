import { Role } from "./roles";

export class User {
    id: number = 1;
    firstName: string ="";
    lastName: string="";
    username: string="";
    role: Role = Role.Admin;
    token?: string;
    url: string="";
}