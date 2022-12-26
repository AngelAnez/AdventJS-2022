const heights = [0, 1, 2, 2]
checkJump(heights)
function checkJump(heights) {
    let up
    let top
    let downroad
    let down
    let all_right
    if (heights[0] > heights[1]){
      all_right = false
    } else{
      up = heights.some((element, index) => {
        console.log(element)
        top = index
        return element > heights[index+1]
      })
      console.log(top)
      downroad = heights.slice(top,heights.length)
      console.log(downroad)
      down = downroad.some((element,index) => {
        console.log(element)
        return element < downroad[index+1]
      })
      console.log(up)
      console.log(down)
      if (up === true && down === false){
        all_right = true
      } else{
        all_right = false
      }
    }
  return all_right
}

/* Segunda Solución con dos every (tampoco funciona) */

/* function checkJump(heights) {
  let up
  let top
  let uproad
  let downroad
  let down
  let all_right
  let index_top
  if (heights[0] > heights[1] || heights.length == 0){
    all_right = false
  } else{
    top = Math.max(...heights)
    index_top = heights.indexOf(top)
    
    uproad = heights.slice(0,index_top)
    up = uproad.every((element,index) => {
      if (index === uproad.length-1){
        return element < top
      } else{
        return element <= uproad[index+1]
      }
    })

    downroad = heights.slice(index_top)
    down = downroad.every((element,index) => {
      if (index == downroad.length-1){
        return downroad[index-1] > element
      } else{
        return element >= downroad[index+1]
      }
    })
    if (up === true && down === true){
      all_right = true
    } else{
      all_right = false
    }
  }
  return all_right
} */