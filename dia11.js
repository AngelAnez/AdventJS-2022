getCompleted('02:20:20', '03:30:30')

function getCompleted(part, total) {
  let progress = part.split(":")
  let finish = total.split(":")
  let pro_h = progress[0] * 3600
  let pro_m = progress[1] * 60
  let fin_h = finish[0] * 3600
  let fin_m = finish[1] * 60
  let pro_s = parseInt(progress[2])
  let fin_s = parseInt(finish[2])
  let pro_time = pro_h + pro_m + pro_s
  let fin_time = fin_h + fin_m + fin_s
  let decimal = pro_time/fin_time
  let not_min = true
  do {
    if (Number.isInteger(pro_time / 2) && Number.isInteger(fin_time / 2)){
        pro_time = pro_time / 2
        fin_time = fin_time / 2
    } else if (Number.isInteger(pro_time / 3) && Number.isInteger(fin_time / 3)){
        pro_time = pro_time / 3
        fin_time = fin_time / 3
    } else if (Number.isInteger(pro_time / 5) && Number.isInteger(fin_time / 5)){
        pro_time = pro_time / 5
        fin_time = fin_time / 5
    } else if (Number.isInteger(pro_time / 7) && Number.isInteger(fin_time / 7)){
        pro_time = pro_time / 7
        fin_time = fin_time / 7
    } else if (Number.isInteger(pro_time / 421) && Number.isInteger(fin_time / 421)){
        fin_time = fin_time / 421
        pro_time = pro_time / 421
        not_min = false
    }else if (Number.isInteger(pro_time / pro_time) && Number.isInteger(fin_time / pro_time)){
        fin_time = fin_time / pro_time
        pro_time = pro_time / pro_time
        not_min = false
    } else {
        not_min = false
    }
  } while (not_min);
  if (pro_time < 100 && fin_time < 100){
    return pro_time.toString() + "/" + fin_time.toString()
  } else{
    let denominator = 1
    do{
      denominator = denominator * 10
      decimal = decimal * denominator
    } while (!Number.isInteger(decimal))
      let not_min = true
  do {
    if (Number.isInteger(decimal / 2) && Number.isInteger(denominator / 2)){
        decimal = decimal / 2
        denominator = denominator / 2
    } else if (Number.isInteger(decimal / 3) && Number.isInteger(denominator / 3)){
        decimal = decimal / 3
        denominator = denominator / 3
    } else if (Number.isInteger(decimal / 5) && Number.isInteger(denominator / 5)){
        decimal = decimal / 5
        denominator = denominator / 5
    } else if (Number.isInteger(decimal / 7) && Number.isInteger(denominator / 7)){
        decimal = decimal / 7
        denominator = denominator / 7
    } else if (Number.isInteger(decimal / decimal) && Number.isInteger(denominator / decimal)){
        denominator = denominator / decimal
        decimal = decimal / decimal
        not_min = false
    } else {
        not_min = false
    }
  } while (not_min);
    return decimal.toString() + "/" + denominator.toString()
  }
}