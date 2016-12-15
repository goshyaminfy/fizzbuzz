var FizzBuzz = function(){};

FizzBuzz.prototype.divisibleBy = function(number, divisor){
	return (number % divisor) === 0;
};


FizzBuzz.prototype.convertToFizzBuzz = function(number){
	if (this.divisibleBy(number, 15)){
		return "FizzBuzz";
	}else if (this.divisibleBy(number, 3)){
		return "Fizz";
	}else if (this.divisibleBy(number, 5)){
		return "Buzz";
	}
	
	return number.toString();
};

FizzBuzz.prototype.convertRangeToFizzBuzz = function(start, end){
	
	//return ["1", "2", "Fizz"];
	
	
	var result = [];
	
	for (var i = start;i<=end;i++){
		result.push(this.convertToFizzBuzz(i));
	}
	
	return result;
	
	
	
};

module.exports = FizzBuzz;