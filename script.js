function calcularTotal() {
    let capturaPropina = document.getElementById("opciones")
    let capturaSubtotal = document.getElementById("subtotal")
    const valorPropina = capturaPropina.value
    let valorSubtotal = parseFloat (capturaSubtotal.value) || 0
    let total = valorSubtotal
    let propina = 0

    if (valorPropina === "excelente") {
        propina = valorSubtotal * 0.20;
    } else if (valorPropina === "Bueno") {
        propina = valorSubtotal * 0.15;
    } else if (valorPropina === "regular") {
        propina = valorSubtotal * 0.10;
    }

    total  += propina


    if (total > 200000) {
        descuento = total * 0.2;
    } else if (total > 100000) {
        descuento = total * 0.1;
    }
    else{
        descuento = 0;
    }

    total -= descuento


    document.getElementById("propina").innerText = propina.toFixed(2);
    document.getElementById("descuento").innerText = descuento.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);

    ingreso.reset();

}