// ------------------------------- 1 ---------------------------------------------

var currency = (number) => '$' + number.toFixed(2);
console.log(currency(3));

// ------------------------------- 2 ---------------------------------------------

let dictionary = {
        Jabroni: "Patron Tequila",
        [ 'School Counselor' ]: "Anything with Alcohol",
        Programmer: "Hipster Craft Beer",
        [ 'Bike Gang Member ']: "Moonshine",
        Politician:	"Your tax dollars",
        Rapper: "Cristal"
    }

function getDrinkByProfession(name){   
    for (let prop in dictionary) {
        if (name.toLowerCase() === `${prop}`.toLowerCase()) {
           return `${dictionary[prop]}`;
        }
    }
    return "Beer";
}

console.log(getDrinkByProfession("School CounselOR b"))

// ------------------------------- 3 ---------------------------------------------

function bandName(name){ 
    name = name.trim();
    if (name.charAt(name.length-1) !== name.charAt(0)){
        return 'The ' + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    } else {
        return (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).concat(name);
    }
}

console.log(bandName("alaska "));

// ------------------------------- 4 ---------------------------------------------

avgArray_1 = [[1, 2, 3, 4], [5, 6, 7, 8]]; // => [3, 4, 5, 6]
avgArray_2= [[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]; // => [22.5, 11, 38.75, 38.25, 19.5]

function averageArray(array){
    let newArray = array[0].map((col, i) => array.map(row => row[i]));
    let sum = 0;
    let avgArr = [];
    for (let value of newArray) {
        total = value.reduce((sum, value) => sum + value, 0);
        avgArr.push(total/value.length);
    }
    return avgArr;
}

console.log(averageArray(avgArray_2));

// ------------------------------- 5 ---------------------------------------------

deepCount_1 = [1, 2, 3];  
//>>>>> 3
deepCount_2 = ["x", "y", ["z"]];  
//>>>>> 4
deepCount_3 = [1, 2, [3, 4, [5]]];  
//>>>>> 7

let sum = 0;
function deepCount(array){   
    for (let prop of array) {
        sum++;
        if (Array.isArray(prop)){
            deepCount(prop);
        }
    }
    return sum;
}

console.log(deepCount(deepCount_3));

// ------------------------------- 6 ---------------------------------------------

function functionator(str) {
    let array = str.split(' ');   
    return doFunction(null, array);
}

function doFunction(child, arr, arrLength){  
    var obj = {['' + arr[arr.length - 1] + '']: function(){return child;}};
    if(arr.length == 1)
    {
        return obj;
    }
    else
    {
        arr.pop();
        return doFunction(obj, arr);
    }
}

function functionatorEvalString(objName, string)
{
    return objName + '.' + string.replace(/ /g, "().") + '()';
}

var str = 'there are two kinds of people';
var func = functionator(str);
func.there().are().two().kinds().of().people();