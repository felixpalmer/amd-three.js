define( ["three", "container"], function( THREE, container ) {
  camera = new THREE.PerspectiveCamera( 70, 1, 1, 1000 );
  camera.position.z = 400;

  var updateSize = function() {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
  }
  window.addEventListener( 'resize', updateSize, false );
  updateSize();

  return camera;
} );
