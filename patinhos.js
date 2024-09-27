var pato;

do {
    pato = parseInt(prompt("Digite quantas vezes o pato voltou:"));
    if (pato > 0) {
        for (var i = pato; i >  0; i--) {
            console.log(i + " Patinhos foram passear, além da montanha para brincar");
        }
    } else {
        console.log("Número inválido. Por favor, digite um número maior que zero.");
    }
} while (pato <= 0);