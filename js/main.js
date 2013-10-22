// Configure Require.js
require.config( {
  // Default load path for js files
  baseUrl: 'js/app',
  shim: {
    // --- Use shim to mix together all THREE.js subcomponents
    'threeCore': { exports: 'THREE' },
    'TrackballControls': { deps: ['threeCore'], exports: 'THREE' },
    // --- end THREE sub-components
    'detector': { exports: 'Detector' },
    'stats': { exports: 'Stats' },
  }, 
  // Third party code lives in js/lib
  paths: {
    // --- start THREE sub-components
    three: '../lib/three',
    threeCore: '../lib/three.min',
    TrackballControls: '../lib/controls/TrackballControls',
    // --- end THREE sub-components
    detector: '../lib/Detector',
    stats: '../lib/stats.min',
  },
} );

// Start the app
require( ['detector', 'app', 'container'], function ( Detector, app, container ) {
  if ( ! Detector.webgl ) {
    Detector.addGetWebGLMessage();
    container.innerHTML = "";
  }

  // Initialize our app and start the animation loop (animate is expected to call itself)
  app.init();
  app.animate();
});
