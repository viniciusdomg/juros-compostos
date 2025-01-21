function calcularJurosCompostos(capitalInicial, taxaJuros, periodos) {
    
    const montante = capitalInicial * Math.pow(1 + taxaJuros, periodos);
    return montante.toFixed(2); 
}

const capitalInicial = 1000;
const taxaJuros = 0.05; 
const periodos = 12; 

const montanteFinal = calcularJurosCompostos(capitalInicial, taxaJuros, periodos);
console.log(`O montante final após ${periodos} períodos será de R$ ${montanteFinal}`);
