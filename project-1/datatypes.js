//true 1 // false 0
// let a = false;

// let x = '';
// let y = null;
// console.log("X=", typeof y);
// console.log(a);

// const person = {
//     name: "darwin",
//     lastName: "Ldarwin",
//     age: 50,
//     childrenNames: [],
//     eligible: () => {
//             console.log("eligible");
//     }
// }
// person.eligible();

// let car1 = "BMW";
// let car2 = "Audi";
// let car3 = "TATA";

// let car = ["BMW", "Audi", "TATA"]; // index = 0

// console.log(car[1]);
// console.log(car[2]);

let avi = ["BMW", 11, 1.015, {
    name: "darwin",
    lastName: "Ldarwin",
    age: 50,
    childrenNames: [],
    eligible: () => {
        console.log("Age", this);
        // console.log("eligible");
    }
}]; // index = 0

// console.log(avi[3].age);
avi[3].eligible();



