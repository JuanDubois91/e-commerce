/*!
 * Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

const cards = document.getElementById('containerCards');
const containerCart = document.getElementById("containerCart");
const totalCart = document.getElementById("total-cart");
const btnAdd = document.getElementById("btn_add");
const btnRest = document.getElementById("btn_rest");
const radioFilter = document.querySelectorAll(".form-check-input");
// const buttonBuy = document.getElementById("btn-buy");
// const buttonDelete = document.getElementById("btn-delete");

let shoppingCart = [];

let menu = [
  {
    id: 0,
    title: 'Panqueques mantequilla',
    category: 'breakfast',
    price: 15,
    image: 'assets/img/breakfast/ButtermilkPancakes.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
    stock: 2,
    cuantity: 1,
  },

  {
    id: 1,
    title: 'Delicia campestre',
    category: 'breakfast',
    price: 18,
    image: 'assets/img/breakfast/countryDelight.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
    stock: 6,
    cuantity: 1,
  },

  {
    id: 2,
    title: 'Sandwich doble',
    category: 'lunch',
    price: 14,
    image: 'assets/img/lunch/sandwichDouble.webp',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
    stock: 8,
    cuantity: 1,
  },

  {
    id: 3,
    title: 'Pescado y ensalada',
    category: 'lunch',
    price: 14,
    image: 'assets/img/lunch/fish-and-salad.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
    stock: 0,
    cuantity: 1,
  },

  {
    id: 4,
    title: 'Batido de banana',
    category: 'shakes',
    price: 7,
    image: 'assets/img/milkshake/banana-milkshake.webp',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
    stock: 12,
    cuantity: 1,
  },

  {
    id: 5,
    title: 'Batido de Chocolate',
    category: 'shakes',
    price: 9,
    image: 'assets/img/milkshake/chocolate-milkshake-twin-bar.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit fuga aliquid modi rerum possimu.',
    stock: 4,
    cuantity: 1,
  },
];


window.addEventListener('DOMContentLoaded', () => {
  showMenu(menu);
});


const showMenu = (menu)=> {
  
  let displayItems = menu.map((itemMenu)=> {

    const { image, title, price, id } = itemMenu
      
      return `
            <div class="col mb-5">
            <div class="card h-100">
              <img class="card-img-top" src="${image}" alt="..." />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">${title}</h5>
                        $${price}
                  </div>
                </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="pushProduct(${id})">Agregar al carrito</a>
            </div>
          </div>
        </div>
      </div>
      `
    })

    cards.innerHTML = displayItems;
  };


  const pushProduct = (id)=> {
    let selectedProduct = menu.find((element) => element.id == id);
    let productInCart = shoppingCart.find((element) => element.id == id);
    
    productInCart ? productInCart.cuantity += 1 : shoppingCart.push(selectedProduct);
    
    updateCart()
}


const updateCart = ()=> {
  let showItem = shoppingCart.map((menu)=> {

    const { id, title, cuantity, price } = menu

    return `
          <th scope="row">${id}</th>
            <td>${title}</td>
            <td>
              <button type="button" class="btn_action_cart--add" onclick="addProduct(${id})">+</button>
              <button type="button" class="btn_action_cart--rest" onclick="deleteProduct(${id})">-</button>
            </td>
            <td>${cuantity}</td>
            <td>$${price}</td>
            <td>$${price * cuantity}</td>
          </tr>
          `
        })

        totalCart.textContent = shoppingCart.reduce((acc, ele) => acc += (ele.price * ele.cuantity), 0);
        containerCart.innerHTML = showItem;
      }

      const deleteProduct = (id)=> {
        let productForDelete = shoppingCart.find((item)=> item.id == id)

        productForDelete.cuantity -= 1;

        if(productForDelete.cuantity == 0) {
            shoppingCart.splice(productForDelete, 1);
        }

        updateCart()
      }

      const addProduct = (id)=> {
        let productForAdd = shoppingCart.find((item) => item.id == id);

        productForAdd.cuantity += 1;

        updateCart()
      }


      radioFilter.forEach((radio) => {
        radio.addEventListener("click", (event)=> {
          let categ = event.currentTarget.dataset.id;

          let filterMenu = menu.filter((itemMenu)=> {
            if(itemMenu.category === categ) {
              return itemMenu
            }
          });

          if (categ === "all") {
            showMenu(menu);
          }else {
            showMenu(filterMenu);
          }

        });
      });






































































