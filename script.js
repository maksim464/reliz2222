/// Масив для зберігання товарів у кошику
let cart = [];

// Функція для додавання товару у кошик
function addToCart(productName) {
    cart.push(productName);
    updateCartUI();
}

// Оновлення відображення кошика
function updateCartUI() {
    let cartList = document.getElementById("cart-items");
    let cartCount = document.getElementById("cart-count");
    let checkoutBtn = document.getElementById("checkout-btn");
    
    cartList.innerHTML = "";
    
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;
        li.classList.add("cart-item");
        
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = function () {
            removeFromCart(index);
        };
        li.appendChild(removeBtn);
        cartList.appendChild(li);
    });

    cartCount.textContent = cart.length;
    checkoutBtn.style.display = cart.length > 0 ? "block" : "none";
}

// Видалення товару з кошика
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Очищення кошика
function clearCart() {
    cart = [];
    updateCartUI();
}

// Функція для відкриття кошика
function toggleCart() {
    let cartPanel = document.getElementById("cart-panel");
    let overlay = document.getElementById("overlay");
    
    if (cartPanel.style.display === "flex") {
        cartPanel.style.display = "none";
        overlay.style.display = "none";
    } else {
        cartPanel.style.display = "flex";
        overlay.style.display = "block";
    }
}

// Додаємо розмиття фону
function setupCartModal() {
    let overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    overlay.style.backdropFilter = "blur(8px)";
    overlay.style.display = "none";
    overlay.style.zIndex = "999";
    overlay.onclick = toggleCart;
    document.body.appendChild(overlay);

    let cartPanel = document.getElementById("cart-panel");
    cartPanel.style.position = "fixed";
    cartPanel.style.top = "50%";
    cartPanel.style.left = "50%";
    cartPanel.style.transform = "translate(-50%, -50%)";
    cartPanel.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
    cartPanel.style.padding = "25px";
    cartPanel.style.borderRadius = "20px";
    cartPanel.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.4)";
    cartPanel.style.display = "none";
    cartPanel.style.zIndex = "1000";
    cartPanel.style.width = "450px";
    cartPanel.style.textAlign = "center";
    cartPanel.style.color = "#fff";
    cartPanel.style.fontFamily = "Arial, sans-serif";

    let checkoutBtn = document.createElement("button");
    checkoutBtn.id = "checkout-btn";
    checkoutBtn.textContent = "🚀 Оформити замовлення";
    checkoutBtn.style.display = "none";
    checkoutBtn.classList.add("checkout-btn");
    checkoutBtn.onclick = showPaymentAnimation;
    cartPanel.appendChild(checkoutBtn);
}

document.addEventListener("DOMContentLoaded", setupCartModal);

// Функція для візуалізації процесу оплати
function showPaymentAnimation() {
    let cartPanel = document.getElementById("cart-panel");
    cartPanel.innerHTML = "<h2>⏳ Обробка платежу...</h2>";
    let loader = document.createElement("div");
    loader.classList.add("loader");
    loader.style.width = "50px";
    loader.style.height = "50px";
    loader.style.border = "5px solid #fff";
    loader.style.borderTop = "5px solid transparent";
    loader.style.borderRadius = "50%";
    loader.style.animation = "spin 1s linear infinite";
    loader.style.margin = "20px auto";
    cartPanel.appendChild(loader);
    
    let catGif = document.createElement("img");
    catGif.src = "https://i.gifer.com/ZVmP.gif";
    catGif.style.width = "200px";
    catGif.style.marginTop = "15px";
    cartPanel.appendChild(catGif);
    
    setTimeout(() => {
        cartPanel.innerHTML = "<h2>✅ Оплата успішна! Дякуємо за покупку! 🎉</h2>";
        cartPanel.style.background = "#4CAF50";
        cartPanel.style.color = "#fff";
        cartPanel.appendChild(catGif);
        
        setTimeout(() => {
            cartPanel.style.display = "none";
            document.getElementById("overlay").style.display = "none";
            clearCart();
        }, 5000);
    }, 5000);
}

// Додаємо анімацію для спінера
let style = document.createElement("style");
style.innerHTML = "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
document.head.appendChild(style);


// Функція для відкриття збільшеного фото товару
function openFullscreen(imageSrc, title, description) {
    let modal = document.getElementById("fullscreen-modal");
    let img = document.getElementById("fullscreen-img");
    let productTitle = document.getElementById("product-title");
    let productDescription = document.getElementById("product-description");

    img.src = imageSrc;
    productTitle.textContent = title;
    productDescription.textContent = description;

    modal.style.display = "flex";
}

// Функція для закриття модального вікна
function closeFullscreen() {
    let modal = document.getElementById("fullscreen-modal");
    modal.style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            category: "Чоловіки",
            items: [
                { img: "img1.jpg", name: "Куртка", desc: "Зимова тепла куртка" },
                { img: "img2.jpg", name: "Штани", desc: "Зручні спортивні штани" },
                { img: "img3.jpg", name: "Кросівки", desc: "Зручні трекінгові кросівки" }
            ]
        },
        {
            category: "Жінки",
            items: [
                { img: "img4.jpg", name: "Куртка жіноча", desc: "Легка та тепла куртка" },
                { img: "img5.jpg", name: "Легінси", desc: "Еластичні спортивні легінси" },
                { img: "img6.jpg", name: "Кросівки жіночі", desc: "Зручне спортивне взуття" }
            ]
        },
        {
            category: "Рюкзаки",
            items:[
                { img: "data:image/jpeg;base64,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", name: "Рюкзак туристичний", desc: "Місткий рюкзак для походів" },
                { img: "img8.jpg", name: "Рюкзак міський", desc: "Легкий рюкзак для міста" },
                { img: "img9.jpg", name: "Рюкзак водонепроникний", desc: "Рюкзак для екстремальних умов" }
            ]
        }
    ];

    const main = document.querySelector("main");

    products.forEach(category => {
        const section = document.createElement("section");
        const title = document.createElement("h1");
        title.textContent = category.category;
        section.appendChild(title);

        const grid = document.createElement("div");
        grid.classList.add("grid-container");

        category.items.forEach(product => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("div1");
            itemDiv.onclick = () => openFullscreen(product.img, product.name, product.desc);

            const img = document.createElement("img");
            img.src = product.img;
            img.alt = product.name;

            const nameSpan = document.createElement("span");
            nameSpan.textContent = product.name;

            const button = document.createElement("button");
            button.textContent = "Додати у кошик";
            button.onclick = (event) => {
                event.stopPropagation();
                addToCart(product.name);
            };

            itemDiv.appendChild(img);
            itemDiv.appendChild(nameSpan);
            itemDiv.appendChild(button);
            grid.appendChild(itemDiv);
        });

        section.appendChild(grid);
        main.appendChild(section);
    });
});






document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll('#itemList li');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = ''; // Покажемо елемент
        } else {
            item.style.display = 'none'; // Сховаємо елемент
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const cart = document.querySelector(".cart-icon");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsContainer = document.querySelector(".cart-items");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            const product = event.target.closest(".product");
            const productName = product.querySelector(".product-name").textContent;
            
            // Створюємо літачок
            const flyer = document.createElement("div");
            flyer.classList.add("flyer");
            document.body.appendChild(flyer);
            
            // Отримуємо позиції кнопки та кошика
            const buttonRect = button.getBoundingClientRect();
            const cartRect = cart.getBoundingClientRect();

            flyer.style.left = `${buttonRect.left + window.scrollX}px`;
            flyer.style.top = `${buttonRect.top + window.scrollY}px`;
            
            // Додаємо анімацію
            flyer.animate(
                [
                    { transform: `translate(0, 0)`, opacity: 1 },
                    { transform: `translate(${cartRect.left - buttonRect.left}px, ${cartRect.top - buttonRect.top}px)`, opacity: 0 }
                ],
                {
                    duration: 1000,
                    easing: "ease-in-out",
                    fill: "forwards"
                }
            ).onfinish = function () {
                flyer.remove();
                addToCart(productName);
            };
        });
    });

    function addToCart(productName) {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.textContent = productName;
        cartItemsContainer.appendChild(cartItem);
    }
});

