define( ["three"], function( THREE ) { 
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  var container = document.getElementById( 'threejs-container' );
  container.innerHTML = ""
  container.appendChild( renderer.domElement );
  return renderer;
} );
