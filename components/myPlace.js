/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const MyPlace = () => {
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState()
    const [_camera, setCamera] = useState()
    const [target] = useState(new THREE.Vector3(0, 3, 0))
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
        )
    )
    const [scene] = useState(new THREE.Scene())
    const [_controls, setControls] = useState()

    const handleWindowResize = useCallback(() => {
        const { current: container } = refContainer
        if (container && renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
        }
    }, [renderer])

    useEffect(() => {
        const { current: container } = refContainer
        if (container && !renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            const lightColor = 0xffeab0

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputColorSpace = THREE.SRGBColorSpace
            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            const scale = 4.5
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)

            const ambientLight = new THREE.AmbientLight(lightColor, 1)
            ambientLight.position.set(0, 10, -10)
            scene.add(ambientLight)

            const dirLight = new THREE.DirectionalLight(lightColor, 5)
            dirLight.position.set(2, 6, 4)
            let mapSize = 1024
            let r = 2
            dirLight.castShadow = true
            dirLight.shadow.radius = r
            dirLight.shadow.mapSize.width = mapSize
            dirLight.shadow.mapSize.height = mapSize
            scene.add(dirLight)

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            setControls(controls)
            renderer.shadowMap.enabled = true

            var isCanvasVisible = true
            let frame = 0

            loadGLTFModel(scene, '/models/myPlaceFinal.glb', {
                reciveShadow: true,
                castShadow: true
            }).then(() => {
                renderer.setAnimationLoop(animate)
                setLoading(false)
            })

            const animate = () => {
                frame = frame <= 100 ? frame + 1 : frame
                if (frame <= 100) {
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
                    camera.position.y = 10
                    camera.position.x =
                        p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z =
                        p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                } else {
                    controls.update()
                }
                renderer.render(scene, camera)
            }

            const checkCanvasVisibility = () => {
                isCanvasVisible = isElementInViewport(container)
                console.log(isCanvasVisible)
            }

            const isElementInViewport = el => {
                const rect = el.getBoundingClientRect()
                return rect.top >= -rect.height
            }

            const handleScroll = () => {
                checkCanvasVisibility()
                if (isCanvasVisible) {
                    renderer.setAnimationLoop(animate)
                } else renderer.setAnimationLoop(null)
            }
            window.addEventListener('scroll', handleScroll)

            return () => {
                renderer.setAnimationLoop(null)
                renderer.dispose()
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
            window.removeEventListener('resize', handleWindowResize, false)
        }
    }, [renderer, handleWindowResize])

    return (
        <Box
            ref={refContainer}
            className="my-place"
            m="auto"
            mt={['-70px', '-160px', '-240px']}
            w={[280, 480, 640]}
            h={[280, 480, 640]}
            position="relative"
        >
            {loading && (
                <Spinner
                    size="xl"
                    position="absolute"
                    left="50%"
                    top="50%"
                    ml="calc(0px - var(--spinner-size) / 2)"
                    mt="calc(0px - var(--spinner-size))"
                ></Spinner>
            )}
        </Box>
    )
}

export default MyPlace
