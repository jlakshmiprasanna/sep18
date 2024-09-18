//(Data Types)

// (PRIMITIVE-->NUMBERS)
var age=22;

// (PRIMITIVE-->STRING)
var name="Prasanna";
var job="Trainer&Developer";

// (PRIMITIVE-->BOOLEAN)
var value="true";
var sal=30000;

console.log(age);
console.log(name);
console.log(job);
console.log(value);
console.log(sal);

// (NON-PRIMITIVE-->OBJECT)
var details={
    name:"JLP",
    age:22,
}
console.log(details.name)

// (NON-PRIMITIVE-->ARRAYS)
var info=[4,"JLP","true",{name:"JLP",age:22},[1,2,3]]

console.log(info);
console.log(info[5-1]);

var max={
    parents:{
     Dad:{
        name:"Ram Mohan",
        age:"45",
        occupation:"fancy business",
     },
     Amma:{
        name:"Dhana Lakshmi",
        age:"40",
        occupation:"house wife",
     }
    },
    child:{
        me:{
            name:"Prasanna",
            age:"21",
            study:"Coaching"
        },
        sister:{
            name:"Jyothi",
            age:"18",
            study:"BTECH",
        }
    }
}

console.log(max);
console.log(max.child);