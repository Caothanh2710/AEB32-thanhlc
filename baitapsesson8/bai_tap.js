// ---------------bai 6-----------------------
// const prompt = require('prompt-sync')();

// let n = prompt('nhap so nguyen duong n');
// let m = prompt('nhap so nguyen duong m') ;

// let ket_qua

// for (let x = 0; x <= n && x <= m; x++) {
//     if (n % x === 0 && m % x ===0) {
//         ket_qua = x
//     }

// }
// console.log(ket_qua);

// ------------------bai 7 ---------------
// let s1 = "gOOlE cHmore";
// let s2 = s1.toLowerCase();
// const tach_dau = s2.split(" ");
// let ket_qua;
// let noi_chu = [];
// let output = "";
// for (const tung_chu of tach_dau) {
//   ket_qua = tung_chu[0].toUpperCase() + tung_chu.slice(1);
//   noi_chu.push(ket_qua);
// }

// output = noi_chu.join(" ");
// console.log(output);

// ----------------------bai 8 -----------------
let input1 = 'HAPPY NEW YEAR 2021'
const tach_chu = input1.split(' ');
let noi_chu = [];
let output 
let ket_qua
for (const so of tach_chu) {
    ket_qua = so.length
    console.log(ket_qua);
    noi_chu.push(ket_qua);
    
}
output = noi_chu.join(" ");
console.log(output);


