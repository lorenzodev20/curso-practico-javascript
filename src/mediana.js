// Taller #3: Calculando la Mediana 

// Declaro mi array
/* const lista1 = [
    200,
    600,
    400000000,
    100,
    500,
]; */

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Recibe una lista o un array
function calcularMediana(lista) {

    let mediana;

    //Primero ordenamos la lista
    const lista1 = lista.sort(function(a, b) {
        return a - b;
    });

    const mitadLista1 = parseInt(lista1.length / 2);
    
    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento1y2;
    } else {
        mediana = lista1[mitadLista1];
    }

    return mediana;
}

function calcularMedianaLista(){

    const listaElementos = document.getElementsByName("campo");
    let lista = [];

    for (let i = 0; i < listaElementos.length; i++) {

        if (listaElementos[i].value>0) {
            const valor = parseFloat(listaElementos[i].value);
            lista.push(valor);
        }
    }

    if (lista.length>0) {
        return calcularMediana(lista);
    }else{
        return 'La lista esta vacia o no tiene valores';
    }
    
}

function ejecutarMediana() {
    const respuesta = calcularMedianaLista();

    if (respuesta>0) {
        // Respuesta en HTML
        const RpsPromedio = document.getElementById("RpsPromedio");
        RpsPromedio.innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
        'LA MEDIANA DE LA LISTA ES: <strong> '+respuesta+'</strong>'+
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    }else{
        // Respuesta en HTML
        const RpsPromedio = document.getElementById("RpsPromedio");
        RpsPromedio.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+
        '<strong>'+respuesta+'</strong>'+
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    }
}


