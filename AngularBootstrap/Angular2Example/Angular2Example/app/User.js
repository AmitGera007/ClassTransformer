"use strict";
var User = (function () {
    function User() {
    }
    User.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.prototype.isAdult = function () {
        return this.age > 36 && this.age < 60;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map