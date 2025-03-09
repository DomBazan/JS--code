// let subscribed = true
// let loggedIN = true

// if(subscribed === true) {   
//     console.log('show the video');
//     } 
//     else if(loggedIN=== true)
//         {console.log('update their subscription');
//             } 
//             else {
//         console.log('tell user to log into account');
//         }

// let cash = 40
// let price = 40
// let x = cash - price
// let isStoreOpen = true

// if (cash > price || isStoreOpen === true)  {
//     console.log(`buy the item- here's ${x} your change`);
// }
// else if(cash === price && isStoreOpen === true) {
//     console.log("You have enough money to buy the item, have a nice day!!!");
// }
// else {
//     console.log(`You don't have enough money to buy the item.-- you still owe ${-x}`);
// }


// let hot = true

// hot ? console.log('turn down the heat') : console.log('turn up the heat')

let cash = 30
let price = 40
let x = cash - price
let isStoreOpen = true


let str = cash >= price && isStoreOpen? `buy the item- here's ${x} your change` : `do not give receipt`
console.log(str)