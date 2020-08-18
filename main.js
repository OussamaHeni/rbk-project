$(document).ready(function(){


	var form = $("form");
	
	form.on("submit", function(){
		
		var resultDiv = $(".result .title");
		
		function calcBMI(){
			var weight = $("#weight").val();
	    var height = $("#height").val();
			var bmi = weight / (height * height);
			return bmi.toFixed(2);
			
		}

		function bmiState(){
			if(calcBMI() < 16.9 ){
				return "Very underweight you are in the danger zone";
			}
			if(calcBMI() > 17 && calcBMI() < 18.4 ){
				return "Under weight you need to eat more";
			}
			if(calcBMI() > 18.5 && calcBMI() < 24.9 ){
				return "Normal weight congratulations";
			}
			if(calcBMI() > 25 && calcBMI() < 29.9 ){
				return "Overweight you need to lose some weight";
			}
			if(calcBMI() > 30 && calcBMI() < 34.9 ){
				return "Overweight class 1 you need to lose weight";
			}
			if(calcBMI() > 35 && calcBMI() < 40 ){
				return "Overweight class 2 you suffer from obesity";
			}
			if(calcBMI() > 40){
				return "Overweight class 3 you are in the danger zone";
			}
		}
		
		resultDiv.html("Your BMI is  " + calcBMI() + " :  " + bmiState());
	});

})

