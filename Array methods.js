const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];
// [32, 57, 22]
// Task 1
// Print the name list - As an array
// Expected Output
// ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
//  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]
console.log(scores.map(num=>num.name));
// Task 2
// >=40 pass.. find those student that passed (Use array method)
// Expected Output
// [{
//     marks: 57,
//     name: "Lillian Ellis"
//   },
//     {
//     marks: 91,
//     name: "Debra Beard"
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock"
//   }]
const ispass=(num)=>(num.marks>=40);
console.log(scores.filter(ispass));

// Task 3
//  Find all the names who failed the exams (Array methods)
// Expected Output
//   ["Yvette Merritt",
//   "Mccall Carter",
//   "Pate Collier",
//   "Hatfield Hodge"
// ];
// const failed=(num1)=>(num1.marks<=40);
// console.log(scores.filter(failed));
// Filter method
const failed=scores.filter(score=>score.marks<40);
console.log(failed);
// const failedname=fail=>(fail.name);
// console.log(failed.map(failedname));
// Map method
const failednames=failed.map((score)=>score.name);
console.log(failednames);
// Dot chain
const failedname=scores.filter(score=>score.marks<40).map(score=>score.name);
console.log(failedname);
// Task 4
//const avg1=scores.reduce((sum,curr)=>(sum+curr),0);
//const avg1=scores.reduce((sum,curr)=>(sum+curr).marks,0);
// Sum of marks by using Reduce method
const Total=scores.reduce((sum,curr)=>(sum+curr.marks),0);
console.log(Total);
// const num=scores.length;
// console.log(num);
// const avg1=Total/7;
// console.log(avg1);
// const avg2=scores.reduce((sum,curr)=>(sum+curr.marks)/num,0);
// console.log(avg2);
// average marks of class by using Reduce method
const avg=scores.reduce((sum,curr)=>(sum+curr.marks),0);
console.log(avg/scores.length);
// Task 5 - Find Class topper name
// const Maxmark=scores.map((score)=>Math.max(score.mark));
// console.log(Maxmark);
// const Maxi=scores.filter(score=>Math.max(score.marks)).map(score=>score.name);
// console.log(Maxi);
const max=Math.max(scores.name);
// const ismax=(num)=>(Math.max(num.marks));
// console.log(scores.filter(ismax));
// const ismax1=(num)=>(num.marks);
// console.log(scores.filter(ismax1));
// const Maxmark=scores.filter((score)=>(score.Math.max(mark)));
// console.log(Maxmark);
