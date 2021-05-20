const superVillains = require("supervillains");
const superHeroes = require("superheroes");

var MySuperVillainName = superVillains.random();
var MySuperheroName = superHeroes.random();

var randomNumber = Math.floor(Math.random()*2);

console.log("Battle of the century! " + MySuperheroName + " vs " +MySuperVillainName);

setTimeout(function(){
    console.log("Let The Battle Begin!");
}, 500);

setTimeout(function(){
    if(randomNumber >= 1)
    console.log(MySuperheroName+ " defeats " + MySuperVillainName);
    else
    console.log(MySuperVillainName+ " defeats " + MySuperheroName);
}, 1000);


