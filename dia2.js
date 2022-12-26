const year = 2022
const holidays = ["12/02", "12/03", "12/01", "10/29"]
countHours(year,holidays)


function countHours (year,holidays){
    let y = year.toString()
    let hours = 0
    holidays.forEach((holiday) => {
        let full = holiday + "/" + y
        let fulldate = new Date(full)
        let week_day = fulldate.getDay()
        if (week_day > 0 && week_day < 6){
            hours = hours + 2
        }
    });
    return hours
}