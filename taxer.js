const createTaxer = (percentage) =>{
    return (amount)=>{
        return percentage * amount;
    }
}

let sallary = createTaxer(0.1);

console.log(sallary(10000));
sallary = createTaxer(0.2);
console.log(sallary(50000));

//use of clouser 

const createCounter =() =>{
    let count =0;
    return {
        incremet(){
            return count++;
        },
        decrement(){
            return count--
        },
        get(){
            return count
        }
     
    }
}

//can use the method of counter can't manipulate wrongly 
const counter = createCounter();
counter.incremet();
console.log(counter.get());