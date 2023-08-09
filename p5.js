function cubeNumber(number) {
    if(typeof number !== "number") {
        return "please input number only";
    }
    else {
        let cube = number**3;
        return cube;
    }
}

function matchFinder(string1, string2) {

    if(typeof string1 !== "string" || typeof string2 !== "string") {
        return "please input string only";
    }
    else {
        if (string1.includes(string2)){
            return true;
        }
        else {
            return false;
        }
    }
}

function sortMaker(arr) {
    if(!Array.isArray(arr) === true) {
        return "the input should be an array only";
    }
    else if(typeof arr[0] !== "number" || typeof arr[1] !== "number") {
        return "input is other than number or less than two elements"
    }
    else if(arr[0]<0 || arr[1]<0) {
        return "Invalid Input"
    }
    else if(arr.length>2) {
        return "please input only two elements"
    }
    else {
        if (arr[0]<arr[1]) {
            // return arr.reverse();
            let bArr = [];
            for(let i = arr.length-1; i >= 0; i--){
                bArr.push(arr[i]);
            }
            return bArr;
        }
        else if(arr[0] === arr[1]){
            return "equal";
        }
        else {
            return arr;
        }
    }
}

function findAddress(obj) {
    if (typeof obj !== "object" || Array.isArray(obj)) {
        return "the input should be an object only";
    }
    else {
        const keys = ['street', 'house', 'society'];
        let result = [];
        for (let key of keys) {
            if (obj[key] !== undefined) {
                result.push(obj[key]);
            }
            else {
                result.push('__');
            }
        }
        return result.toString();
    }

}

function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) === true || typeof totalDue !== "number") {
        return "first input is not an array or second input is not a number";
    }
    else if (changeArray.length === 0) {
        return "empty array";
    }
    else if (totalDue < 0) {
        return "only positive number is allowed for price"
    }
    else {
        let sumArray = 0;
        for (let items of changeArray) {
            if (items < 0 || typeof items !== "number") {
                return "only positive number is allowed for array";
            }
            else {
                sumArray += items;
            }
        }
        // console.log(sumArray)
        if (sumArray >= totalDue) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log("p1", cubeNumber('number'))
console.log("p2", matchFinder('string22', 'string2'))
console.log("p3", sortMaker([5,2]))
console.log("p4", findAddress({ society: "Earth Perfect", street: 10 }))
console.log("p5", canPay([10], -10))