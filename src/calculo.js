function calcularJurosCompostos(capitalInicial, taxaJuros, periodos) {
    const montante = capitalInicial * Math.pow(1 + taxaJuros, periodos);
    return montante.toFixed(2); 
}

module.exports = calcularJurosCompostos;
