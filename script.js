document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("productModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const closeBtn = document.querySelector(".close-modal");
    const modalWa = document.querySelector(".modal-wa");

    const products = {
        ruby: { title: "Ruby Safir Koltuk", price: "52.000 TL", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" },
        oak: { title: "Meşe Yemek Masası", price: "21.000 TL", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" }
    };

    document.querySelectorAll(".detail-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.closest(".product-card").dataset.product;
            const p = products[id];
            modalTitle.innerText = p.title;
            modalPrice.innerText = p.price;
            modalImg.src = p.img;
            // Telefon numarası güncellendi: 905551543081
            modalWa.href = `https://wa.me/905551543081?text=${encodeURIComponent(p.title)} hakkında bilgi almak istiyorum.`;
            modal.style.display = "flex";
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }
});