//Type your code in this function
function Tracker(){

  let seeds = [];
  let percent = [];

  //implement all six functions below
function numOfSeeds(list){

  let found = 0

  for(let i = 0; i < list.length; i++){
    if(list [i] !== null){
      found++
    }
  }
    return found
}

function addSeeds(s){

 seeds.push(s) ;

}

function removeSeed(s){

  for(let i = 0; i < seeds.length; i++){

     if(seeds[i] === s){

      seeds[i] = null;
      
      percent[i] = 0;
    
     }
    }
     
}

function reportHealth(){
  let sum = 0;
  
  let count = 0;
   
  for(i = 0; i<percent.length; i++){
      
    if(percent[i] !== 0){
        
      sum = sum + percent[i];
       
      count++;
      }
     return sum/count;
  }
  function update(percent){
    
    for(i = 0; i < percent.length; i++){
     
      let r = Math.random;
      
      if (r > percent [i]){
       
        percent [i] = r;
      }
    }
  }