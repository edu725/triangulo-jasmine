/*
Crie um arquivo (verificaTriangulo.js) para compor uma função que receba como parâmetros os lados de um triângulo, a função deverá verificar se os lados (a, b, c) podem ser um triângulo seguindo a regra de existência do triângulo. O programa deverá indicar, caso os lados obedeçam a regra de existência do triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro, veja a seguir:
• a+b > c
• a+c > b
• b+c > a
Tipos de Triângulos:
• Triângulo Equilátero: três lados iguais;
• Triângulo Isósceles: quaisquer dois lados iguais;
• Triângulo Escaleno: três lados diferentes.
Para se ter certeza da função implementada corretamente, deverá ser criando um arquivo (verificaTriangulo.spec.js) para compor todos os testes da função.
*/
describe('verifica_Triangulo',function(){
    for(var i=100; i>0;i--){
        var lado1 = Math.floor((Math.random() * 50) + 1),
            lado2= Math.floor((Math.random() * 50) + 1),
            lado3 = Math.floor((Math.random() * 50) + 1);
        
        it('Se o triangulo tiver dois lados iguais, ele é: ' + (lado1 == lado2 && lado1 == lado3), function(){
            expect(verifica_Triangulo.isTriangle(lado1,lado2,lado3)).toBe(lado1 == lado2 && lado1 == lado3);
        })
    }
})