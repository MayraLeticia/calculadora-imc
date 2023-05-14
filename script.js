function imcCalculation() {
    const height = document.getElementById("height").value / 100;
    const weight = document.getElementById("weight").value;
    const imc =  weight / ( height * height );
    
    let rating = "";
    if (height == "" && weight == "") {
        alert("Preencha todos os campos!");
    } else {
        if (imc < 18.5) {
            rating = "Abaixo do peso";
        } else if (imc < 25) {
            rating = "Peso normal";
        } else if (imc < 30) {
            rating = "Acima do peso";
        } else if (imc < 35) {
            rating = "Obesidade grau I";
        } else if (imc < 40) {
            rating = "Obesidade grau II";
        } else {
            rating = "Obesidade grau III";
        }

        const result = `${imc.toFixed(1)}`;
        const rate = `${rating}`
        document.getElementById("result").innerHTML = result;
        document.getElementById("rate").innerHTML = rate;

    }
}
