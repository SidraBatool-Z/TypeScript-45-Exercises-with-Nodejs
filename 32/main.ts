//Creating arrays for curent and new users

let current_users:string[]=["Fizz","Dave","Taha","Aza","Eli"];

let new_users:string[]=["Bella","Stella","Taha","Eliya","Aza"];

//loop thru new_users list
new_users.forEach(newUsers=>{
   //creating a variable 
    let new_users_one=current_users.some(currentUsers=>currentUsers.toLowerCase()===newUsers.toLowerCase())
   
    if(new_users_one){
        console.log(`This username ${newUsers} is already Taken, try again.`);
    }
    else{
        console.log(`This username ${newUsers} is available.`);
    }
}
);