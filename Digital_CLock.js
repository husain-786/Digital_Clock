/*

let d = new Date()

// let h = d.getHours()
// let m = d.getMinutes()
// let s = d.getSeconds()
// let dt = d.getDate()

// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())
// console.log(d.getDate())



let x = document.getElementsByClassName("container")[0]
// console.log(x)

let h = document.createElement("div")
let m = document.createElement("div")
let s = document.createElement("div")

h.classList.add("hours", "green")
m.classList.add("minutes", "yellow")
s.classList.add("seconds", "red")

h.id = "hour"
m.id = "minute"
s.id = "second"


// hour.background = "yellow"

let a = Array.from(x.childElementCount)
console.log(a)

// h.classList.add('hours', 'hrs', 'hr')  // can add multiple class at a time...

x.append(h)
x.append(m)
x.append(s)


let obj = new Date()


*/




// *********************** Digital Clock ***********************



function clock(){
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")
    let period = document.getElementById("period")

    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()        

    let am_pm = (h > 12)? "PM": "AM"

    if (h >= 12){
        h = h - 12
    }

    h = (h < 10)? "0"+h: h;
    m = (m < 10)? "0"+m: m;
    s = (s < 10)? "0"+s: s;

    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
    period.innerHTML = am_pm
}

setInterval(clock, 1000)
