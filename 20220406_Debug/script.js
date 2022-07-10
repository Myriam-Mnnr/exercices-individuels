
//ETAPE 1 
function findLongest(str) {

    var spl = str.split(" "); 
    var longest = 0;

    for (var i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length;
        }
    }
    return longest;
}

console.log(findLongest("ceci est un test du longestwordever"));


//ETAPE 2 

class Dinglemouse {

    constructor() {
        this.name = this.age = this.sex = 0
    }

    setAge(age) {
        this.age = age
        return this
    }

    setSex(sex) {
        this.sex = sex
        return this
    }

    setName(name) {
        this.name = name
        return this
    }

    hello() {
        if (this.name == 0) {
            return `Hello. I am ${this.age}. I am ${this.sex == 'M' ? "male" : "female"}.`
        } else {
            return `Hello. My name is ${this.name}. I am ${this.age}. I am ${this.sex == 'M' ? "male" : "female"}.`
        }
    }
}


let obj = new Dinglemouse()
let age = obj.setAge(33);
let sex = obj.setSex("F");
//let name = obj.setName("Alya")
console.log(obj.hello());



/* Premieres pistes etape 3 

let listeCarre = [1, 4, 9, 16, 25, 36, 49, 64, 81];

let n = 15;
function IsSommmeCarre() {
    let array = [];
    for (y = 1; y < n + 1; y++) {
        for (i = 1; i < n + 1; i++) {
            let somme = i + y;
            if (listeCarre.includes(somme)) {
                array.push([i, y]);
            }
        }
    }
    return array;
}

console.log(IsSommmeCarre()); 
*/

