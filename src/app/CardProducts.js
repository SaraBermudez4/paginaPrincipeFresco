import productosBD from './baseDatosProductos'

function CardProducts(){
let Card = document.querySelector('.containerProducts')   
let productos = productosBD
Card.innerHTML ='' 
productos.forEach(item => {
Card.innerHTML += `
<div class="col mb-3">
<div class="card" style="width: 18rem; margin:auto;">
<img src=${item.imagen} class="card-img-top img-fluid" alt="..." style= "height: 217px;
object-fit: cover;">
<div class="card-body ">
      <p class="card-text">${item.descripcion.substring(0,60)}..</p>
      <p>$ ${item.precio}</p>
      <div class="d-grid gap-2">
      <button  class="btn btn-dark comprar" data-user=${item.id}>Comprar </button>
      </div>
      </div>
      </div>
      </div>
`
});
document.querySelector('main').innerHTML += `
<img src="https://i.ibb.co/wck8mnY/cover.png" style="max-heigth:350px;
object-fit: cover; width: 100%;"/>

<footer>
<div class="footer px-3">
    <div class="logo-1 mt-5 pt-5 mx-5">
        <img src="https://i.ibb.co/vxR3WJK/logo-fresh.png">
    </div>
    <div class="row redes_sociales mt-5 ps-5">
        <div class="col-6">
            <img src="https://i.ibb.co/pnWQ0mW/Group-2.png">
        </div>
        <div class="col-1">
            <img src="https://i.ibb.co/CHDcBTm/Group-3.png">
        </div>
    </div>
</div>
</footer>

`
}

export default CardProducts;