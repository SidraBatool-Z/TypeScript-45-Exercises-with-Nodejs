var friend = "dave beckham";
console.log(friend.toUpperCase());
console.log(friend.toLowerCase());
console.log(friend.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
