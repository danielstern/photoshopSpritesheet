if (documents.length > 0) 
{
	var docRef = activeDocument;    
	
	var activeLayer = docRef.activeLayer;

	numLayers = docRef.artLayers.length; 	

	var ROWS = Number(prompt ("Select number of rows","8","Layers to Animation")) || 10;
	
	
 	var spriteX = docRef.width;
 	var spriteY = docRef.height;	
 	//var ROWS = 10;
	
	app.preferences.rulerUnits = Units.PIXELS;
	var newCanvasWidth = spriteX * ROWS;
	var newCanvasHeight = spriteY * Math.floor(numLayers / ROWS);	

 	docRef.resizeCanvas( newCanvasWidth, newCanvasHeight, AnchorPosition.TOPLEFT );
 	 	
 	
 	for (i=0;i < numLayers ;i++) 
 	{ 
 	//	var modulus = i % ROWS;
 	   var rowNum = Math.floor(i / ROWS);

 	  var movY = spriteY* rowNum;	
		
 		docRef.artLayers[i].visible = true;
 		
  	var movX = spriteX* (i % ROWS);
  		
 		docRef.artLayers[i].translate(movX, movY);
 		
 
 	}

}else
{
msg("Sorry must have more than 1 image open in photoshop to work!");
}
 	
 	
