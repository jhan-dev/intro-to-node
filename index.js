// jsint esversion:6

// const fileSystem = require('fs')

// fileSystem.copyFileSync("file1.txt", "file2.txt")

let superheroes = require("superheroes")
let mySuperHeroName = superheroes.random()

console.log(`Your superhero name is: ${mySuperHeroName}!`)

let supervillains = require("supervillains")
let mySuperVillainName = supervillains.random()

console.log(`Your supervillain name is: ${mySuperVillainName}!`)
