if($(window).width() > 1){
    var camera, controls, scene, renderer;

    var mouseX = 0, mouseY = 0, mouseZ = 0;


    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2( 0x000000, 0.002 );

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( scene.fog.color );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    var container = document.getElementById( 'container' );
    container.appendChild( renderer.domElement );

    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 3000 );
    camera.position.z = 600;

    // controls = new THREE.OrbitControls( camera, renderer.domElement );
    // //controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.25;
    // controls.enableZoom = true;

    // world
    var geometry = new THREE.CylinderGeometry( 0, 10, 15, 3, 1 );

    var materials = [
        new THREE.MeshLambertMaterial( { color: 0x293732 } ),
        new THREE.MeshLambertMaterial( { color: 0x0A3349 } ),
        new THREE.MeshLambertMaterial( { color: 0x1B2941 } ),
    ];

    var tris = [];

    var pivot = new THREE.Object3D();

    pivot.position = scene.position;

    // instantiate a loader
    var group = new THREE.Object3D();
    var mesh, material;
    scene.add(group);
    var image = 'https://timothyjones.com.au/files/img/egg.png';
    var loader = new THREE.TextureLoader();
    loader.load( image, function ( texture ) {
        var geometry = new THREE.PlaneGeometry(50, 70);
        material = new THREE.MeshBasicMaterial( { map: texture } );
        mesh = new THREE.Mesh( geometry, material );
        for ( var i = 0; i < 500; i ++ ) {
            tris[i] = new THREE.Mesh( geometry, material );
            tris[i].position.x = ( Math.random() - 0.5 ) * 1000;
            tris[i].position.y = ( Math.random() - 0.5 ) * 1000;
            tris[i].position.z = ( Math.random() - 0.5 ) * 1000;
            tris[i].rotation.x = ( Math.random() - 0.5 ) * 1000;
            tris[i].rotation.y = ( Math.random() - 0.5 ) * 1000;

            tris[i].o_pos_x = tris[i].position.x;
            tris[i].o_pos_y = tris[i].position.y;

            pivot.add( tris[i] );

        }
    });

    //Perfect egg
    // var image = 'https://timothyjones.com.au/files/img/texture.png';
    // var loader = new THREE.TextureLoader();
    // loader.load( image, function ( texture ) {
    //     for ( var deg = 0; deg <= 180; deg += 6 ) {
    //         var rad = Math.PI * deg / 180;
    //         var point = new THREE.Vector2( (( 0.72 + .08 * Math.cos( rad ) ) * Math.sin( rad ), - Math.cos( rad )) * 20); // the "egg equation"
    //         points.push( point );
    //     }
    //     var geometry = new THREE.LatheBufferGeometry( points, 32 );
    //     material = new THREE.MeshBasicMaterial( { map: texture } );

    //     for ( var i = 0; i < 500; i ++ ) {
    //         tris[i] = new THREE.Mesh( geometry, material );
    //         tris[i].position.x = ( Math.random() - 0.5 ) * 1000;
    //         tris[i].position.y = ( Math.random() - 0.5 ) * 1000;
    //         tris[i].position.z = ( Math.random() - 0.5 ) * 1000;
    //         tris[i].rotation.x = ( Math.random() - 0.5 ) * 1000;
    //         tris[i].rotation.y = ( Math.random() - 0.5 ) * 1000;

    //         tris[i].o_pos_x = tris[i].position.x;
    //         tris[i].o_pos_y = tris[i].position.y;

    //         pivot.add( tris[i] );
    //     }
    // });

    // instantiate a loader
    var group = new THREE.Object3D();
    scene.add(group);
    var image = 'https://timothyjones.com.au/files/img/tim.jpg';
    var loader = new THREE.TextureLoader();
    loader.load( image, function ( texture ) {
        var geometry = new THREE.PlaneGeometry(300, 300);
        var material = new THREE.MeshBasicMaterial( { map: texture } );
        var mesh = new THREE.Mesh( geometry, material );
        group.add( mesh );
    });
    

    scene.add(pivot);


    // Main

    var size = 200;
    var point;

    var outerGeo = new THREE.CylinderGeometry( size, size, 20, 3, 20 );
    var innerGeo = new THREE.CylinderGeometry( size - 5, size - 5, 20, 3, 20 );

    var outerBSP = new ThreeBSP(outerGeo);
    var innerBSP = new ThreeBSP(innerGeo);

    var intersections = outerBSP.subtract(innerBSP);  

    var mainMat = new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: THREE.FaceColors } );
    var faceIndices = [ 'a', 'b', 'c' ];

    var mainGeo = intersections.toGeometry();

    for ( var i = 0; i < mainGeo.faces.length; i++ ) {
        var face = mainGeo.faces[ i ];
        var numberOfSides = 3;
        // assign color to each vertex of current face
        for( var j = 0; j < numberOfSides; j++ ) {

            vertexIndex = face[ faceIndices[ j ] ];

            // store coordinates of vertex
            point = mainGeo.vertices[ vertexIndex ];

            // initialize color variable
            color = new THREE.Color( 0xffffff );
            color.setRGB( 0.5 + point.x / size, 0.5 + point.y / size, 0.5 + point.z / size );
            face.vertexColors[ j ] = color;

        }
    }

    // var mainTri = new THREE.Mesh( mainGeo, mainMat );
    // mainTri.rotateX((Math.PI * 3) / 2);
    // mainTri.position.set( 0, 0, 0 );
    // scene.add(mainTri);





    // var subTri = new THREE.Mesh( mainGeo, mainMat );
    // subTri.rotateX(Math.PI  / 2).scale.set(0.49, 0.49, 0.49);
    // subTri.rotateZ((Math.PI * 6) / 2);
    // subTri.position.set( 0, 0, 0 );
    // scene.add(subTri);




    // lights
    var ambientLight = new THREE.AmbientLight( 0xffffff );
    scene.add( ambientLight );

    var lights = [];
    lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

    lights[ 0 ].position.set( 0, 200, 0 );
    lights[ 1 ].position.set( 100, 200, 100 );
    lights[ 2 ].position.set( - 100, - 200, - 100 );

    scene.add( lights[ 0 ] );
    scene.add( lights[ 1 ] );
    scene.add( lights[ 2 ] );

    //


    //

    window.addEventListener( 'resize', onWindowResize, false );


    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseMove( event ) {
        mouseX = event.clientX - window.innerWidth / 2;
        mouseY = event.clientY - window.innerHeight / 2;
    }


    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    var tween;

    var cameraAngle = 0;
    var orbitRange = 800;
    var orbitSpeed = 0.02;
    var desiredAngle = (Math.PI * 6) / 2;

    var inc = 0.06;
    var rev_inc = false;

    camera.position.set(orbitRange, 100, 500);
    // camera.lookAt(mainTri.position);


    animate();


    function animate() {
        var time = Date.now() * 0.00005;

        if (inc >= 1) {
            rev_inc = true;
        }

        if (rev_inc) {
            inc -= 0.005;
        } else {
            inc += 0.005;
        }

        if (inc <= 0.06) {
            rev_inc = false;
        }

        requestAnimationFrame( animate );

        // controls.update(); // required if controls.enableDamping = true, or if controls.autoRotate = true

        TWEEN.update();

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        // camera.position.z += (-mouseZ - camera.position.z) * 0.05;
        // $('.cameraZ').text(camera.position.z);
        // console.log('Z pos: ' + camera.position.z)
        camera.lookAt(scene.position);

        // for ( var i = 0; i < mainTri.geometry.faces.length; i++ ) {
            
        //     var face = mainTri.geometry.faces[ i ];
        //     var numberOfSides = 3;

        //     // assign color to each vertex of current face
        //     for( var j = 0; j < numberOfSides; j++ ) {

        //         vertexIndex = face[ faceIndices[ j ] ];

        //         // store coordinates of vertex
        //         point = mainTri.geometry.vertices[ vertexIndex ];
        //         face.vertexColors[ j ].setHSL( inc + point.x / size, 0.6, 0.5 );


        //     }
        // }

        // mainTri.geometry.colorsNeedUpdate = true;


        pivot.rotation.y += 0.001;
        pivot.rotation.x += 0.001;

        render();

    }
    function render() {
        renderer.render( scene, camera );
        $('.main').click(function(e){ 
            e.preventDefault();
        });
    }

    if($(window).width() < 991){
        //Check if device is iOS 12 or above
        if(typeof DeviceMotionEvent.requestPermission === 'function'){
            document.querySelector('.main').addEventListener('click', requestPermissionForiOSGyro, false);
        }
        //Or Android
        else {
            document.querySelector('.main').addEventListener('click', activateAndroidGyro, false);
        }
    }

    function requestPermissionForiOSGyro(){
        var tiltX, tiltY, tiltZ;
        if (typeof DeviceMotionEvent.requestPermission === 'function') {
            DeviceMotionEvent.requestPermission()
            .then(response => {
              if (response == 'granted') {
                window.addEventListener('devicemotion', function (eventData) {
                    tiltX = Math.round(eventData.gamma * 2);
                    tiltY =  Math.round(eventData.beta * 2);
                    tiltZ =  Math.round(eventData.alpha * 2);
                    $('.tiltX').text(tiltX);
                    $('.tiltY').text(tiltY);
                    $('.tiltZ').text(tiltZ);
                    deviceOrientationHandler(tiltX,tiltY,tiltZ);
                }, false);
              }
            })
            .catch(console.error)
        }
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
            .then(response => {
              if (response == 'granted') {
                window.addEventListener('deviceorientation', function (eventData) {
                    tiltX = Math.round(eventData.gamma * 2);
                    tiltY =  Math.round(eventData.beta * 2);
                    tiltZ =  Math.round(eventData.alpha * 2);
                    $('.tiltX').text(tiltX);
                    $('.tiltY').text(tiltY);
                    $('.tiltZ').text(tiltZ);
                    deviceOrientationHandler(tiltX,tiltY,tiltZ);
                }, false);
              }
            })
            .catch(console.error)
        }
    }
    function activateAndroidGyro(){
        var degtorad = Math.PI / 180;
        var a = { x: null, y: null, z: null, alpha: null, beta: null, gamma: null },
        b = { x: 0, y: 0, z: 0, alpha: 0, beta: 0, gamma: 0 },
        c = null;
        window.gyro = {},
        gyro.frequency = 10,
        gyro.calibrate = function () {
          for (var c in a) b[c] = typeof a[c] == "number" ? a[c] : 0;
        };
        window.addEventListener("devicemotion",
            function (c) {
                (a.x = c.accelerationIncludingGravity.x - b.x),
                (a.y = c.accelerationIncludingGravity.y - b.y),
                (a.z = c.accelerationIncludingGravity.z - b.z);
                //Increase gyroscope speed because Android is slow
                tiltX = Math.round(a.x * 8);
                tiltY = Math.round(a.y * 8);
                tiltZ = Math.round(a.z * 8);
                $('.tiltX').text(tiltX);
                $('.tiltY').text(tiltY);
                $('.tiltZ').text(tiltZ);
                deviceOrientationHandler(tiltX,tiltY,tiltZ);
            }, true);
    }
    function deviceOrientationHandler(tiltX, tiltY, tiltZ){
        //Speed up gyroscope camera speed
        mouseX = tiltX * 4;
        mouseY = tiltY * 4;
        // mouseZ = (tiltZ / 2) / 100;
        $('.tilt_stats').click(function(){ 
            $(this).fadeOut(300);
        });
    }
    function getRandom(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
}