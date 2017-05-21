"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var class_transformer_1 = require("class-transformer");
var User_1 = require("./User");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular 2';
        this.user1 = null;
        var user1 = new User_1.User();
        user1.age = 123;
        user1.firstName = "Amit";
        user1.lastName = "Gera";
        user1.id = 1;
        console.log("I am here");
        var user = class_transformer_1.serialize(user1);
        this.jsonUser = [{ "age": 123, "firstName": "Amit", "lastName": "Gera", "id": 1 },
            { "age": 123, "firstName": "Amit", "lastName": "Gera", "id": 1 },
            { "age": 123, "firstName": "Amit", "lastName": "Gera", "id": 1 }];
        this.users = class_transformer_1.plainToClass(User_1.User, this.jsonUser);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map