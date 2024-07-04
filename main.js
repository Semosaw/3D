let scene, camera, renderer, model, controls;

function init() {
    // シーンの作成
    scene = new THREE.Scene();

    // カメラの作成
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.6, 3);

    // レンダラーの作成
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // 照明の追加
    const light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(0, 20, 0);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, 20, 10);
    scene.add(directionalLight);

    // コントロールの追加
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    // glTFファイルの読み込み
    const loader = new THREE.GLTFLoader();
    loader.load('model.gltf', (gltf) => {
        model = gltf.scene;
        scene.add(model);
        animate();
    }, undefined, (error) => {
        console.error(error);
    });

    // ウィンドウサイズの変更に対応
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    // モデルの回転
    if (model) {
        model.rotation.y += 0.01;
    }

    controls.update();
    renderer.render(scene, camera);
}

init();
