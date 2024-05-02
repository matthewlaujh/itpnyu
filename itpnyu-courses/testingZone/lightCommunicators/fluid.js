let N = 256
let iter = 16
let SCALE = 4
let t = 0

// function to use 1D array and fake the extra two dimensions --> 3D
function IX(x, y) {
  return x + y * N
}

// Fluid cube class
class Fluid {
  constructor(dt, diffusion, viscosity) {
    this.size = N
    this.dt = dt
    this.diff = diffusion
    this.visc = viscosity

    this.s = new Array(N * N).fill(0)
    this.density = new Array(N * N).fill(0)

    this.Vx = new Array(N * N).fill(0)
    this.Vy = new Array(N * N).fill(0)

    this.Vx0 = new Array(N * N).fill(0)
    this.Vy0 = new Array(N * N).fill(0)

    this.hue = new Array(N * N).fill(0)
    this.hue0 = new Array(N * N).fill(0)
  }

  // step method
  step() {
    let N = this.size
    let visc = this.visc
    let diff = this.diff
    let dt = this.dt
    let Vx = this.Vx
    let Vy = this.Vy
    let Vx0 = this.Vx0
    let Vy0 = this.Vy0
    let s = this.s
    let density = this.density
    let hue = this.hue
    let hue0 = this.hue0

    this.setHue()
    this.normalizeHue()

    diffuse(1, Vx0, Vx, visc, dt)
    diffuse(2, Vy0, Vy, visc, dt)

    project(Vx0, Vy0, Vx, Vy)

    advect(1, Vx, Vx0, Vx, Vx0, Vx0, Vy0, dt)
    advect(2, Vy, Vy0, Vx, Vx0, Vx0, Vy0, dt)

    project(Vx, Vy, Vx0, Vy0)
    diffuse(0, s, density, diff, dt)
    advect(0, density, s, hue, hue0, Vx, Vy, dt)
  }

  addDensity(x, y, amount, addHue) {
    let index = IX(x, y)
    this.density[index] += amount
    this.density[index] = constrain(this.density[index], 0, 255)
    this.hue[index] += addHue
    this.hue[index] = constrain(this.hue[index], 0, 255)
  }

  addVelocity(x, y, amountX, amountY) {
    let index = IX(x, y)
    this.Vx[index] += amountX
    this.Vy[index] += amountY
  }

  normalizeHueArray() {
    for (let i = 0; i < this.hue.length; i++) {
      this.hue[i] = this.normalizeHue(this.hue[i])
    }
  }

  normalizeHue(hueValue) {
    let normalizedHue = (hueValue % 65536) * (360 / 65535)
    return normalizedHue < 0 ? 0 : normalizedHue > 360 ? 360 : normalizedHue
  }

  setHue(x, y, hueValue) {
    let index = IX(x, y)
    this.hue[index] = this.normalizeHue(hueValue)
    // FOR DAN - hue being updated correctly here
    // console.log(`Set Hue at (${x}, ${y}): ${this.hue[index]}`)
  }

  renderD() {
    colorMode(HSB, 360)
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        let x = i * SCALE
        let y = j * SCALE
        let d = this.density[IX(i, j)]
        let h = this.hue[IX(i, j)]
        // FOR DAN - hue NOT being updated correctly here
        // console.log(`Hue at (${i}, ${j}): ${h}`)
        fill(h % 360, 255, d % 255)
        // FOR DAN - hue NOT being updated correctly here
        // console.log(`Hue at (${i}, ${j}): ${h}`)
        noStroke()
        square(x, y, SCALE)
      }
    }
  }
  // function to render velocity
  renderV() {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        let x = i * SCALE
        let y = j * SCALE
        let vx = this.Vx[IX(i, j)]
        let vy = this.Vy[IX(i, j)]
        stroke(0)
        // stroke(255)

        if (!(abs(vx) < 0.1 && abs(vy) <= 0.1)) {
          line(x, y, x + vx * SCALE, y + vy * SCALE)
        }
      }
    }
  }
  fadeD() {
    for (let i = 0; i < this.density.length; i++) {
      //   let d = density[i]
      this.density = constrain(this.density - 0.02, 0, 255)
    }
  }
}
