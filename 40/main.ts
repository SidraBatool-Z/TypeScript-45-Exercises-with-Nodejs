//creating a function
function make_album(artist_name:string, album_title:string, tracks?:number){
let album:{artist:string, title:string, tracks?:number}={
artist:artist_name,
title:album_title,
};
if(tracks !== undefined){
    album.tracks=tracks;
};
return album;
} 

//calling the function
let album1= make_album("Tupac","All Eyez on me");
let album2= make_album("G-Eazy", "The Beautiful & Damned");
let album3=make_album("Halsey","If I Can't Have Love,I Want Power");
let album4=make_album("Talha Anjum","Open Letters",15);

//printing the values
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);