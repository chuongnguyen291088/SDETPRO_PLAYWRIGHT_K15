const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
// Dot Notation
person.firstName = "Mohamed"
// Bracket Notation
person["firstName"] = "Jaian"

let selection = "firstName";
person[selection] = "Shizuka"

console.log(person);

const car = {
    type: "Fiat",
    model: "500",
    color: "white"
}