define( ["three", "camera"], function( THREE, camera ) { 
  controls = new THREE.TrackballControls( camera );
  return controls;
} );
