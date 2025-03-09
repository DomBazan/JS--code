// // fetch("https://jsonplaceholder.typicode.com/users/1"))
// const emailRef = document.querySelector(".email");

// console.log(emailRef);
// // 1. Then
// // fetch("https://jsonplaceholder.typicode.com/users/1")
// //     .then((response) => {
// //         return response.json(); //use backend code to convert it into Frontend code
// //     })
// //     .then((data) => {
// //         console.log(data);
// //     })
// //     .catch((error) => {
// //         console.log(error);
// //     });

// // 2. Async/Await (All in order!)
// async function main(){
//    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const data = await response.json();
//     console.log(data);
//     emailRef.innerHTML = data.email;
// }

// main();

// const statusRef = document.querySelector(".status");

// function getSubscriptionStatus(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("VIP")
//        }, 2000);
//     });
// }



// async function main(){
//     const status = await getSubscriptionStatus();
//     statusRef.innerHTML = status;
// }
// main();
const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");


function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP");
        }, 2000);
            });
        };
    

function main() {
    // Example usage
    getVideo("VIP")
        .then(result => {
            console.log(result); // Output: show video
        })
        .catch(error => {
            console.log(error);
        });

    getVideo("FREE")
        .then(result => {
            console.log(result); // Output: show trailer
        })
        .catch(error => {
            console.log(error);
        });

    getVideo("basic")
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error); // Output: no video
        });
}

// Call the main function to see the results
main();