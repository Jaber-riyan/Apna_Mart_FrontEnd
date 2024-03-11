const loadFashionProduct = () => {
    fetch(`https://apna-fashion-mart.onrender.com/products/list/?category_id=2/`)
        .then(res => res.json())
        .then(data => {
            const parent = document.getElementById("fashion-container")
            console.log(data);
            data.forEach(product => {
                parent.innerHTML += `
                <div class="col-lg-4 col-sm-4">
                <div class="box_main">
                   <h4 class="shirt_text">${product.product_name}</h4>
                   <p class="price_text">Price  <span style="color: #262626;">BTD ${product.price}</span> <br/> 
                   Quantity  <span style="color: #262626;"> ${product.quantity}</span></p>
                   <div class="tshirt_img"><img src="${product.product_image}"></div>
                   <p class="price_text">Shipping Cost :BTD ${product.shipping_cost}</p>
                   <div class="btn_main">
                      <div class="buy_bt"><a onclick="addChart()" href="index.html?product_id=${product.id}">Add Chart</a></div>
                      <div class="seemore_bt"><a href="product_detail.html?product_id=${product.id}">See More</a></div>
                   </div>
                </div>
             </div>
                `
            });
        })
}
const loadElectronisProduct = () => {
    fetch(`https://apna-fashion-mart.onrender.com/products/list/?category_id=3/`)
        .then(res => res.json())
        .then(data => {
            const parent = document.getElementById("electronics-container")
            console.log(data);
            data.forEach(product => {
                parent.innerHTML += `
                <div class="col-lg-4 col-sm-4">
                <div class="box_main">
                   <h4 class="shirt_text">${product.product_name}</h4>
                   <p class="price_text">Price  <span style="color: #262626;">BTD ${product.price}</span> <br/> 
                   Quantity  <span style="color: #262626;"> ${product.quantity}</span></p>
                   <div class="tshirt_img"><img src="${product.product_image}"></div>
                   <p class="price_text">Shipping Cost :BTD ${product.shipping_cost}</p>
                   <div class="btn_main">
                   <div class="buy_bt"><a onclick="addChart()" href="index.html?product_id=${product.id}">Add Chart</a></div>
                      <div class="seemore_bt"><a href="product_detail.html?product_id=${product.id}">See More</a></div>
                   </div>
                </div>
             </div>
                `
            });
        })
}
const loadJewelleryProduct = () => {
    fetch(`https://apna-fashion-mart.onrender.com/products/list/?category_id=4/`)
        .then(res => res.json())
        .then(data => {
            const parent = document.getElementById("jewellery-container")
            console.log(data);
            data.forEach(product => {
                parent.innerHTML += `
                <div class="col-lg-4 col-sm-4">
                <div class="box_main">
                   <h4 class="shirt_text">${product.product_name}</h4>
                   <p class="price_text">Price  <span style="color: #262626;">$ ${product.price}</span> <br/> 
                   Quantity  <span style="color: #262626;"> ${product.quantity}</span></p>
                   <div class="tshirt_img"><img src="${product.product_image}"></div>
                   <p class="price_text">Shipping Cost :BTD ${product.shipping_cost}</p>
                   <div class="btn_main">
                   <div class="buy_bt"><a onclick="addChart()" href="index.html?product_id=${product.id}">Add Chart</a></div>
                      <div class="seemore_bt"><a href="product_detail.html?product_id=${product.id}">See More</a></div>
                   </div>
                </div>
             </div>
                `
            });
        })
}






loadFashionProduct()
loadElectronisProduct()
loadJewelleryProduct()