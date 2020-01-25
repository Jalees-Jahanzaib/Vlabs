$(function() {
  let element = $('#cont1');
  let config = { backgroundColor: 'orange' };
  let viewer = $3Dmol.createViewer( element, config );
  console.log(viewer);
  viewer.addSphere({ center: {x:6, y:6, z:6}, radius: 2.0, color: 'white' });
  viewer.addArrow({ start: {x:0 , y:0, z:0}, end: {x:7.5,y:7.5,z:7.5},radius:.5,color:'black'});
  viewer.addArrow({ start: {x:0 , y:0, z:0}, end: {x:-7.5,y:-7.5,z:7.5},radius:.5,color:'black'});
  viewer.addArrow({ start: {x:0 , y:0, z:0}, end: {x:7.5,y:-7.5,z:-7.5},radius:.5,color:'black'});
  viewer.addArrow({ start: {x:0 , y:0, z:0}, end: {x:-7.5,y:7.5,z:-7.5},radius:.5,color:'black'});
  viewer.addSphere({ center: {x:0, y:0, z:0}, radius: 2.0, color: 'skyblue' });
  viewer.addSphere({ center: {x:6, y:-6, z:-6}, radius: 2.0, color: 'white' });
  viewer.addSphere({ center: {x:-6, y:6, z:-6}, radius: 2.0, color: 'white' });
  viewer.addSphere({ center: {x:-6, y:-6, z:6}, radius: 2.0, color: 'white' });
  viewer.zoomTo();
  viewer.render();
  // viewer.zoom(.5, 1000);
  viewer.setBackgroundColor('white');
});