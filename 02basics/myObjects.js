"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'Rajat',
    age: 25,
    country: 'India'
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'Rajat', isPaid: true });

let newUser = { name: 'Rajat', isPaid: true , age: 25, country: 'India'};
createUser(newUser);
