const products = [
    { id: 1, name: 'Laptop Dell XPS 15', price: 35990000, image: 'https://nvs.tn-cdn.net/2023/04/laptop-dell-xps-15-9520-70295790-3.jpg', description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.' },
    { id: 2, name: 'iPhone 15 Pro Max', price: 32990000, image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain', description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.' },
    { id: 3, name: 'Samsung Galaxy S24 Ultra', price: 28990000, image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain', description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.' },
    { id: 4, name: 'Tai nghe Sony WH-1000XM5', price: 7990000, image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv36f0uj8xuaf', description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.' },
    { id: 5, name: 'Apple Watch Series 9', price: 11990000, image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all', description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.' },
    { id: 6, name: 'Loa JBL Charge 5', price: 3990000, image: 'https://hoanghamobile.com/Uploads/2021/03/09/image-removebg-preview-6.png', description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.' }
];

let displayProducts = (productList) => {
    const productListContainer = document.getElementById("productList");
    productListContainer.innerHTML = "";

    productList.forEach(product => {
        productListContainer.innerHTML += `
            <div class = "col-2">
                <div class = "product-card">
                <img src = "${product.image}">
                <h5>${product.name}</h5>
                <p>${product.description}</p>
                <p>${product.price.toLocaleString()} VND</p>
                <button class="btn btn-primary">Buy</button>
                </div>
            </div>
        `;
    });
}

let searchProduct = () => {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const filterProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchText) || 
        product.description.toLowerCase().includes(searchText)
    );
    displayProducts(filterProducts);
}

displayProducts(products);
