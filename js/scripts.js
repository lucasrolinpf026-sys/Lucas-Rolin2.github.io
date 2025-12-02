document.addEventListener("DOMContentLoaded", () => {

    const productImages = document.querySelectorAll(".grid img");
    const carousel = document.querySelector(".carousel");

    if (productImages.length === 0) return;

    // Colocar apenas as imagens no carrossel
    productImages.forEach(img => {
        const clone = img.cloneNode(true);
        carousel.appendChild(clone);
    });

    let index = 0;

    function showSlide(i) {
        const total = productImages.length;
        index = (i + total) % total;
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }

    // Botões
    document.querySelector(".prev").onclick = () => showSlide(index - 1);
    document.querySelector(".next").onclick = () => showSlide(index + 1);

    // NÃO TEM autoplay!
});

function addCarrinho(produto) {
    alert(produto + " foi adicionado ao carrinho!");
}



