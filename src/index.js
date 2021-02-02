/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo"
const baseUrl = "https://platzi-avo.vercel.app"

const appNode = document.querySelector('#app')
appNode.addEventListener("click", (event) =>{
  if (event.target.nodeName === "H2") {
    window.alert('hola')
  }
 
})
const formatPrice = (price) => {
  //instancio la variable
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style:"currency",
    currency:"USD",
    //doy formato 
  }).format(price)
  return newPrice
}

//Intl:se usa para
// 1. format fechas
//2. format monedas
//con asyn await

async function fetchData() {
  const response = await fetch(`${baseUrl}/api/avo`)
  const data = await response.json()
  const allItems = []

    data.data.forEach((item) => {
      
      const image = document.createElement("img")
      image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
      image.src = `${baseUrl}${item.image}`
       
      const title = document.createElement("h2")
      title.textContent = item.name
      //agregando estilos desde js
      //title.style = 'font-size:'
      

      title.className = "text-lg"

      const price = document.createElement("div")
      price.textContent = item.price
      price.className = "text-gray-600"
      price.textContent = formatPrice(item.price);


       // cremos el contenedor donde vamos a poner nuestros elementos
      //const container = document.createElement("div");
     
      /*agregamos los elementos a un contenedor
    
        container.appendChild(imagen);
        container.appendChild(titulo);
        container.appendChild(precio);
    
    */
     //Wrap price & title
     const priceAndTitle = document.createElement('div')
     priceAndTitle.className = 'text-center md:text-left'
     priceAndTitle.append(title, price)

     //Wrap Img and priceAndTitle
     const card = document.createElement('div')
     card.className = "md:flex bg-white rounded-lg p-6 hover:bg-blue-300"
     card.append(image, priceAndTitle)
     console.log(card)


      //agregamos el contenedor en nuestro body
        //document.body.appendChild(container);
      allItems.push(card)
      console.log(item.name)
    });

    appNode.append(...allItems)

}

fetchData();