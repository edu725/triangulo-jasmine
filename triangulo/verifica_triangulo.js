function classificaTriangulo (lado1, lado2, lado3) {
    if(isTriangle (lado1, lado2, lado3)){
        if(lado1 == lado2 && lado1 == lado3)
            return "Equilátero";
        else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3)
            return "Isósceles";
        return "Escaleno";
    }return "Não é um triângulo válido";
};
function isTriangle (lado1, lado2, lado3){
    return (((lado1 + lado2) > lado3) && ((lado1 + lado3) > lado2) && ((lado2 + lado3) > lado1));
};