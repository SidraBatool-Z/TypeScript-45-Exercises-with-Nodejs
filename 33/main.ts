//creating an array
let numbers:number[]=[1,2,3,4,5,6,7,8,9];

//using for-of loop
for(let oneNumber of numbers){
    let ordinal="string";

    if(oneNumber===1){
     ordinal=`st`;
     }
     else if(oneNumber===2){
        ordinal=`nd`;
     }
     else if(oneNumber===3){
        ordinal=`rd`;
     }
     else{
        ordinal=`th`;
     }
 console.log(`${oneNumber}${ordinal}`);
};
