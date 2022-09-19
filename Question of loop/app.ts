// Question no 2
var i: number =0;
while(i <=100){
    console.log("Number = " + i);
     i++;
};
// Question no 2
var inverse: number = 100;
while(inverse >= 1){
    console.log("Number =" + inverse);
    inverse--;
}
// Question no 4 (for odd number)
for(var a=1; a<=100; a++){
    if(a % 2 ==0){
        console.log("Even number is" ,a);
    }
};
// Question no 5 (for odd number)
for(var b =1 ; b<=100 ; b++){
    if(b %2 !==0){
        console.log("Odd number is",b);
    }
};
// sum of all natural number
var sumOfNatural:number=0;
for(let c=0; c<100; c++){
    sumOfNatural +=c;
}
console.log("Sum of Natural number = " ,sumOfNatural);
// Question no 6
var sumOfEven:number=0;
for(var i=0; i<=10 ; i++){
    if(i % 2==0){
        sumOfEven +=i;
    }
}
console.log("Sum of Even is = " , sumOfEven);
// Question no 7
var sumOfOdd:number=0;
for(let j =0; j<20; j++){
    if(j % 2 !==0){
        sumOfOdd +=j;
    }
}
console.log("Sum of odd is = " , sumOfOdd);