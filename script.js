// ========================================
// SELETOR RESIDENCIAIS / TURBINADOS
// ========================================

const switchButtons = document.querySelectorAll(".switch-button");

const residentialPlans = document.querySelector(".residential-plans");

const turboPlans = document.querySelector(".turbo-plans");


switchButtons.forEach(button => {

    button.addEventListener("click", () => {

        switchButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;


        if (category === "turbo") {

            residentialPlans.style.display = "none";

            turboPlans.classList.add("active");

        } else {

            residentialPlans.style.display = "grid";

            turboPlans.classList.remove("active");

        }

    });

});


// ========================================
// SELETOR ONETV PLUS / PREMIERE FC
// ========================================

const tvOptions = document.querySelectorAll(".tv-option");

const turboPrices = document.querySelectorAll(".turbo-card .price-value");

const turboTvNames = document.querySelectorAll(".turbo-card .turbo-tv");


// Preços dos planos
const pricesPlus = [
    "104,99",
    "114,99",
    "124,99",
    "144,99"
];

const pricesPremiere = [
    "114,99",
    "124,99",
    "134,99",
    "154,99"
];


tvOptions.forEach(option => {

    option.addEventListener("click", () => {

        // Remove o destaque dos dois botões
        tvOptions.forEach(btn => {
            btn.classList.remove("active");
        });

        // Ativa o botão clicado
        option.classList.add("active");


        const tvType = option.dataset.tv;


        // ONE TV PLUS
        if (tvType === "plus") {

            turboPrices.forEach((price, index) => {

                price.textContent = pricesPlus[index];

            });

            turboTvNames.forEach(tv => {

                tv.textContent = "OneTV Plus";

            });


        // ONE TV PLUS + PREMIERE
        } else {

            turboPrices.forEach((price, index) => {

                price.textContent = pricesPremiere[index];

            });

            turboTvNames.forEach(tv => {

                tv.textContent = "OneTV Plus + Premiere FC";

            });

        }

    });

});

// ========================================
// BOTÕES DOS PLANOS → WHATSAPP
// ========================================

const planButtons = document.querySelectorAll(".plan-button");

planButtons.forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const card = this.closest(".plan-card");

        if (!card) return;


        // ========================================
        // VELOCIDADE
        // ========================================

        const speedElement = card.querySelector(".plan-speed");

        const speed = speedElement
            ? speedElement.textContent.trim()
            : "";


        // ========================================
        // NOME DO PLANO
        // ========================================

        const planElement = card.querySelector("h3");

        const plan = planElement
            ? planElement.textContent.trim()
            : "";


        // ========================================
        // PREÇO
        // ========================================

        const priceElement = card.querySelector(".price-value");

        let price;

        // TURBINADOS
        if (priceElement) {

            price = `R$ ${priceElement.textContent.trim()}`;

        } 
        
        // RESIDENCIAIS
        else {

            const priceContainer = card.querySelector(".plan-price");

            if (priceContainer) {

                price = priceContainer.innerText
                    .replace(/\s+/g, " ")
                    .trim();

            }

        }


        // ========================================
        // PACOTE ONETV
        // ========================================

        let tv = "";

        const turboTv = card.querySelector(".turbo-tv");

        if (turboTv) {

            tv = turboTv.textContent.trim();

        } else {

            const planTv = card.querySelector(".plan-tv");

            if (planTv) {

                tv = planTv.textContent
                    .replace("Inclui", "")
                    .replace(/\s+/g, " ")
                    .trim();

            }

        }


        // ========================================
        // MENSAGEM
        // ========================================

        let message =
            `Olá! Tenho interesse no plano ${plan} ${speed}, no valor de ${price}.`;

        if (tv) {

            message += ` O pacote inclui ${tv}.`;

        }

        message +=
            ` Gostaria de saber mais informações!`;


        // ========================================
        // WHATSAPP
        // ========================================

        const whatsappNumber = "556720200707";

        const whatsappUrl =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        window.open(whatsappUrl, "_blank");

    });

});

// ========================================
// SELETOR DOS PACOTES ONETV
// ========================================

const onetvOptions = document.querySelectorAll(".onetv-option");
const onetvPackages = document.querySelectorAll(".onetv-package");

onetvOptions.forEach(option => {

    option.addEventListener("click", () => {

        // Remove o destaque dos botões
        onetvOptions.forEach(button => {
            button.classList.remove("active");
        });

        // Ativa o botão clicado
        option.classList.add("active");

        // Identifica o pacote escolhido
        const packageType = option.dataset.package;

        // Esconde todos os pacotes
        onetvPackages.forEach(packageItem => {
            packageItem.classList.remove("active");
        });

        // Mostra o pacote correspondente
        const selectedPackage = document.querySelector(
            `.onetv-package[data-content="${packageType}"]`
        );

        if (selectedPackage) {
            selectedPackage.classList.add("active");
        }

    });

});

// ========================================
// MODAL GRADE DE CANAIS
// ========================================

const channelButtons = document.querySelectorAll(".onetv-channels-button");

const channelModal = document.querySelector("#channelModal");

const closeChannelModal = document.querySelector("#closeChannelModal");

const channelModalOverlay = document.querySelector(".channel-modal-overlay");


channelButtons.forEach(button => {

    button.addEventListener("click", () => {

        channelModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


function closeChannelWindow() {

    channelModal.classList.remove("active");

    document.body.style.overflow = "";

}


closeChannelModal.addEventListener("click", closeChannelWindow);

channelModalOverlay.addEventListener("click", closeChannelWindow);


// Fechar com ESC

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeChannelWindow();

    }

});

// ========================================
// MENU MOBILE
// ========================================

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mainMenu = document.getElementById("mainMenu");

mobileMenuButton.addEventListener("click", () => {

    mainMenu.classList.toggle("active");

    if (mainMenu.classList.contains("active")) {

        mobileMenuButton.textContent = "✕";

    } else {

        mobileMenuButton.textContent = "☰";

    }

});


// Fecha o menu ao clicar em um link

const mobileMenuLinks = mainMenu.querySelectorAll("a");

mobileMenuLinks.forEach(link => {

    link.addEventListener("click", () => {

        mainMenu.classList.remove("active");

        mobileMenuButton.textContent = "☰";

    });

});

console.log("JavaScript funcionando!");

