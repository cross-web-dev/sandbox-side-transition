document.addEventListener("DOMContentLoaded",function(){

	console.log("Document has been loaded");
	var container = document.querySelector(".st-container");
	document.addEventListener("click", function(){
		console.log("Body has been clicked");

		container.classList.toggle("st-menu-open");

	});
});
