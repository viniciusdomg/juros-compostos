const calcularJurosCompostos = require('../src/calculo');

describe('Testes para a função calcularJurosCompostos', () => {

    test('Deve calcular o montante corretamente para valores positivos', () => {
        const capitalInicial = 1000;
        const taxaJuros = 0.05;
        const periodos = 12;

        const montanteFinal = calcularJurosCompostos(capitalInicial, taxaJuros, periodos);
        expect(montanteFinal).toBe('1795.86'); 
    });

    test('Deve retornar o valor do capital inicial para zero períodos', () => {
        const capitalInicial = 1000;
        const taxaJuros = 0.05;
        const periodos = 0;

        const montanteFinal = calcularJurosCompostos(capitalInicial, taxaJuros, periodos);
        expect(montanteFinal).toBe('1000.00');
    });

    test('Deve retornar zero para valor de capital inicial zero', () => {
        const capitalInicial = 0;
        const taxaJuros = 0.05;
        const periodos = 12;

        const montanteFinal = calcularJurosCompostos(capitalInicial, taxaJuros, periodos);
        expect(montanteFinal).toBe('0.00');
    });

    test('Deve retornar montante correto para juros negativos', () => {
        const capitalInicial = 1000;
        const taxaJuros = -0.05; 
        const periodos = 12;

        const montanteFinal = calcularJurosCompostos(capitalInicial, taxaJuros, periodos);
        expect(montanteFinal).toBe('540.36'); 
    });
});
