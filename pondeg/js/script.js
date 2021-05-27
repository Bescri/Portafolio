window.onload = () => {
    const form = document.getElementById('formulario');
    form.onsubmit = (e) => {
    e.preventDefault();

    const getlenguaje = document.getElementById('lenguaje');
    const lenguaje = getlenguaje.value;

    const getlenguaje1 = document.getElementById('lenguaje1');
    const lenguaje1 = getlenguaje1.value;

    let todoLenguaje = (lenguaje1*lenguaje)/100;
    console.log(todoLenguaje);



  const getmatematicas = document.getElementById('matematicas');
    const matematicas = getmatematicas.value;

    const getmatematicas1 = document.getElementById('matematicas1');
    const matematicas1 = getmatematicas1.value;

    let todoMatematicas = (matematicas*matematicas1)/100;
    console.log(todoMatematicas);



 const getciencias = document.getElementById('ciencias');
    const ciencias = getciencias.value;

    const getciencias1 = document.getElementById('ciencias1');
    const ciencias1 = getciencias1.value;

    let todoCiencias = (ciencias*ciencias1)/100;
    console.log(todoCiencias);


 const gethistoria = document.getElementById('historia');
    const historia = gethistoria.value;

    const gethistoria1 = document.getElementById('historia1');
    const historia1 = gethistoria1.value;

    let todoHistoria = (historia*historia1)/100;
    console.log(todoHistoria);


const getranking = document.getElementById('ranking');
    const ranking = getranking.value;

    const getranking1 = document.getElementById('ranking1');
    const ranking1 = getranking1.value;

    let todoRanking = (ranking*ranking1)/100;
    console.log(todoRanking);

    const getnem = document.getElementById('nem');
    const nem = getnem.value;

    const getnem1 = document.getElementById('nem1');
    const nem1 = getnem1.value;

    let todoNEM = (nem*nem1)/100;
    console.log(todoNEM);

    let ponderacionTotal = todoLenguaje+todoMatematicas+todoCiencias+todoHistoria+todoRanking+todoNEM;
    let ponderacionFinal = ponderacionTotal.toFixed(0);

    const ponderado = document.getElementById('ponderado');
    ponderado.innerHTML = 'Haz ponderado: '+ponderacionFinal;

    }
}