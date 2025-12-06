// 7. The following object represents a basketball game and keeps track of the score as the game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works

const basketballGame = {
score: 0,
fouls: 0,  // c) Add a new object property to keep track of the number of fouls 
freeThrow() {  
console.log(this.score++);
console.log(this.fouls+=1);  //and a method to increment it, similar but separate to the score. 
return this;
},
basket() {
console.log(this.score += 2);
return this;
},
threePointer() {
console.log(this.score += 3);
return this;
},
halfTime() {
console.log('Halftime score is '+this.score, 'and foul count is '+this.fouls); //Include the foul count in the half time and full time console messages
return this;
},
fullTime() { // b) Add a new method to print the full time final score
    console.log(this.fouls += 7);
console.log('Fulltime score is ' +this.score, 'final foul count is '+this.fouls);
} //Include the foul count in the half time and full time console messages
};

//modify each of the above object methods to enable function chaining as below:
//basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().fullTime();

// d) Test your object by chaining all the method calls together in different combinations.
//basketballGame.basket().basket().basket().basket().halfTime();
basketballGame.basket().freeThrow().freeThrow().halfTime().freeThrow().basket().threePointer().fullTime();