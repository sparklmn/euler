// My Project Euler

(function() {

/** 1 Multiples of 3 and 5
* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
* Find the sum of all the multiples of 3 or 5 below 1000.
*/
var e1 = function(){
  var sum = 0;
  for(var i = 0; i < 1000; i++){
    if ((i%5 === 0) || (i%3 === 0)) {
      sum += i; 
    }
  }
  return sum;//233168
}

/** 2 Even Fibonacci numbers
* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
* 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
* By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
var e2 = function(){
  var prev = 1, curr = 2, next, sum = 2;
  do{
    next = prev + curr;
    if(next%2 === 0){
        sum += next;
    }
    prev = curr;
    curr = next;
  }while(next < 4000000); 
  return sum;//4613732
}

/** 3 Largest prime factor
* The prime factors of 13195 are 5, 7, 13 and 29.
* What is the largest prime factor of the number 600851475143 ?
*/
var e3 = function () {
	var n = 600851475143, i = 2;
	while (i < n){
		if (n % i === 0){
			n /= i;
		}else{
			i++;
		}
	}
	return n;//6857 (600851475143 = 71 x 839 x 1471 x 6857)
}

/** 4 Largest palindrome product
* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91  99.
* Find the largest palindrome made from the product of two 3-digit numbers.
*/
var e4 = function () {
	var isPalindrome = function(num){
		var str = num.toString(), reverseStr = str.split("").reverse().join("");
		return (str === reverseStr) ? true : false; 
	};
    var curr = 0, result = 0;
    //brute force approach... will came up with better solution later
	for(var i = 999; i >= 100; i-=1){
		for(var j = 999; j >= 100; j-=1){
			curr = i*j;	
		  	if(isPalindrome(curr) && (curr > result)){
	          result = curr;//906609 (906609 = 993 * 913)
		  };
		}
	}
	return result;
}

/** 5 Smallest multiple
* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
* What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
* 
* This one better solved without program, by multiplying common factors:
* 20 = 2^2 * 5
* 19 = 19
* 18 = 2 * 3^2
* 17 = 17
* 16 = 2^4
* 15 = 3 * 5
* 14 = 2 * 7
* 13 = 13
* 11 = 11
* 
* 2^4 * 3^2 * 5 * 7 * 11 * 13 * 17 * 19 = 232792560
*
* but here is some crappy program anyways
*/
var e5 = function () {
	var r = 20, isFound = false;
	while(!isFound){
		r+=1;
		if((r % 20 === 0) && 
			(r % 19 === 0) && 
			(r % 18 === 0) && 
			(r % 17 === 0) && 
			(r % 16 === 0) && 
			(r % 15 === 0) && 
			(r % 14 === 0) && 
			(r % 13 === 0) && 
			(r % 12 === 0) && 
			(r % 11 === 0)){
			isFound = true;
		}
	}
	return r;//232792560
}

/** 6 Sum square difference
* Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
var e6 = function () {
	var sum1 = 0, sum2 = 0;
	for (var i = 1; i < 101; i+=1) {
		sum1 += i*i;
		sum2 += i;
	}
	return sum2*sum2 - sum1;//25164150
}

/** 7 10001st prime
* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
* What is the 10 001st prime number?
*/
var e7 = function () {

}

})


