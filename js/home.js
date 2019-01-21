$(function(){

	$("#towerDoor").on("click", function(){
		localStorage.setItem("Floor", 0)
		window.location.replace("floorZero.html");
	});

});