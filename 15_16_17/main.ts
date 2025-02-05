let guests:string[]=["Abbas","Taha","Farah","Fiza"];


//printing the guest's name who is not joining for the dinner
let cancelled=guests[3]; 

console.log(`Hello everyone, unfortunately ${cancelled} can't make it for dinner tonight.`);


//replacing the guest who can't make it with a new one
guests.splice(3,1,"Muba"); 


//sending invites to new list
for( let i=0 ; i<guests.length ; i++) {
    console.log(`Hello ${guests[i]}, Would you like to join me for dinner tonight?`)};

//Ex16: informing everyone that we found a bigger table
console.log("Hello Everyone, we have found a bigger table for us.");

//adding a guest to the beginning of the list
guests.unshift("Sidra");


//adding a guest at the end of the list
guests.push("Zaidi");


//adding a guest to the middle of our list
let mid:number=Math.floor(guests.length/2);

guests.splice(mid,0,"Aza");

//printing new invites for the updated list
guests.forEach(newinvite=>console.log(`Merhaba ${newinvite}, Would you like to join us for dinner tonight?`));

//Ex17

console.log("Oh! I can only invite two people for the dinner, sorry for the inconvinience.");

//removing guests until only two remains in the list
while (guests.length>2){ 
    let removedguests=guests.pop();
    console.log(`Sorry ${removedguests}, I can't invite you to dinner.`);
};
console.log(guests);
//printing a message to the remaining guests
for (let i = 0; i < guests.length; i++) {
    console.log(`Hello ${guests[i]}, You are still invited to the dinner tonight.`);
}
//emptying the list
guests.pop();
guests.pop();

console.log(`The final guest list is [${guests}]`);