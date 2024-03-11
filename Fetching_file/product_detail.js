
const loadDetailProduct = () =>
{
    const param = new URLSearchParams(window.location.search).get("product_id");
    console.log(param);
    const parent = document.getElementById("product_detail")
    fetch(`http://127.0.0.1:8000/products/list/${param}/`)
        .then(res=>res.json())
        .then(product=>{
            parent.innerHTML = `
            <div class="col-lg-4 col-sm-4">
                <div class="box_main">
                   <h4 class="shirt_text">${product.product_name}</h4>
                   <p class="price_text">Price  <span style="color: #262626;">BTD ${product.price}</span> <br/> 
                   Quantity  <span style="color: #262626;"> ${product.quantity}</span></p>
                   <div class="tshirt_img"><img src="${product.product_image}"></div>
                   <p class="price_text">Shipping Cost :BTD ${product.shipping_cost}</p>
                   <div class="btn_main">
                      <div class="buy_bt"><a href="#">Add Chart</a></div>
                      <div class="seemore_bt"><a href="product_detail.html?product_id=${product.id}">See More</a></div>
                   </div>
                </div>
            </div>
            `
        })
}

loadDetailProduct()