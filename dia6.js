const cubeOfOne = createCube(3)
function createCube(size) {
    let a = "/\\"
    let b = "\\/"
    let c = "_\\"
    let d = "_/"
    let space = "\n"
    let cube = ""
    let s = " "
    let line
    let doublesize = size*2
    let n = 0
    for (let i = 1; i < (doublesize+1); i++) {
        if (i <= size){
            if (i != size){
              line = s.repeat(size-i) + a.repeat(i) + c.repeat(size)
            } else {
              line = a.repeat(i) + c.repeat(size)
            }
            n++
        } else{
          if (n != size){
            line = s.repeat(i-size-1) + b.repeat(n) + d.repeat(size)
          } else{
            line = b.repeat(n) + d.repeat(size)
          }
          n--
        }
        if (i != doublesize){
            line += space
        }
        cube += line
    }
    return cube
  }
console.log(cubeOfOne)