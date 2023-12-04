/**
 *  for (let i = 100; i >= 1; i-=2) {
    console.log(i);
    }
 */

/** 1-misol
     let n = +prompt("Sonni kiriting.");
     let sum = 0;

     for( let i = 1; i <= n; i++ ){
     if (i % 2 == 1) {
        sum += i;
     }
     }
        console.log(sum);
*/

/** 2-misol
    let n = +prompt("Sonni kiriting.");
     let sum = 1;

     for( let i = n; i >= 1; i-- ){
     if (i % 3 == 0) {
     sum *= i;
     }
     }
     console.log(sum);
 */

/** 3-misol
     let a = +prompt("1-chi sonni kiriting.");
     let b = +prompt("2-chi sonni kioriting.");
     let sum = 0;

     for( let i = a; i <= b; i++ ){
     if (i % 3 == 0) {
       sum ++;
     }
     }
     console.log(sum)
*/

/** 4-misol
     let a = +prompt("1-chi sonni kiriting.");
     let b = +prompt("2-chi sonni kioriting.");
     let sum = 0;

     for( let i = a; i <=b; i++ ){
     if (i  % 5 == 0 || i % 7 == 0) {
       sum += i;
     }
     }
     console.log(sum);
*/

/** 5-misol
    let a = +prompt("1-chi sonni kiriting.");
    let b = +prompt("2-chi sonni kioriting.");
    let sum = 0;

    for( let i = a; i <=b; i++ ){
    if (i % 2 == 1) {
    sum += i * i;
    }
    }
    console.log(sum);
*/

/** 6-misol
    let b = +prompt("1-chi sonni kiriting.");
    let a = +prompt("2-chi sonni kioriting.");
    let sum = 0;

    for( let i = b; i <=a; i++ ){
    if (i % 2 == 0) {
    sum *= i * i * i;
    }
    }
    console.log(sum);
*/

/** 7-misol
    let a = +prompt("Ixtiyoriy son kiriting");
    let sum = 0;

    for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      sum += i;
    }
    }
    console.log(sum);
 */

    let a = +prompt("Ixtiyoriy son kiriting");
    let sum = 0;

    for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      sum ++;
    }
    }
    console.log(sum);
