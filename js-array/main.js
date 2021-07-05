var className=["Fabian","Mazen","Nadine","Sozan","Lucas"]
console.log(className[0])
console.log(className[className.length-1])
for (var i=0;i<className.length;i++){
    console.log(className[i])
}
 for (i in className){
   console.log(className[i])
 }

// Exercise2 
var ages=[27,33,29,26,31,38]
var i=0

while (i<ages.length){
    i++

    if (ages[i] % 2===0){

        console.log(ages[i]);

    }
}

    for (var i = 0; i < ages.length; i++) {
        if (ages[i] % 2 === 0) {
            console.log(ages[i]);
        }
    }
    
    // Exercise3
    function biggestNumber(a,b,c){
        console.log(Math.max(...[43,77,87] ) )
            }
    // Exercise4
    function lowesttNumber(a,b,c){
        console.log(Math.min(...[43,77,87] ) )
            }
    // Exercise5

    var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1;

function print_array_element(arr, i) {
  console.log(arr[i]);
}

print_array_element(array, index);

    // Exercise 6 in console error arr not defined with var dosent work
    let findDupl=(arr) =>{
        let dups=[]
        let compare=[]
        for (let num of arr){
            if(!compare.includes(num)){
                compare.push(num)
            }else{
                dups.push(num)
            }
        }
        return dups
      }
      var arr = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]
      console.log(findDupl(arr))
// Exercise 7
var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(','));
// JS String Exercise 1
const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

