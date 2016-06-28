var app = angular.module('myApp', []);
app.controller('home3Ctrl', function($scope) {
	$scope.equation = "";
	$scope.numDisable = false;
	$scope.signDisable = true;
	$scope.minusDisable = true;
	$scope.equalDisable = true;
	$scope.dotDisable = true;
	$scope.result = 0;
	$scope.output = 0;
	$scope.lastSign = "";
	$scope.lastNum = "";
	
	
	$scope.inputNum = function(num){//First input as string, then transfer to number
		$scope.output = $scope.equation + num;
		$scope.equation = $scope.equation + num;
		$scope.lastNum = Number($scope.lastNum + num);
		$scope.signDisable = false;
		$scope.minusDisable = false;
		$scope.equalDisable = false;
		$scope.dotDisable = false;		
	}

	$scope.inputDot = function(){
		$scope.output = $scope.equation + '.';
		$scope.equation = $scope.equation + '.';
		$scope.lastNum = $scope.lastNum + '.';
		$scope.signDisable = true;
		$scope.minusDisable = true;
		$scope.equalDisable = true;
		$scope.dotDisable = true;
	}

	$scope.inputMinus = function(){
		$scope.output = '-' + $scope.equation;
		$scope.equation = '-' + $scope.equation;
		$scope.lastNum = -1 * Number($scope.lastNum);
		$scope.signDisable = false;
		$scope.minusDisable = true;
		$scope.equalDisable = false;
		$scope.dotDisable = false;
	}

	$scope.inputSign = function(sign){
		$scope.result = calculate($scope.lastSign,$scope.result,$scope.lastNum );//Can do calculation several times
		$scope.output = $scope.equation + sign;
		$scope.equation = $scope.equation + sign;
		$scope.lastNum = "";
		$scope.signDisable = true;
		$scope.minusDisable = true;
		$scope.equalDisable = true;
		$scope.dotDisable = true;
		$scope.lastSign = sign;
	}
	
	$scope.clearCal = function(){
		$scope.equation = "";
		$scope.signDisable = true;
		$scope.minusDisable = true;
		$scope.equalDisable = true;
		$scope.dotDisable = true;
		$scope.result = 0;
		$scope.output = 0;
		$scope.lastSign = "";
		$scope.lastNum = "";
	}
	
	$scope.getResult = function(){
		$scope.result = calculate($scope.lastSign,$scope.result,$scope.lastNum );
		$scope.output = $scope.result;
		$scope.equation = "";
		$scope.signDisable = true;
		$scope.minusDisable = true;
		$scope.equalDisable = true;
		$scope.dotDisable = true;
		$scope.lastSign = "";
		$scope.lastNum = "";
	}

	var calculate = function(sign, result, num){
		result = Number(result);
		num = Number(num);
		switch(sign){
			case "":
				return num;	
			case "+":
				result = result + num;
				return result;
			case "-":
		        result = result - num;
				return result;
			case "*":
				result = result * num;
				return result;
			case "/":
		        result = result / num;
				return result;
			default:return result;//If no input signs, then the number just equals to itself
		}
	}
});

