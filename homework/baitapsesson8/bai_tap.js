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
// let input1 = 'HAPPY NEW YEAR 2021'
// const tach_chu = input1.split(' ');
// let noi_chu = [];
// let output
// let ket_qua
// for (const so of tach_chu) {
//     ket_qua = so.length
//     console.log(ket_qua);
//     noi_chu.push(ket_qua);

// }
// output = noi_chu.join(" ");
// console.log(output);
// -------------bài 9 -----------------
// const prompt = require("prompt-sync")();
// let n = prompt('nhap 1 so nguyen n : ');
// let i = 2;
// let uoc = [];
// let abc = [];
// let chotrong = "";
// for (let x = 1; x <= n; x++) {
//   if (n % x === 0) {
//     abc.push(x);
//     // console.log(x);
//   }
// }

// while (n > 1) {
//   if (n % i === 0) {
//     n = n / i;
//     uoc.push(i);
//   } else {
//     i = i + 1;
//   }
// }
// let gia_tri = uoc.length;
// for (let p = 0; p < gia_tri - 1; p++) {
//   chotrong = chotrong + uoc[p].toString() + "*";
// }

// chotrong = chotrong + uoc[gia_tri - 1].toString();
// console.log(chotrong);
// console.log(abc.length);
// --------------------bai 10 ---------------
// 2a >= b ----> parseInt(n/2) * b + ( n%2) * a ;
// let n = 5
// let a = 1
// let b = 1
// if (2*a >=b) {
//     console.log(parseInt(n / 2)*b + (n % 2) * a );
// } else {
//     console.log(n * a);
// }
// ----------- ve tam giac deu ---------------
// let h = 5
// let str = ''

// for (let i = 1 ; i <= h ; i++) {
//     for (let star = i; star <= i ; star++) {
//         str += '*'
        
//     }
//     console.log(str);

// }
// -------- ve tam giac deu ------
let h = 5
let str = ''

for (let i = 1 ; i <= h ; i++) {
        for (let star = i; star <= i ; star++) {
            str += '*'
            
        }
        console.log(str);
    
    }

// star --> 2*index-1 ---- space = h - index