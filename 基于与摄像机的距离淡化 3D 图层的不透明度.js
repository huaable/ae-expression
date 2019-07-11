//将以下表达式应用于 3D 图层的不透明度属性：
startFade = 500; // Start fade 500 pixels from camera. 
endFade = 1500;  // End fade 1500 pixels from camera. 
try
{ // Check whether there's a camera
  C = thisComp.activeCamera.toWorld([0,0,0]); 
}
catch(err)
{ // No camera, so assume 50mm
  w = thisComp.width * thisComp.pixelAspect; 
  z = (w/2)/Math.tan(degreesToRadians(19.799)); 
  C = [0,0,-z]; 
} 
P = toWorld(anchorPoint); 
d = length(C,P); 
linear(d,startFade,endFade,100,0)