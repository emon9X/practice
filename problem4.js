// function findAddress(obj) {
//     if(typeof obj !== "object") {
//         return "the input should be object only";
//     }
//     else {
//         const keys = ['street', 'house', 'society'];
//         let objectKeys = Object.keys(obj);
//         let result = [];
//         // console.log(objectKeys);
//         for (let key of keys) {
//             for(let objectKey of objectKeys) {
//                 if (objectKeys.includes(key)) {
//                     result.push(obj[objectKey]);
//                 }
//                 else {
//                     result.push('__');
//                 }
//             }

//         }
//         return result;
//     }
// }
// const address = {street: 10, society: "Earth Perfect"};
// let output = findAddress(address);
// console.log(output);

// const kd = Object.keys(address);
// console.log(kd);
// console.log(kd[0]);

function findAddress(obj) {
    if(typeof obj !== "object") {
        return "the input should be object only";
    }
    else {
        const newObj = {};
        
        for (const key in obj ){
            if(obj.hasOwnProperty(key)){
                newObj[key.toLowerCase()] = obj[key];
            }
        }
        console.log(newObj);
        const keys = ['street', 'house', 'society'];
        let objectKeys = Object.keys(newObj);
        let result = [];
        console.log(objectKeys);
        for (let key of keys) {
                if (objectKeys.includes(key)) {
                    result.push(newObj[key]);
                }
                else {
                    result.push('__');
                }
            }
            return result.toString();
        }
        
}
const address = {sOciet: "Earth Perfect", Street: 10,House: "15A",};
let output = findAddress(address);
console.log(output);



