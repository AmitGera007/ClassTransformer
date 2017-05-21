import { Component } from '@angular/core';

import { serialize, deserialize, deserializeArray, plainToClass } from 'class-transformer'

import { User } from './User';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css'],
    moduleId: module.id
})
export class AppComponent {

    name: string = 'Angular 2';
    user1: User = null;
    jsonUser: Object[]; 
    users: User[];
    constructor() {
        let user1 = new User();
        user1.age = 123;
        user1.firstName = "Amit";
        user1.lastName = "Gera";
        user1.id = 1;
        console.log("I am here");
        let user = serialize(user1);

        this.jsonUser = [{ "age": 123, "firstName": "Amit", "lastName": "Gera", "id": 1 },
        { "age": 123, "firstName": "Amit", "lastName": "Gera", "id": 1 },
        { "age": 123, "firstName": "Amit", "lastName": "Gera", "id": 1 }];

        this.users = plainToClass(User, this.jsonUser, );

}
    
}
