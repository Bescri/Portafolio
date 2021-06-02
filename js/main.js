const moon = document.getElementById("moon")
const language = document.getElementById("language");
const body = document.body;
const footer = document.getElementById("foot")
const iElement = document.querySelectorAll("#iElement")
const all = document.getElementsByTagName("*");
let op = 0;
elemento24.innerText = "Junior Front End Developer";
elemento26.innerText = "</>";
let ol = 0;
moon.onclick = () => {
    
    if (ol == 0){
        moon.innerHTML = `<a href="#" id="moon" >
  <i class="far fa-sun fade-in" id="iElement" style="animation-duration: 2s;"></i></a>`

        
        ol = 1;

    }
    else{
        moon.innerHTML = `<a href="#" id="moon" >
  <i class="far fa-moon fade-in" id="iElement" style="animation-duration: 2s; color: black;"></i></a>`
        ol = 0;

}
    for (var i = 0, max = all.length; i < max; i++) {
        // Do something with the element here
        all[i].classList.toggle("iLight")
    }
    body.classList.toggle("bodyLight")
    footer.classList.toggle("footerLight")
    iElement.classList.toggle("iLight")

}


language.onclick = () => {


    if (op == 0){
        elemento1.innerText = "Hola";
        elemento2.innerText = "Soy Bastián Escribano";
        elemento3.innerText = "Empático";
        elemento4.innerText = "Perseverante";
        elemento5.innerText = "Social";
        elemento6.innerText = "Repositorios";
        elemento7.innerText = "Tiempo Unix en tiempo real.";
        elemento8.innerText = "Pincha el reloj para acceder al repositorio.";
        elemento9.innerText = "Plataforma: Web";
        elemento10.innerText = "Programada en: JavaScript";
        elemento11.innerText = "Una herramienta simple y eficiente.";
        elemento12.innerText = "Pincha la calculadora para acceder al repositorio.";
        elemento13.innerText = "Plataforma: Android 2.6+";
        elemento14.innerText = "Programada en: Java, JavaScript";
        elemento15.innerText = "Formación Académica";
        elemento16.innerText = "Universidad Andrés Bello";
        elemento17.innerText = "Ingeniería en Computación e Informática";
        elemento18.innerText = "2020 - Actualidad";
        elemento19.innerText = "Universidad de Santiago de Chile";
        elemento20.innerText = "Ingeniería de Ejecución en Computación e Informática";
        elemento21.innerText = "Contacto";
        elemento22.innerText = "<> con ♥ por Bastián Escribano";
        elemento23.innerText = `"Si lo vas a intentar, ve hasta el final. De otra forma ni lo intentes."` 
        elemento24.innerText = "Desarrollador de Software"
        elemento25.innerText = "Habilidades"
        op = 1;

    }
    else{
        elemento1.innerText = "Hi";
        elemento2.innerText = "I'm Bastián Escribano";
        elemento3.innerText = "Empathic";
        elemento4.innerText = "Persistent";
        elemento5.innerText = "Social";
        elemento6.innerText = "Repositories";
        elemento7.innerText = "Time-stamp real time clock.";
        elemento8.innerText = "Touch the clock to go to the repository.";
        elemento9.innerText = "Plataform: Web";
        elemento10.innerText = "Written in: JavaScript";
        elemento11.innerText = "A simple and easy to use tool college scores.";
        elemento12.innerText = "Touch the calculator to go to the repository.";
        elemento13.innerText = "Plataform: Android 2.6+";
        elemento14.innerText = "Written in: Java & JavaScript";
        elemento15.innerText = "College Education";
        elemento16.innerText = "University Andrés Bello";
        elemento17.innerText = "Computer and Software Engenieering";
        elemento18.innerText = "2020 - Now";
        elemento19.innerText = "University of Santiago";
        elemento20.innerText = "Computer and Software Engenieering";
        elemento21.innerText = "Contact";
        elemento22.innerText = "<> with ♥ by Bastián Escribano";
        elemento23.innerText = `"If you're going to try, go all the way. Otherwise, don't even start."`
        elemento24.innerText = "Junior Front End Developer";
        elemento25.innerText = "Stack and Skills";
        op = 0;

    }



}
