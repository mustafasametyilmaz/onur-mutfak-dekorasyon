document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("productModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const modalSpecs = document.getElementById("modalSpecs");
    const modalMaterial = document.getElementById("modalMaterial");
    const modalColor = document.getElementById("modalColor");
    const closeBtn = document.querySelector(".close-modal");
    const modalWa = document.querySelector(".modal-wa");

    const products = {
        restorasyon: { 
            title: "Restorasyon Çalışması", 
            price: "100.000 TL", 
            specs: "Projeye Göre Özel", 
            material: "Antika Ahşap / El İşçiliği", 
            color: "Ceviz Eskitme",
            img: "emreabiberber.png" 
        },
        mutfak: { 
            title: "Mutfak Dolabı", 
            price: "50.000 TL", 
            specs: "320 x 60 x 240 cm", 
            material: "Akrilik Panel / Blum Aksesuar", 
            color: "Parlak Beyaz & Meşe",
            img: "mutfak.png" 
        },
        mustafa: { 
            title: "HİGH LEVEL HUMAN", 
            price: "Paha Biçilemez", 
            specs: "Sınırsız Kapasite", 
            material: "Premium Soul", 
            color: "Original",
            img: "mustafa.jpg" 
        }
    };

    document.querySelectorAll(".detail-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.closest(".product-card").dataset.product;
            const p = products[id];
            
            if(p) {
                modalTitle.innerText = p.title;
                modalPrice.innerText = p.price;
                modalSpecs.innerText = p.specs;
                modalMaterial.innerText = p.material;
                modalColor.innerText = p.color;
                modalImg.src = p.img;
                
                modalWa.href = `https://wa.me/905551543081?text=${encodeURIComponent(p.title)} hakkında bilgi almak istiyorum.`;
                modal.style.display = "flex";
            }
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }
});