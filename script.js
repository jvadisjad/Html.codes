'use strict'
  
var studentName = "sajad";
var age = 22;
var score = [18 , 9.5];
 

var sum = score[0] + score[1];
var average = sum / score.length;


console.log("studentName :" , studentName)
console.log("age" ,  age)
console.log("scores :" ,  score)
console.log("Average :", average)

console.log("total score :" , sum)

for (var i = 0; i < score.length; i++){
   if (score[i] >= 10){
   console.log(score[i], "passed")
   }else {
      console.log(score[i], "failed")

   }
}
   

