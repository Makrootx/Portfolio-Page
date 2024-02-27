import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { color } from 'framer-motion'

export function loadGLTFModel(
    scene,
    glbPath,
    options = { reciveShadow: true, castShadow: true }
) {
    const { reciveShadow, castShadow } = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'myPlace'
                obj.position.x = 0
                obj.position.y = 0
                obj.receiveShadow = reciveShadow
                obj.castShadow = castShadow
                scene.add(obj)

                obj.traverse(function (child) {
                    if (child.isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = reciveShadow
                    }
                    if (child.material) {
                        child.material.metalness = 0
                    }
                })
                const s = new THREE.Box3()
                    .setFromObject(gltf.scene)
                    .getSize(new THREE.Vector3())
                const sizes = [s.x, s.y, s.z]
                const planeSize = Math.max(...sizes) * 10
                const shadowPlane = new THREE.Mesh(
                    new THREE.BoxGeometry(planeSize, 0, planeSize),
                    new THREE.ShadowMaterial()
                )
                shadowPlane.position.y = 0
                shadowPlane.material.side = THREE.DoubleSide
                shadowPlane.material.blending = THREE.NoBlending
                shadowPlane.receiveShadow = true
                scene.add(shadowMap)

                resolve(obj)
            },
            undefined,
            function (error) {
                reject(error)
            }
        )
    })
}
