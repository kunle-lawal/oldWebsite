//Find direction mouse is moving//

	var oldX = 0;
	var oldY = 0;
	
	if(mousePos.x < oldX){
		offset.directionX += mousePos.x/500;
		//console.log("Left");
	} 
	if(mousePos.x > oldX){
		offset.directionX -= mousePos.x/500;
		//console.log("Right");
	}
	if(mousePos.y < oldY){
		offset.directionY += mousePos.y/500;
		//console.log("Up");
	}
	if(mousePos.y > oldY){
		offset.directionY -= mousePos.y/500;
		//console.log("Down");
	}

	oldX = mousePos.x;
	oldY = mousePos.y;

$(window).on('mousemove', mouseMoveHandler);
var document_width = $(document).width();
function mouseMoveHandler(e){
	
	//if(e.pageX > document_width - 100 ){
		//if(document_width-e.pageX <= 100){
			if(($("#intro_container").width() <= (document_width/2) - 10) || ($("#intro_container").width() >= (document_width/2) + 10)){
				$("#info_container").css("width", (document_width-e.pageX) + "px");
				$("#intro_container").css("width", (document_width-e.pageX) + "px");
			}
		//}
		
		//console.log((e.pageX))
		//console.log(document_width + " - " + e.pageX + ": " + (document_width-e.pageX));
	//}
}