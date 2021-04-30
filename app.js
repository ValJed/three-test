import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh

} from 'three'

class State {
  constructor () {
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.renderer = new WebGLRenderer()

    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.renderer.domElement)
  }

  createCubes () {
    const geometry = new BoxGeometry()
    const material = new MeshBasicMaterial({ color: 0x55efc4 })
    const offset = -1

    this.cubes = Array(3).fill(new Mesh(geometry, material))

    this.cubes.forEach((cube, i) => {
      cube.position.set(offset + i, 0, 0)

      this.scene.add(cube)
    })

    // this.cube = new Mesh(geometry, material)

    // this.cube.position.set(0, 0, 0)

    // this.scene.add(this.cube)

    this.camera.position.z = 3
  }

  animate () {
    requestAnimationFrame(state.animate)

    state.cubes.forEach((cube) => {
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
    })

    state.renderer.render(state.scene, state.camera)
  };
}

const state = new State()

state.createCubes()

state.animate()

console.log('state ===> ', state)
