// Función para calcular el total y mostrar detalles del producto
function calc() {
    // Obtener el valor seleccionado del producto
    var productSelect = document.getElementById("product");
    var productName = productSelect.options[productSelect.selectedIndex].text; // Nombre del producto
    var productPrice = parseFloat(productSelect.value); // Precio del producto

    // Obtener la cantidad seleccionada
    var quantityInput = document.getElementById("number");
    var quantity = parseInt(quantityInput.value); // Convertir a número entero

    // Validar que se haya seleccionado un producto y una cantidad válida
    if (productPrice > 0 && quantity > 0) {
        // Calcular el subtotal
        var subtotal = productPrice * quantity;

        // Calcular la tarifa de envío según el monto total
        var shippingCost = calculateShippingCost(subtotal);

        // Calcular el monto total del pedido (subtotal + tarifa de envío)
        var totalAmount = subtotal + shippingCost;

        // Construir el mensaje con los detalles del producto y el pedido
        var message = "Detalles del pedido:\n\n";
        message += "Nombre del producto: " + productName + "\n";
        message += "Precio unitario: " + productPrice + "円\n";
        message += "Cantidad: " + quantity + "\n";
        message += "Subtotal: " + subtotal + "円\n";
        message += "Tarifa de envío: " + shippingCost + "円\n";
        message += "Total del pedido: " + totalAmount + "円";

        // Mostrar el mensaje en un cuadro de alerta
        alert(message);
    } else {
        // Mostrar un mensaje de error si no se seleccionó producto o cantidad válida
        alert("Por favor selecciona un producto y una cantidad válida.");
    }
}

// Función para calcular la tarifa de envío según el monto total
function calculateShippingCost(subtotal) {
    if (subtotal < 2000) {
        return 500; // Tarifa de envío de 500 yenes si el subtotal es inferior a 2000 yenes
    } else if (subtotal >= 2000 && subtotal < 3000) {
        return 250; // Tarifa de envío de 250 yenes si el subtotal está entre 2000 y 2999 yenes
    } else {
        return 0; // Tarifa de envío gratuita si el subtotal es de 3000 yenes o más
    }
}
