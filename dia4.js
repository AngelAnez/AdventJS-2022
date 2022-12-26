const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
]
  
fitsInOneBox(boxes)
function fitsInOneBox(boxes) {
    let space
    let different = false
    let a = boxes.map(box => box.l)
    let b = boxes.map(box => box.w)
    let c = boxes.map(box => box.h)
    if (boxes.length == 3){
      different = true
        if (a[0] < a[1] && b[0] < b[1] && c[0] < c[1] ||
            a[0] > a[1] && b[0] > b[1] && c[0] > c[1]){
            if (a[0] < a[2] && b[0] < b[2] && c[0] < c[2] ||
                a[0] > a[2] && b[0] > b[2] && c[0] > c[2]){
                if (a[1] < a[2] && b[1] < b[2] && c[1] < c[2] ||
                    a[1] > a[2] && b[1] > b[2] && c[1] > c[2]){
                    different = false
                }
            }
        }
    }
    let x = a.sort((f,s) => f - s)
    let y = b.sort((f,s) => f - s)
    let z = c.sort((f,s) => f - s)
    let long = x.every((f,s) => f != s)
    let width = y.every((f,s) => f != s)
    let height = z.every((f,s) => f != s)
    if (long == true && width == true && height == true && different == false){
        space = true
    } else{
        space = false
    }
    return space
}