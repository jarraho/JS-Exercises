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
var ages= [27,33,29,26,31,38]


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
// JS String Exercise 2

function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));
// JS String Exercise 3
function uppercase(sen) {
    let arr = sen.split('')
    arr[0] = arr[0].toUpperCase()
    for(let i = 0; i < sen.length; i++) {
    if (arr[i] === " ") arr[i + 1] = arr[i + 1].toUpperCase()
    }
    return arr.join('')
    }
    
    console.log(uppercase("Prince Of Persia"))
// JS String Exercise 4
    function longest(str) {
        var result;
        var arr = str.split(" ").map((word) => word);
        result = arr.reduce((a, b) => {
        return a.length > b.length ? a : b;
        });
        return result;
        }
        console.log(longest("Web Development Tutorial functionr"));
     //Exercise1

       //Exercise2
       function multiply() {
        return 4*5;
    }
var test=multiply
console.log(test)
        //Exercise3
        function multiply(x, y) {
            return x*y;
        }
var test1=multiply(34,54)
var test2=multiply(8,4)
var test3=multiply(3,6)
console.log(test1)
console.log(test2)
console.log(test3)


//Exercise 4

        function getTriangleType(a,b,c) {
            return (a === b && b === c) && 'equilateral' ||
            (a === b || a === c || b === c) && 'isosceles' ||
            'scalene';
          }
          
console.log(getTriangleType(15,15,15));
console.log(getTriangleType(10,20,10));
console.log(getTriangleType(12,13,14));
          
       // Exercise 5

        function strReplace(){
            var myStr = 'JavaScript ';
            var newStr = myStr.replace(/a/g, "1");
        }
       // Exercise 6

        function arrSum (arr1)  {arr.reduce((a,b) => a + b, 0)}
        function arrMin (arr2)    {Math.min(...arr)}
        console.log()


       // Exercise 10
 
var arr = [1,2,3,4,5,6,7,8,9,10,11,12]

var odds = arr.filter(n => n%2)

console.log(odds)