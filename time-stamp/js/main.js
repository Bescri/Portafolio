const body = document.body;
const pie = document.getElementById("footer")
const info = document.getElementById("info")
const git = document.getElementById("git")
const footer = document.getElementById("footer")
const code = document.getElementById("code")
const lenguage = document.getElementById("language")
const moon = document.getElementById("moon")
const all = document.getElementsByTagName("*");
const iele = document.getElementsByTagName("i");

let op = 0;
let ol = 0;

setInterval(() => {
    const seconds = new Date()
    let secondsUnix = Math.round(seconds.getTime()/1000)
    const horaUnix = document.getElementById("horaUnix")
    horaUnix.innerText = secondsUnix
}, 1000)

setTimeout(function () {
    git.innerHTML = `<a href="https://github.com/Bescri/"><i id="iGit"class="fab fa-github wow animate__fadeIn" style="animation-duration: 0s; "></i></a>`
    code.innerHTML = `<a href="https://github.com/Bescri/time-stamp"><i id="iCode" class="fas fa-code wow animate__fadeIn" style="animation-duration: 0s;" ></i></a>`
    info.innerText = `Unix time is a system for describing a point in time.It is the number of seconds that have elapsed since the Unix epoch, minus leap seconds; the
    Unix epoch is 00: 00: 00 UTC on 1 January 1970.`
    footer.innerText = `<> with ❤ by Bastián Escribano`
}, 1000);









moon.onclick = () => {
    body.classList.toggle("darkMode")
    if (ol == 0) {
        moon.innerHTML = `<a href="#" id="moon" >
  <i class="far fa-sun fade-in" id="iElement" style="animation-duration: 2s;color: white;"></i></a>`

  
        language.innerHTML = `<i id="iLan" class="fas fa-language fade-in"  style="animation-duration: 2s; color: white;"></i>`

    


        git.innerHTML = `<a href="https://github.com/Bescri/"><i id="iGit"class="fab fa-github wow animate__fadeIn" style="animation-duration: 0s; color: white; "></i></a>`
        code.innerHTML = `<a href="https://github.com/Bescri/time-stamp"><i id="iCode" class="fas fa-code wow animate__fadeIn" style="animation-duration: 0s; color: white;" ></i></a>`
        ol = 1;

    }
    else {
        git.innerHTML = `<a href="https://github.com/Bescri/"><i id="iGit"class="fab fa-github wow animate__fadeIn" style="animation-duration: 0s; color: black; "></i></a>`
        code.innerHTML = `<a href="https://github.com/Bescri/time-stamp"><i id="iCode" class="fas fa-code wow animate__fadeIn" style="animation-duration: 0s; color: black;" ></i></a>`
        language.innerHTML = `<i id="iLan" class="fas fa-language fade-in"  style="animation-duration: 2s; color: black;"></i>`
        moon.innerHTML = `<a href="#" id="moon" >
  <i class="far fa-moon fade-in" id="iElement" style="animation-duration: 2s; color: black;"></i></a>`
        ol = 0;

    }


    
}


lenguage.onclick = () =>{

    let y = document.getElementById("info").textContent
    console.log(y.length)

    if (op == 0){

    
        info.innerText = `Tiempo Unix o Tiempo POSIX es un sistema para la descripción de instantes de tiempo: se define como la cantidad de segundos transcurridos desde la medianoche UTC del 1 de enero de 1970.`

        op = 1;
    }
    else {
        info.innerText = `Unix time is a system for describing a point in time.It is the number of seconds that have elapsed since the Unix epoch, minus leap seconds; the
        Unix epoch is 00: 00: 00 UTC on 1 January 1970.`
    

    op = 0;
    }




    





}
