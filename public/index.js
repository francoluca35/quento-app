const inputName = document.querySelector('#productNombre')
const inputPrice = document.querySelector('#productoPrecio')
const button = document.querySelector('button')

button.addEventListener('click', (e)=>{
    const nombre= inputName.value
    const precio = inputPrice.value

    fetch('/api/v1/products', {
        method:'POST',
         headers:{
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        nombre,
        precio,
    }),
})
})