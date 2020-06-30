/******************
 * YOUR CODE HERE *
 ******************/

const indexedChars = function(str){
 let result = ''
  for(let i=0; i <str.length;i++)

result += i + str[i]

  return result
}

const exclaim = function(str){

  let result = ''

  for(let i=0; i <str.length;i++)
if(str[i] === '?' || str[i] === '.')
result += '!'

else result += str[i]

  return result
}

const repeatIt = function(str, num){
let result = ''
  let count = 0
while (count < num){
  count ++
  for (let i=0;i <str.length;i++){

result += str[i]

}
}
return result
}

const truncate= function(str){
if (str.length > 18){
let result =''
for(let i=0; i < 15; i++){

  result += str[i]
}
result = result + '...'
return result
}
else return str
}

const ciEmailify= function(n1){

  let result1=''
  

  for(let i=0;i<n1.length;i++){
if (n1[i]=== 'A'||n1[i]=== 'B'||n1[i]=== 'C'||n1[i]=== 'D'||n1[i]=== 'E'||n1[i]=== 'F'||n1[i]=== 'G'||n1[i]=== 'H'||n1[i]=== 'I'||n1[i]=== 'J'||n1[i]=== 'K'||n1[i]=== 'L'||n1[i]=== 'M'||n1[i]=== 'N'||n1[i]=== 'O'||n1[i]=== 'P'||n1[i]=== 'Q'||n1[i]=== 'R'||n1[i]=== 'S'||n1[i]=== 'T'||n1[i]=== 'U'||n1[i]=== 'V'||n1[i]=== 'W'||n1[i]=== 'X'||n1[i]=== 'Y'|| n1[i]=== 'Z'){

result1 += n1[i].toLowerCase()
}
else if(n1[i]=== ' '){
  result1 += '.'
}
else result1 += n1[i]
  }
  return result1 + '@codeimmersives.com'
}

const reverse = function(str){

  result = ''

  for(let i=str.length-1;i >= 0;i--){
  result += str[i]}

  return result
}

const onlyVowels = function(str){

  let result = ''

  for(let i=0;i < str.length;i++){

    if(str[i]=== 'A'||str[i]=== 'E'||str[i]=== 'I'||str[i]=== 'O'||str[i]=== 'U'||str[i]=== 'a'||str[i]=== 'e'||str[i]=== 'i'||str[i]=== 'o'||str[i]=== 'u'){

      result += str[i]
    }
  }

  return result 
}

const numberedChars= function(str){
  let result = ''
  
for(let i=0; i <str.length;i++)
result += `(${i+1})` + str[i]

return result
}

const crazyCase= function(str){

  let result = ''
  for(let i=0; i <str.length;i++){
if( i % 2 === 0){

result += str[i].toLowerCase()
}

else result += str[i].toUpperCase()
  }
return result 
}

const titleCase = function(str){
let result = ''

for(let i = 0;i < str.length;i++){

  if(i === 0){
    result += str[i].toUpperCase()
  }
 else if(str[i-1]=== ' '){
    result += str[i].toUpperCase()
  }
  else result += str[i].toLowerCase()
}
return result
}

const camelCase= function (str){

  let result = ''

  for(let i = 0;i < str.length;i++){
    if(i === 0){
      result += str[i].toLowerCase()
      }
else if(str[i]===' '){

}

else if(str[i-1]=== ' '){

  result += str[i].toUpperCase()
}
 else result += str[i]
}
return result
}

const crazyCase2ReturnOfCrazyCase= function(str){

  let result = ''
  let count = 0
str= str.toLowerCase()
  for(let i = 0;i < str.length;i++){
    
    if (str[i]=== ' '){
result += str[i]
    }

    else if(str[i]!== ' ' && count % 2 !==0){

    result+= str[i].toUpperCase()
count++
    }
    else {
      result += str[i]
      count++
    }

}
return result;
}

console.log(crazyCase2ReturnOfCrazyCase('my name is Slim Shady'))


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
