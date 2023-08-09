// Problem - 1(basic math)
// ত োমাকে cubeNumber() নামে একটা function দে ওয়া হয়ে ছে । functionটা একটা positive input নাম্বার নি বে ।
// Task:
// 1. input নাম্বারটাকে cube করে result টা রি টার্ন করবে ফাংশন থে কে ।
// 2. Bonus: ইনপুট হি সে বে number টাইপ এর পরি বর্তে অন্য কি ছুদি লে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন
// করে দি বে ফাংশন থে কে ।



function cubeNumber(number) {
    if(typeof number !== "number") {
        return "please input number only";
    }
    else {
        let cube = number**3;
        return cube;
    }
}
let output = cubeNumber("d");
console.log(output);
