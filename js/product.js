const rating = document.querySelector(".main-product-container-head-btn-s");
const ratingItem = document.querySelector(".main-product-list-order-az");
const btnChnage = document.querySelector(".change");
const btnChnageSec = document.querySelector(".change2");
const chnage = document.querySelector(".change");
const main = document.querySelector(".main-product-container");
const hideBtn = document.querySelector(".fas.fa-list-ul");
const hideBtnSec = document.querySelector(".fas.fa-th-large");
const productListItem = document.querySelector(".product-pic-about-list-item");
const dataBorder = document.querySelector(".data-border");

const prevScrolling = document.querySelector("body");
const closeBtn = document.querySelector(".closebtn");
const openBtn = document.querySelector(".openbtn");

openBtn.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "250px";
  prevScrolling.style.overflowY = "hidden";
});

closeBtn.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "0";
  prevScrolling.style.overflowY = "scroll";
});

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");

  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;
  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("hide");
  }

  document.querySelectorAll("[data-dropdown].hide").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("hide");
  });
});

chnage.addEventListener("click", () => {
  main.classList.toggle("main-max");
  hideBtn.classList.toggle("appare");
  hideBtnSec.classList.toggle("disp");
});

var lastScrollTop = 0;

const aside = document.querySelector(".aside");

// element should be replaced with the actual target element on which you have applied scroll
window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // downscroll code
      aside.classList.add("move");
    } else {
      // upscroll code
      aside.classList.remove("move");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);

const products = [
  {
    htmlHref: "/html/about-product/product-desc-maxi-format.html",
    imageSrc: "/images/adamu.jpg",
    name: "Dash Liquid ",
    description: "Dash Liquid Washing Machine Detergent",
    price: "/html/pages/contact.html" ,
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-dash-colored-garments.html",
    imageSrc: "/html/../images/dash-colored.jpg",
    name: "Dash Liquid ",
    description: "Dash Liquid Washing Machine Detergent",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/prduct-desc-lenor-lavander.html",
    imageSrc: "/html/../images/lenor-lavander.jpg",
    name: "Lenor ",
    description: "Lenor Concentrated Washing Machine Softener",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-lenor-scarlet.html",
    imageSrc: "/html/../images/lenor-scarlet.jpg",
    name: "Lenor Scarlet Jasmine Softener",
    description: "Lenor Scarlet Jasmine Softener, Maxi Format of 70 Washes",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-lenor-concentrated.html",
    imageSrc: "/html/../images/lenor-concentrated.jpg",
    name: "Lenor ",
    description: "Lenor Concentrated Washing Machine Softener, ",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-lenor-emerald.html",
    imageSrc: "/html/../images/lenor-emerald.jpg",
    name: "Lenor Emerald",
    description: "Lenor - Emerald and Ivory Flowers",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-lenor-vanila-flowers.html",
    imageSrc: "/html/../images/lenor-vanila-flowers.jpg",
    name: "Lenor Vanila Flowers",
    description: "Lenor Concentrated Washing Machine Softener",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-lenor-awakening.html",
    imageSrc: "/html/../images/lenor-awakening.jpg",
    name: "Lenor Spring Awakening  ",
    description: "Lenor Concentrated Washing Machine Softene",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-lenor-diamond.html",
    imageSrc: "/html/../images/lenor-dimond.jpg",
    name: "Lenor Diamond ",
    description: "Lenor concentrated softener Diamond and Lotus Flower",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-dash-lavander.html",
    imageSrc: "/html/../images/dash-lavander.jpg",
    name: "Dash Lavender",
    description: "Dash Liquid Washing Machine Detergent",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-ace-classic.html",
    imageSrc: "/html/../images/ace-classic.jpg",
    name: "Ace Classic ",
    description: "Ace Classic Sanitizing Laundry Detergent 25 Lav",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-ace-liquid.html",
    imageSrc: "/html/../images/ace-liquid.jpg",
    name: "ACE ",
    description: "ACE - LIQUID DETERGENT ",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-ace-aromatherapy.html",
    imageSrc: "/html/../images/ace-aromatherapy.jpg",
    name: "ACE Aromatherapy ",
    description: "ACE Aromatherapy Energy Detergent",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-bio-presto.html",
    imageSrc: "/html/../images/bio-presto.jpg",
    name: "Bio Presto ",
    description: "Bio Presto 19 Wash Liquid Laundry Detergent",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-bio-presto-colored.html",
    imageSrc: "/html/../images/bio-presto-colored.png",
    name: "Bio Presto ",
    description: "Bio Presto for Colored Garments ",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-bio-presto-aromatherapy.html",
    imageSrc: "/html/../images/bio-presto-aromatherapy.png",
    name: "Bio Presto Aromatherapy ",
    description: "Bio Presto Liquid",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-bio-presto-easy.html",
    imageSrc: "/html/../images/bio-presto-easy.jpg",
    name: "Bio Presto Easy Iron ",
    description: "Bio Presto Easy Iron Liquid Detergent",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-sole-bianco.html",
    imageSrc: "/html/../images/bianco.jpg",
    name: "Sole Bianco ",
    description: "Sole Bianco Shining Liquid Laundry Detergent ",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-sole-smacchiante.html",
    imageSrc: "/html/../images/sole-smacchiante.jpg",
    name: "Potere Smacchiante",
    description: "Sole Liquid Laundry Detergent",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-sole-lavanda.html",
    imageSrc: "/html/../images/sole-lavanda.jpg",
    name: "Sole Lavanda ",
    description: "Sole Lavanda Liquid Detergent ",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-sole-protected.html",
    imageSrc: "/html/../images/sole-protected.jpg",
    name: "Sole Protected ",
    description: "Sole Protected and Brilliant Colors",
    price: "/html/pages/contact.html",
    category:"liquid-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-chanteclair-spray.html",
    imageSrc: "/html/../images/chanteclair-spray.jpg",
    name: "Chanteclair Degreaser  ",
    description: "Chanteclair Degreaser with Bleach",
    price: "/html/pages/contact.html",
    category:"degreaser",
  },
  {
    htmlHref: "/html/about-product/product-desc-chanteclair-universal.html",
    imageSrc: "/html/../images/chanteclair-universal.jpg",
    name: "Chanteclair  Lavender",
    description: "Chanteclair Universal Degreaser",
    price: "/html/pages/contact.html",
    category:"degreaser",
  },
  {
    htmlHref: "/html/about-product/product-desc-chanteclair-lemon.html",
    imageSrc: "/html/../images/chanteclair-lemon.jpg",
    name: "Chanteclair Lemon ",
    description: "Chanteclair, Universal Degreaser Lemon ",
    price: "/html/pages/contact.html",
    category:"degreaser",
  },
  {
    htmlHref: "/html/about-product/product-desc-finish-dishwasher.html",
    imageSrc: "/html/../images/finish-dishwasher.jpg",
    name: "Finish Dishwasher  ",
    description: "Finish Dishwasher Care Lemon",
    price: "/html/pages/contact.html",
    category:"dishwasher",
  },
  {
    htmlHref: "/html/about-product/product-desc-finish-blue.html",
    imageSrc: "/html/../images/finish-blue.png",
    name: "Finish Dishwasher  ",
    description: "Finish Dishwasher Additive ",
    price: "/html/pages/contact.html",
    category:"dishwasher",
  },
  {
    htmlHref: "/html/about-product/product-desc-ajax-clasico.html",
    imageSrc: "/html/../images/ajax-clasico.jpg",
    name: "Ajax Classico ",
    description: "Ajax Classico- Universal Degreaser 950ml.",
    price: "/html/pages/contact.html",
    category:"degreaser",
  },
  {
    htmlHref: "/html/about-product/product-desc-ajax-expel.html",
    imageSrc: "/html/../images/ajax-expel.jpg",
    name: "Ajax Expel",
    description: "AJAX EXPEL 1.35 LT. NEW MAXI SIZE",
    price: "/html/pages/contact.html",
    category:"parquet-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-ajax-almond.html",
    imageSrc: "/html/../images/ajax-almond.jpg",
    name: "Ajax Almond Wood ",
    description: "Ajax Almond Wood and Parquet Cleaner, 950 ml",
    price: "/html/pages/contact.html",
    category:"parquet-detergent",
  },
  {
    htmlHref: "/html/about-product/product-desc-svelto-lemon.html",
    imageSrc: "/html/../images/svelto-lemon.jpg",
    name: "Svelto Lemon ",
    description: "Svelto Hand Dishwashing Detergent with Lemon, 1L",
    price: "/html/pages/contact.html",
    category:"hand-dishwashing",
  },
  {
    htmlHref: "/html/about-product/product-desc-svelto-classic.html",
    imageSrc: "/html/../images/svelto-classic.jpg",
    name: "Svelto  Classic ",
    description: "Svelto Hand Dishwashing Detergent Classic",
    price: "/html/pages/contact.html",
    category:"hand-dishwashing",
  },
  {
    htmlHref: "/html/about-product/product-desc-tempo-clasico.html",
    imageSrc: "/html/../images/tempo-clasico.jpg",
    name: "Tempo Classic  ",
    description: "Tempo Classic Pocket Tissue Packs",
    price: "/html/pages/contact.html",
    category:"handkerchiefs",
  },
  {
    htmlHref: "/html/about-product/product-desc-shampoo-coconut.html",
    imageSrc: "/html/../images/shampoo-coconut.jpg",
    name: "Shampoo  Coconut  ",
    description: "Set 12 Dimension Shampoo ",
    price: "/html/pages/contact.html",
    category:"shampoo",
  },
  {
    htmlHref: "/html/about-product/product-desc-shampoo-avocado.html",
    imageSrc: "/html/../images/shampoo-avocado.jpg",
    name: "Shampoo Oil Shampoo    ",
    description: "Dimension Avocado Oil Shampoo ",
    price: "/html/pages/contact.html",
    category:"shampoo",
  },
  {
    htmlHref: "/html/about-product/product-desc-shampoo-chamomile.html",
    imageSrc: "/html/../images/shampoo-chamomile.jpg",
    name: "Shampoo Chamomile    ",
    description: "Shampoo With New Chamomile Extracts ",
    price: "/html/pages/contact.html",
    category:"shampoo",
  },
  {
    htmlHref: "/html/about-product/product-desc-shampoo-dry.html",
    imageSrc: "/html/../images/shampoo-dry.jpg",
    name: "Shampoo 2in1 Dry Hair     ",
    description: "Dimension Shampoo 2IN1 Dry Hair  ",
    price: "/html/pages/contact.html",
    category:"shampoo",
  },
  {
    htmlHref: "/html/about-product/product-desc-shampoo-green-fat.html",
    imageSrc: "/html/../images/shampoo-green-fat.jpg",
    name: "Shampoo 2-1 Green Fat      ",
    description: "Dimension Shampoo 2-1 Green Fat 250 Ml  ",
    price: "/html/pages/contact.html",
    category:"shampoo",
  },
  {
    htmlHref: "/html/about-product/product-desc-shampoo-yellow-straight.html",
    imageSrc: "/html/../images/yellow-straight.jpg",
    name: "Shampoo 2-1 Yellow Straight      ",
    description: "Dimension Shampoo 2-1 Yellow Straight   ",
    price: "/html/pages/contact.html",
    category:"shampoo",
  },
  {
    htmlHref: "/html/about-product/product-desc-shampoo-sunsilk.html",
    imageSrc: "/html/../images/shampoo-sunsilk.jpg",
    name: "Hair Conditioner Sunsilk      ",
    description: "Sunsilk Smooth Perfect Conditioner  ",
    price: "/html/pages/contact.html",
    category:"hair-conditioner",
  },
  {
    htmlHref: "/html/about-product/product-desc-hair-conditioner-curly.html",
    imageSrc: "/html/../images/hair-conditioner-curly.jpg",
    name: "Hair Conditioner Curly Hair     ",
    description: "Sunsilk Ricci Da Domare for Curly Hair  ",
    price: "/html/pages/contact.html",
    category:"hair-conditioner",
  },
  {
    htmlHref: "/html/about-product/product-desc-shampoo-sunsilk-light.html",
    imageSrc: "/html/../images/shampoo-sunsilk-light.jpg",
    name: "Shampoo Sunsilk      ",
    description: "SUNSILK Sparks of Light ",
    price: "/html/pages/contact.html",
    category:"shampoo",
  },
  {
    htmlHref: "/html/about-product/product-desc-conditioner-vibrant.html",
    imageSrc: "/html/../images/conditioner-vibrant.jpg",
    name: "Sunslik Vibrant Color   ",
    description: "SUNSILK Vibrant Color, Conditioner  ",
    price: "/html/pages/contact.html",
    category:"hair-conditioner",
  },
  {
    htmlHref: "/html/about-product/product-desc-deodorant-triple.html",
    imageSrc: "/html/../images/deodorant-triple.jpg",
    name: "Infasil Neutro Deospray ",
    description: "Infasil Neutro Deospray Triple Protection  ",
    price: "/html/pages/contact.html",
    category:"deodorant",
  },
  {
    htmlHref: "/html/about-product/product-desc-infasil-active.html",
    imageSrc: "/html/../images/infasil-active.jpg",
    name: "Infasil Active     ",
    description: "Infasil Active Freshness Deodorant Spray  ",
    price: "/html/pages/contact.html",
    category:"deodorant",
  },
  {
    htmlHref: "/html/about-product/product-desc-infasil-freshness.html",
    imageSrc: "/html/../images/infasil-freshness.jpg",
    name: "Infasil Freshness      ",
    description: "Infasil Freshness Bouquet Deodorant Spray",
    price: "/html/pages/contact.html",
    category:"deodorant",
  },
  {
    htmlHref: "/html/about-product/product-desc-infasil-delicate.html",
    imageSrc: "/html/../images/infasil-delicate.jpg",
    name: "Infasil Extra Delicate      ",
    description: "Infasil Extra Delicate Neutral Deodorant Spray",
    price: "/html/pages/contact.html",
    category:"deodorant",
  },
  {
    htmlHref: "/html/about-product/product-desc-infasil-man.html",
    imageSrc: "/html/../images/infasil-man.jpg",
    name: "Infasil Deodorant Spray Man      ",
    description: "INFASIL Deodorant Spray Man Save SHIRTS",
    price: "/html/pages/contact.html",
    category:"deodorant",
  },
  {
    htmlHref: "/html/about-product/product-desc-felce-azzurra.html",
    imageSrc: "/html/../images/felce-azzurra.jpg",
    name: "Felce Azzurra ",
    description: "Felce Azzurra - Talc Fresh Jar",
    price: "/html/pages/contact.html",
    category:"talcum-powder",
  },
  {
    htmlHref: "/html/about-product/product-desc-body-powder.html",
    imageSrc: "/html/../images/body-powder.jpg",
    name: "Blue Fern Body Powder  ",
    description: "Blue Fern Body Powder Beutel",
    price: "/html/pages/contact.html",
    category:"talcum-powder",
  },
  {
    htmlHref: "/html/about-product/product-desc-pampers-dry.html",
    imageSrc: "/html/../images/pampers-dry.jpg",
    name: "Pampers Baby Dry Mini ",
    description: " Pampers Baby Dry Mini ",
    price: "/html/pages/contact.html",
    category:"pempers",
  },
  {
    htmlHref: "/html/about-product/product-desc-pampers-midi.html",
    imageSrc: "/html/../images/pampers-midi.jpg",
    name: "Pampers Progressi Midi ",
    description: " Pampers  Progressi Midi ",
    price: "/html/pages/contact.html",
    category:"pempers",
  },
  {
    htmlHref: "/html/about-product/product-desc-pampers-maxi.html",
    imageSrc: "/html/../images/pampers-maxi.jpg",
    name: "Pampers Progressi Maxi ",
    description: " Pampers  Progressi Maxi ",
    price: "/html/pages/contact.html",
    category:"pempers",
  },
  {
    htmlHref: "/html/about-product/product-desc-pampers-protection.html",
    imageSrc: "/html/../images/pampers-protection.jpg",
    name: "Pampers Premium  ",
    description: " Pampers  Premium Protection Pants ",
    price: "/html/pages/contact.html",
    category:"pempers",
  },
  {
    htmlHref: "/html/about-product/product-desc-plastic-dishes.html",
    imageSrc: "/html/../images/plastic-dishes.jpg",
    name: "Plastic Dishes",
    description: "Plastic Dishes",
    price: "/html/pages/contact.html",
    category:"",
  },
  {
    htmlHref: "/html/about-product/product-desc-plastic-glasses.html",
    imageSrc: "/html/../images/plastic-glasses.jpg",
    name: "Plastic Glasses ",
    description: "Plastic Glasses ",
    price: "/html/pages/contact.html",
    category: "",
  },
  {
    htmlHref: "/html/about-product/product-desc-coffe.html",
    imageSrc: "/html/../images/coffe.png",
    name: "Caffè ",
    description: " ",
    price: "/html/pages/contact.html",
    category: "",
    class:"coffe"
  },
];

// AFISARE PRODUSE
const container = document.getElementById("product-content");

function productDisplay(listItems) {
  listItems.map((product) => {
    let productHtmlStructure = `<div class="product-item" href="${product.htmlHref}" name="${product.name}">
                 <a href="${product.htmlHref}">
                    <div class="product-image">            
                    <img
                        src="${product.imageSrc}"
                        alt=""
                        class="${product.class}"
                    />
                    </div>
                    <div class="product-item-content">
                    <p class="product-name">
                        ${product.name}
                      </p>
                    <p class="product-para">
                        ${product.description}
                      </p>
                      <a class="product-btn" href="${product.htmlHref}" >View product </a>
                    
                    </div>

                  </div>`;
    container.insertAdjacentHTML("beforeend", productHtmlStructure);
  });
}
productDisplay(products);

// SORTARE PRODUSE

const sortButton = Array.from(document.getElementsByClassName("sort-item"));

sortButton.forEach((element) => {
  const thisElemenent = element;
  element.addEventListener("click", () => {
    const firstCond = JSON.parse(thisElemenent.getAttribute("rel-data")).first;
    const secondCond = JSON.parse(
      thisElemenent.getAttribute("rel-data")
    ).second;

    products.sort((a, b) => {
      let fa = a.name.toLowerCase();
      let fb = b.name.toLowerCase();
      if (firstCond == "increase" ? fa > fb : fa < fb) {
        return -1;
      }
      if (firstCond == "increase" ? fa > fb : fa < fb) {
        return 1;
      }
      return 0;
    });
    document.getElementById("product-content").innerHTML = "";
    productDisplay(products);
  });
});

// FILTRARE PRODUSE

let productsFiltered = [];
const filterButton = Array.from(
  document.getElementsByClassName("aside-list-item")
);

filterButton.forEach((element) => {
  const thisElemenent = element;
  element.addEventListener("click", (e) => {
    e.preventDefault();
    productsFiltered = [];
    const category = thisElemenent.getAttribute("rel-category");

    for (product of products) {
      if (product.category == category) {
        productsFiltered.push(product);
      }
    }

    document.getElementById("product-content").innerHTML = "";
    productDisplay(productsFiltered);
  });
});
