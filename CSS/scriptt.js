// Biến chứa giỏ hàng
let cart = [];

// Thêm sản phẩm vào giỏ hàng
function addToCart(productName, productPrice) {
    // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1; // Tăng số lượng
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }
    renderCart();
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    renderCart();
}

// Hiển thị giỏ hàng
function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    cartContainer.innerHTML = ""; // Xóa nội dung cũ
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toLocaleString()} VNĐ</td>
            <td>${item.quantity}</td>
            <td>${(item.price * item.quantity).toLocaleString()} VNĐ</td>
            <td><button onclick="removeFromCart('${item.name}')">Xóa</button></td>
        `;
        cartContainer.appendChild(row);
    });

    totalPriceElement.textContent = total.toLocaleString() + " VNĐ";
}

// Gắn sự kiện cho nút "Thêm vào giỏ hàng"
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("#list-products .item button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const product = button.closest(".item");
            const name = product.querySelector(".name").textContent;
            const priceText = product.querySelector(".price").textContent;
            const price = parseInt(priceText.replace(/[^\d]/g, ""));

            addToCart(name, price);
        });
    });
});




