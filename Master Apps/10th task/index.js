var dog = {
    name: "Nero",
    size: 3,
    color: 'brown',
    giveVoice(){
        let voice = "Hau Hau"
        return voice
    },
    getDog(){
        let str = JSON.stringify(dog);
        let withouSpecialCharacter = str.replace(/[^\w ]/g, " ");
        return withouSpecialCharacter;
    },
}
console.log(dog.giveVoice())
console.log(dog.getDog())



