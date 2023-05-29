function confereDivisivel (){
    const valor = prompt("Digite um valor:");

    if (valor % 2 === 0 || valor % 3 === 0) {
        console.log("É divisivel")

           
     } else {
        console.log("Não é divisivel")

     }
}

confereDivisivel()