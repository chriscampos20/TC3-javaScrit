function addContact() {
    // Obtener los valores de los campos de entrada
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;

    // Verificar si ambos campos están completos
    if (name === "" || number === "") {
        alert("Por favor, complete ambos campos: nombre y número.");
        return;
    }

    // Crear un nuevo elemento de lista para el contacto
    var contactItem = document.createElement('li');
    contactItem.textContent = `Nombre: ${name}, Número: ${number}`;

    // Agregar el nuevo contacto a la lista de contactos
    document.getElementById('contact-list').appendChild(contactItem);

    // Limpiar los campos de entrada
    document.getElementById('name').value = "";
    document.getElementById('number').value = "";
}
