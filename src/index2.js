function computeTwoDigitNumber(value) {
    let numero = value.toString().split("");
    if (numero.length  ===  1)
    {
        value = "0"+value;
        return value;
    }    
    else
        return value.toString();
  }

console.log(computeTwoDigitNumber(15));

const listaAutores = ["Antonio","Benedito"];
const listaAutores2 = [...listaAutores];