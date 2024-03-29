var FizzBuzz = require('../fizzbuzz.js');

describe ("FizzBuzz", function(){
	var f = new FizzBuzz();
	
	describe("divisibleBy", function(){
		
		it("when divisible", function(){
			expect(f.divisibleBy(3,3)).to.be.eql(true);
		});
		
		it("when not divisible", function(){
			expect(f.divisibleBy(3, 2)).to.be.eql(false);
		})
	});
	
	describe("convertToFizzBuzz", function(){
		it ("when divisible by 3", function(){
			expect(f.convertToFizzBuzz(3)).to.be.eql("Fizz");
			expect(f.convertToFizzBuzz(6)).to.be.eql("Fizz");
		});
		
		it ("when divisible by 5", function(){
			expect(f.convertToFizzBuzz(5)).to.be.eql("Buzz");
			expect(f.convertToFizzBuzz(10)).to.be.eql("Buzz");
		});
		
		it ("when divisible by 15", function(){
			expect(f.convertToFizzBuzz(15)).to.be.eql("FizzBuzz");
			expect(f.convertToFizzBuzz(30)).to.be.eql("FizzBuzz");
		});
		
		it("when not divisible by 3 or 5 or 25", function(){
			expect(f.convertToFizzBuzz(4)).to.be.equal("4");
			expect(f.convertToFizzBuzz(2)).to.be.equal("2");
		});
	});
	
	describe("convertRangeToFizzBuzz", function(){
		
		it("returns in correct order", function(){
			expect(f.convertRangeToFizzBuzz(1, 3)).to.be.eql(["1", "2", "Fizz"]);
		});
		
		it("applies FizzBuzz to every number in the range", function(){
			
			var spy = sinon.spy(f, "convertToFizzBuzz");
			
			f.convertRangeToFizzBuzz(1, 30);
			
			for (var i=1;i<=30;i++){
				expect(spy.withArgs(i).calledOnce).to.be.eql(true, "Expected FizzBuzz To be Called with " + i);
			}
			
			//f.convertRangeToFizzBuzz.restore();
			
		});
		
	});
	
});