const addChart = () => {
    const user_id = localStorage.getItem('user_id');
    const param = new URLSearchParams(window.location.search).get("product_id");
    const quantity = 1;
    const product = param;
    const user = user_id;

    fetch(`http://127.0.0.1:8000/products/chartList/`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ quantity, product, user }),
    })
        .then(res => res.json())
        .then(data => console.log(data))
}


// const showChart = () => {
//     const user_id = localStorage.getItem('user_id');
//     const param = new URLSearchParams(window.location.search).get("product_id");
//     console.log(param);
//     fetch(`http://127.0.0.1:8000/products/chartList/?user_id=${user_id}`)
//         .then(res => res.json())
//         .then(chart_data => {
//             chart_data.forEach(element => {
//                 fetch(`http://127.0.0.1:8000/products/list/${element.product}/`)
//                     .then(res => res.json())
//                     .then(product_data => console.log(product_data))
//             });
//         })
// }






// showChart()