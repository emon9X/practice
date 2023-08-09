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

let output = [1.1,1.1];
console.log(sortMaker(output));