define( ["three", "shader!simple.vert", "shader!simple.frag", "texture"], function ( THREE, simpleVert, simpleFrag, texture ) {
  return {
    bump: new THREE.MeshPhongMaterial( { bumpMap: texture.grass } ),
    grass: new THREE.MeshBasicMaterial( { map: texture.grass } ),
    shader: new THREE.ShaderMaterial( {
      uniforms: {
        uColor: { type: "c", value: new THREE.Color( "#ff0000" ) }
      },
      vertexShader: simpleVert.value,
      fragmentShader: simpleFrag.value
    }),
    solid: new THREE.MeshLambertMaterial( {
      color: 0x00dcdc,
      shading: THREE.FlatShading
    }),
    wire: new THREE.MeshBasicMaterial( { wireframe: true } )
  };
} );
