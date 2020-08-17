$(document).ready(function(){

$('.bmi').hide()


$('.calcule').click(function(){
	 var $weight = $('.weight').val()
	 var $height = $('.height').val()
	 var $bmi = $weight/(($height/100)*($height/100))
 
	 $('.info').hide()
	 $('.bmi').show()
	  $("#bmi").val(parseInt($bmi));
})



})