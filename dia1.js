gifts = ["midu"]
wrapped = wrapping(gifts)
console.log(wrapped)

function wrapping(gifts) {
  let gifts_wrapped = []
  let a = "*"
  let b = "\n"
  let box
  gifts.forEach((gift) => {
    x = gift.length 
    y = a.repeat(x+2)
    box = y + b + a + gift + a + b + y
    gifts_wrapped.push(box)
  })
  return gifts_wrapped
  }