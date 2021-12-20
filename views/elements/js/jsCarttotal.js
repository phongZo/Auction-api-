// const cartArray = [
//     {
//       imgSrc:
//         "https://lumen.thinkpro.vn//backend/uploads/product/avatar/2021/10/9/ps5-standard-edition-thinkpro-koreajpg",
//       prdName: "Lenovo IdeaPad 5 15 (Chính hãng - Intel gen 11)",
//       prdPrice: "18.990.000",
//       soLuong: "1",
//     },
//     {
//       imgSrc:
//         "https://lumen.thinkpro.vn//backend/uploads/product/avatar/2021/10/9/dell-vostro-3400-chinh-hang-thinkpro-2jpg",
//       prdName: "Lenovo IdeaPad 5 15 (Chính hãng - Intel gen 11)",
//       prdPrice: "18.990.000",
//       soLuong: "1",
//     },
//     {
//       imgSrc:
//         "https://images.unsplash.com/photo-1633665503417-ac060cc1dc59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
//       prdName: "Lenovo IdeaPad 5 15 (Chính hãng - Intel gen 11)",
//       prdPrice: "18.990.000",
//       soLuong: "1",
//     },
//     {
//       imgSrc:
//         "https://images.unsplash.com/photo-1633638935599-c069b2ecba28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
//       prdName: "Lenovo IdeaPad 5 15 (Chính hãng - Intel gen 11)",
//       prdPrice: "18.990.000",
//       soLuong: "1",
//     },
//     {
//       imgSrc:
//         "https://images.unsplash.com/photo-1633665503417-ac060cc1dc59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
//       prdName: "Lenovo IdeaPad 5 15 (Chính hãng - Intel gen 11)",
//       prdPrice: "18.990.000",
//       soLuong: "1",
//     },
//     {
//       imgSrc:
//         "https://images.unsplash.com/photo-1633638935599-c069b2ecba28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
//       prdName: "Lenovo IdeaPad 5 15 (Chính hãng - Intel gen 11)",
//       prdPrice: "18.990.000",
//       soLuong: "1",
//     },
//     {
//       imgSrc:
//         "https://images.unsplash.com/photo-1633665503417-ac060cc1dc59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
//       prdName: "Lenovo IdeaPad 5 15 (Chính hãng - Intel gen 11)",
//       prdPrice: "18.990.000",
//       soLuong: "1",
//     },
//     {
//       imgSrc:
//         "https://images.unsplash.com/photo-1633638935599-c069b2ecba28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
//       prdName: "Lenovo IdeaPad 5 15 (Chính hãng - Intel gen 11)",
//       prdPrice: "18.990.000",
//       soLuong: "1",
//     },
//     {
//       imgSrc:
//         "https://images.unsplash.com/photo-1633665503417-ac060cc1dc59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
//       prdName: "Lenovo IdeaPad 5 15 (Chính hãng - Intel gen 11)",
//       prdPrice: "18.990.000",
//       soLuong: "1",
//     },
//   ];
  
  // function renderCart(arr = [], selector) {
  //   arr.map((val) => {
  //     $(`<div class="product-cart">
  //   <div class="img-cart">
  //     <img
  //       src="${val.imgSrc}"
  //       alt=""
  //     />
  //   </div>
  //   <div class="info">
  //     <div class="name-Pro">
  //     ${val.prdName}
  //     </div>
  //     <div class="soLuong">
  //       <span class="product-price-cart">${val.prdPrice} ₫</span>
  //       <span class="slPro">x ${val.soLuong}</span>
  //     </div>
  //   </div>
  // </div>`).appendTo(selector);
  //   });
  // }
  

  document.getElementById("count").innerHTML =
    "Có " + 3 + " sản phẩm";
  
  // renderCart(cartArray, ".cart-dropdown");

  const btnAddToCarts = document.querySelectorAll('.js-addtocart')
  const cartArray = [
    {
      imgSrc:"https://images.unsplash.com/photo-1633665503417-ac060cc1dc59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
      prdName: "Lenovo IdeaPad 5 15 (Chính hãng - Intel gen 11)",
      prdPrice: "18.990.000",
      soLuong: "1",
    },
    {
      imgSrc:
      "https://images.unsplash.com/photo-1633665503417-ac060cc1dc59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
      prdName: "Lenovo IdeaPad 5 15 (Chính hãng - Intel gen 11)",
      prdPrice: "18.990.000",
      soLuong: "1",
  },
  ];
    console.log(btnAddToCarts)
    function AddtoCart() {
      function renderCart(arr = [], selector) {
        alert('Đã thêm vào giỏ hàng');
        arr.map((val) => {
          $(`<div class="product-cart">
          <div class="img-cart">
            <img src="${val.imgSrc}" alt=""/>
          </div>
            <div div class="info">
            <div class="name-Pro"> ${val.prdName}</div>
            <div class="soLuong">
              <span class="product-price-cart">${val.prdPrice} ₫</span>
              <span class="slPro">x ${val.soLuong}</span>
            </div>
          </div>
        </div>`).appendTo(selector);
        });
      }
      renderCart(cartArray, ".cart-dropdown");
    }
    for(const btnAddToCart  of btnAddToCarts){
      btnAddToCart.addEventListener('click',AddtoCart )
        }