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

function reportHealth(list){
  let sum = 0

  count = 0
    
    for(let i = 0; i< percent.length; i++){
      
      if(percent[i] !== null);
         
      percent++;
    }
}