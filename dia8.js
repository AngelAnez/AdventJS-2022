const part = "zzzoonzzz"
checkPart(part)
function checkPart(part) {  
  let left = ""
  let right = ""
  let part_left = ""
  let part_right = ""
  let part_complete = ""
  let i = 0
  let j = -1
  let n = 1
  let palindromo = true
  let agree = true
  let next = false
  let one_less = false  
  let width = part.length
    if (width < 2){
      return false
    } else{
        do {
            next = false
            do {
                if (one_less){
                    left = part_complete.at(i)
                    right = part_complete.at(j)
                } else{
                    left = part.at(i)
                    right = part.at(j)
                }
                if (left != right){
                    agree = false
                    next = true
                } else{
                i++
                j--
                }
                if (i == width-1){
                    agree = false
                }
            } while (agree);
            if (next == true) {
                one_less = true
                part_left = part.slice(0, n-1)
                part_right = part.slice(n, width)
                part_complete = part_left.concat(part_right)
                i = 0
                j = -1
                agree = true
            }
            n++
            if (n == width){
                next = false
                palindromo = false
            } 
        } while (next);
    }
  return palindromo
}