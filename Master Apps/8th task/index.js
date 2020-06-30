const user = {
    firstname: "Jan",
    lastname: "Kowalski",
    gender: "male",
    age: 17,
    getFullName(){
        return this.firstname + " " + this.lastname 
    },
    isMale(){
        if(this.gender == "male"){
            return true;
        }
        else {
            return false;
        }
    },
    isOfAge(){
        if ( this.age >= 18){
            return true;
        }
        else {
            return false;
        }
    }
}
