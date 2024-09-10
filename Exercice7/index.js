function convertToBinary() {

    const decimalInput = document.getElementById('decimalInput');
    const binaryResult = document.getElementById('binaryResult');
    const decimalNumber = Number(decimalInput.value);
    binaryResult.textContent = Number.isNaN(decimalNumber) ? '' : decimalNumber.toString(2);

}