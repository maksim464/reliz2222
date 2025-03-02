 let cart = [];
    const products = [
        {
            category: "Чоловіки",
            items: [
                { img: "https://borec.in.ua/5463-medium_default/kurtka-manto-winter-jacket-alpha.jpg", name: "Куртка", desc: "Зимова тепла куртка" },
                { img: "https://fahrenheit.ua/files/products/4x7a3262.1000x1000.jpg", name: "Штани", desc: "Зручні спортивні штани" },
                { img: "https://image-thumbs.shafastatic.net/271573208_310_430", name: "Кросівки", desc: "Зручні трекінгові кросівки" }
            ]
        },
        {
            category: "Жінки",
            items: [
                { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNEiaUxYG65nPg8N5ckeZbu6ZYmj7gokx58w&s", name: "Куртка жіноча", desc: "Легка та тепла куртка" },
                { img: "https://giulia.com.ua/image/catalog/sport/legginsy/LEGGINGS-02-nero.jpg", name: "Легінси", desc: "Еластичні спортивні легінси" },
                { img: "https://ireland.apollo.olxcdn.com/v1/files/c8i2pcpzttrk-UA/image;s=1000x671", name: "Кросівки жіночі", desc: "Зручне спортивне взуття" }
            ]
        },
        {
            category: "Рюкзаки",
            items:[
                { img: "https://balistyka.ua/image/cache/catalog/image/cache/catalog/easyphoto/1600/taktichniy-ryukzak-r1m1-26l-bal-stika-oliva-700x700.webp", name: "Рюкзак туристичний", desc: "Місткий рюкзак для походів" },
                { img: "https://cdn.27.ua/sc--media--prod/default/32/63/e2/3263e23e-a16d-4507-bff4-07dc23e6bb2b.jpg", name: "Рюкзак міський", desc: "Легкий рюкзак для міста" },
                { img: "https://hedgren.com.ua/image/cache/catalog/product/HCOM0516301/hcom05_163_01_2-1000x1000.jpg", name: "Рюкзак водонепроникний", desc: "Рюкзак для екстремальних умов" }
            ]
        }
    ];

   
    function addToCart(productName) {
        cart.push(productName);
        updateCartUI();
    }

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

    
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartUI();
    }

    
    function clearCart() {
        cart = [];
        updateCartUI();
    }

   
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

    
    function closeFullscreen() {
        let modal = document.getElementById("fullscreen-modal");
        modal.style.display = "none";
    }

    
    document.getElementById('search').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        console.log(searchTerm)
        const productCards = document.querySelectorAll('#products-container div'); 
        console.log(productCards)

        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase(); // Назва товару
            const productDesc = card.querySelector('p').textContent.toLowerCase(); // Опис товару

            
            if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none'; 
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
                
                
                const flyer = document.createElement("div");
                flyer.classList.add("flyer");
                document.body.appendChild(flyer);
                
                
                const buttonRect = button.getBoundingClientRect();
                const cartRect = cart.getBoundingClientRect();

                flyer.style.left = `${buttonRect.left + window.scrollX}px`;
                flyer.style.top = `${buttonRect.top + window.scrollY}px`;
                
               
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
    
    function showPaymentAnimation() {
        let cartPanel = document.getElementById("cart-panel");
        let overlay = document.getElementById("overlay");
        let paymentModal = document.getElementById("payment-modal");
        
        cartPanel.style.display = "none";  
        overlay.style.display = "none";   
        paymentModal.style.display = "none"; 

       
        let loader = document.getElementById("loader");
        loader.style.display = "flex";

        
        setTimeout(() => {
            loader.style.display = "none"; 
            showOrderSuccess(); 
        }, 3000);
    }

    
    function showOrderSuccess() {
        let orderSuccess = document.getElementById("order-success");
        orderSuccess.style.display = "block";
    }

    
    function closeOrderSuccess() {
        let orderSuccess = document.getElementById("order-success");
        orderSuccess.style.display = "none";
        clearCart(); 
    }

   
    function closePaymentModal() {
        let paymentModal = document.getElementById("payment-modal");
        paymentModal.style.display = "none";
    }

   
    document.getElementById("payment-form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Оплата виконана! Дякуємо за покупку!");
        closePaymentModal();
    });

    
    function updateCartUI() {
        let cartList = document.getElementById("cart-items");
        let cartCount = document.getElementById("cart-count");
        let checkoutBtn = document.getElementById("checkout-btn");
        
        cartList.innerHTML = "";
        
        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = item;
            li.classList.add("cart-item");
            li.style.fontSize = "18px";
            li.style.marginBottom = "15px";
            li.style.padding = "10px";
            li.style.borderRadius = "10px";
            li.style.backgroundColor = "#f9f9f9";
            li.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
            
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "❌";
            removeBtn.classList.add("remove-btn");
            removeBtn.style.marginLeft = "10px";
            removeBtn.style.backgroundColor = "#ff6347";
            removeBtn.style.color = "#fff";
            removeBtn.style.border = "none";
            removeBtn.style.padding = "5px 10px";
            removeBtn.style.borderRadius = "8px";
            removeBtn.style.cursor = "pointer";
            removeBtn.style.transition = "background-color 0.3s ease";
            
            removeBtn.onclick = function () {
                removeFromCart(index);
            };
            
            removeBtn.onmouseover = function () {
                removeBtn.style.backgroundColor = "#ff4500";
            };
            
            removeBtn.onmouseout = function () {
                removeBtn.style.backgroundColor = "#ff6347";
            };
            
            li.appendChild(removeBtn);
            cartList.appendChild(li);
        });

        cartCount.textContent = cart.length;
        checkoutBtn.style.display = cart.length > 0 ? "block" : "none";
    }


    // Стилізація продуктів
    function displayProducts() {
        const productsContainer = document.getElementById("products-container");
        productsContainer.innerHTML = ''; // clear container

        products.forEach(category => {
            const categoryTitle = document.createElement("h2");
            categoryTitle.textContent = category.category;
            categoryTitle.style.fontSize = "24px";
            categoryTitle.style.marginBottom = "15px";
            categoryTitle.style.color = "#333";
            
            productsContainer.appendChild(categoryTitle);

            category.items.forEach(item => {
                const productCard = document.createElement("div");
                productCard.classList.add('product-card')
                const productContent = document.createElement("div");
                productCard.onmouseover = function () {
                    productCard.style.transform = "scale(1.05)";
                };
                productCard.onclick=function (){
                    openFullscreen(item.img,item.name,item.desc)
                }
                
                productCard.onmouseout = function () {
                    productCard.style.transform = "scale(1)";
                };

                const productImage = document.createElement("img");
                productImage.src = item.img;
                productImage.alt = item.name;
            

                const productName = document.createElement("h3");
                productName.textContent = item.name;
       
                
                const productDesc = document.createElement("p");
                productDesc.textContent = item.desc;
          

                const addToCartBtn = document.createElement("button");
                addToCartBtn.textContent = "🛒 Додати до кошика";
     
                
                addToCartBtn.onmouseover = function () {
                    addToCartBtn.style.backgroundColor = "#0056b3";
                };
                
                addToCartBtn.onmouseout = function () {
                    addToCartBtn.style.backgroundColor = "#007bff";
                };
                addToCartBtn.addEventListener('click',(e)=>{
                    e.stopImmediatePropagation()
                
                    addToCart(item.name);
                })

                productCard.appendChild(productImage);
                productCard.appendChild(productContent);
                productContent.appendChild(productName);
                productContent.appendChild(productDesc);
              
                productContent.appendChild(addToCartBtn);
                
                productsContainer.appendChild(productCard);
            });
        });
    }

    
    document.addEventListener("DOMContentLoaded", displayProducts);
