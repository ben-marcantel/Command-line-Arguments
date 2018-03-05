#!/usr/bin/env node

let input = process.argv;
let output; 
let [,a,...b] = input; 


const sum = (b,bn)=>{
   return parseInt(b) + parseInt(bn);
};
   
const getSum = ()=>{
    output = b.reduce(sum);
    return output;
};
        
const write=()=>{ 
    process.stdout.write(output + "\n");
} 

getSum(input);
write(output);

        
  