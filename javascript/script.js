/**
 * Suma dos números y retorna el resultado.
 *
 * @param {number} a - El primer número a sumar.
 * @param {number} b - El segundo número a sumar.
 * @return {number} El resultado de la suma.
 */
function suma(a, b) {
    return a + b;
}

/**
 * Calcula el área de un círculo dado su radio.
 *
 * @param {number} radio - El radio del círculo.
 * @return {number} El área del círculo.
 */
function calcularAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

/**
 * Devuelve un saludo personalizado.
 *
 * @param {string} nombre - El nombre de la persona a saludar.
 * @return {string} Un mensaje de saludo.
 */
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
