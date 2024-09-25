//Array of usernames

let usernames:string[]=["Admin","Dave","Fizz","Taha","Bella","Eli"];

for(let username of usernames){
    if(username==="Admin"){    
    console.log("Hello Admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${username}, thank you for logging in again.`)
    }
};