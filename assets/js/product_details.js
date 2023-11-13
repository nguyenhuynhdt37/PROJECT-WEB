const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const proDuctImg = $('.product--img')
const capacitys = $$('.product__capacity--index')
const priceCurent = $('.price-curent')
const priceOld = $('.price-old')
const carousel = $('.carousel-inner')
const carouselItem = $$('.carousel-item')
const product__colors = $('.product__colors')

const App = {
    prices: [
        { id: '128GB', old: '34.990.000₫', new: '26.990.000₫' },
        { id: '256GB', old: '38.990.000₫', new: '27.990.000₫' },
        { id: '512GB', old: '42.990.000₫', new: '33.990.000₫' },
        { id: '1T', old: '58.990.000₫', new: '48.990.000₫' }
    ],
    img: [
        {
            id: 'black',
            img1: 'https://shopdunk.com/images/thumbs/0018632_space-black_550.jpeg',
            img2: 'https://shopdunk.com/images/thumbs/0018633_space-black_550.jpeg',
            img3: 'https://shopdunk.com/images/thumbs/0018634_space-black_550.jpeg',
            img4: 'https://shopdunk.com/images/thumbs/0018635_space-black_550.jpeg',
            img5: 'https://shopdunk.com/images/thumbs/0018636_space-black_550.jpeg',
            img6: 'https://shopdunk.com/images/thumbs/0018637_space-black_550.jpeg',
            img7: 'https://shopdunk.com/images/thumbs/0018638_space-black_550.jpeg',
            img8: 'https://shopdunk.com/images/thumbs/0018639_space-black_550.jpeg',
        },
        {
            id: 'white',
            img1: 'https://shopdunk.com/images/thumbs/0018642_silver_550.jpeg',
            img2: 'https://shopdunk.com/images/thumbs/0018643_silver_550.jpeg',
            img3: 'https://shopdunk.com/images/thumbs/0018644_silver_550.jpeg',
            img5: 'https://shopdunk.com/images/thumbs/0018646_silver_550.jpeg',
            img6: 'https://shopdunk.com/images/thumbs/0018647_silver_550.jpeg',
            img7: 'https://shopdunk.com/images/thumbs/0018648_silver_550.jpeg',
            img8: 'https://shopdunk.com/images/thumbs/0018649_silver_550.jpeg',
            img4: 'https://shopdunk.com/images/thumbs/0018650_silver_550.jpeg',
        },
        {
            id: 'yellow',
            img1: 'https://shopdunk.com/images/thumbs/0018653_gold_550.jpeg',
            img2: 'https://shopdunk.com/images/thumbs/0018654_gold_550.jpeg',
            img3: 'https://shopdunk.com/images/thumbs/0018655_gold_550.jpeg',
            img4: 'https://shopdunk.com/images/thumbs/0018656_gold_550.jpeg',
            img5: 'https://shopdunk.com/images/thumbs/0018657_gold_550.jpeg',
            img6: 'https://shopdunk.com/images/thumbs/0018658_gold_550.jpeg',
            img7: 'https://shopdunk.com/images/thumbs/0018659_gold_550.jpeg',
            img8: 'https://shopdunk.com/images/thumbs/0018660_gold_550.jpeg'

        },

    ],

    khoidong() {
        var colorItem = $$('.color-item')

            ; (() => {
                const html = this.img.map((img, index) => {
                    if (index === 0) {
                        return (
                            `<li
                class="color-item  p-1 me-2 ${img.id} list-unstyled d-inline-block border border-color border-2">
            </li>`)
                    } else {
                        return (
                            `<li
                class="color-item  p-1 me-2 ${img.id} list-unstyled d-inline-block">
            </li>`)
                    }
                }).join('')
                product__colors.innerHTML = html
            })()
            ; (() => {
                var button = document.querySelector(".btn-scroll-to-top");
                // Khi di chuột xuống gần cuối
                window.onscroll = () => {
                    let scrollTop = document.documentElement.scrollTop;
                    if (scrollTop > 700) {
                        // Hiển thị nút
                        button.style.display = "block";
                    } else {
                        // Ẩn nút
                        button.style.display = "none";
                    }
                }

                // Khi nhấp vào nút
                button.addEventListener("click", function () {
                    // Di chuyển lên đầu
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                });
            })()
            ; var cous = (() => {
                colorItem.forEach((item) => {
                    this.img.forEach((ig => {
                        if (item.classList.contains(ig.id)) {
                            const html = Object.entries(ig).map(([key, value]) => {

                                if (key !== 'id') {
                                    if (key === 'img1') {

                                        return `<div class="carousel-item active">
                                    <img src='${value}' class="d-block w-100" alt="Slide">
                                </div>`;
                                    }
                                    else {
                                        return `<div class="carousel-item">
                                    <img src='${value}' class="d-block w-100" alt="Slide">
                                </div>`;
                                    }
                                }
                            })
                            carousel.innerHTML = html.join('')
                            carouselItem[0].classList.add('active')
                        }
                    }))
                })
            })()

    },


    handleClickBntColor() {
        var colorItem = $$('.color-item')
        buttonCapacity: {
            capacitys.forEach((capacity) => {
                capacity.onclick = () => {
                    capacitys.forEach((capacity1) => {
                        capacity1.classList.remove('active1')
                    })
                    capacity.classList.add('active1')
                    if (capacity.classList.contains('active1')) {
                        this.prices.map((price) => {
                            if (price.id === capacity.innerText) {
                                priceCurent.innerText = price.new
                                priceOld.innerText = price.old
                            }
                        })
                    }
                }
            })
        }
        ; (() => {
            colorItem.forEach((item) => {
                item.onclick = () => {
                    colorItem.forEach((item1) => {
                        item1.classList.remove('border', 'border-color', 'border-2')
                    })
                    item.classList.add('border', 'border-color', 'border-2')
                    this.img.forEach((ig => {
                        if (item.classList.contains(ig.id)) {
                            const html = Object.entries(ig).map(([key, value]) => {

                                if (key !== 'id') {
                                    if (key === 'img1') {

                                        return `<div class="carousel-item active">
                                    <img src='${value}' class="d-block w-100" alt="Slide">
                                </div>`;
                                    }
                                    else {
                                        return `<div class="carousel-item">
                                    <img src='${value}' class="d-block w-100" alt="Slide">
                                </div>`;
                                    }
                                }
                            })
                            carousel.innerHTML = html.join('')
                            carouselItem[0].classList.add('active')
                        }
                    }))
                }
            })
        })();

    },


    render() {
        this.khoidong()

        this.handleClickBntColor()

    },
}
App.render()

ScrollReveal({
    reset: true,
    origin: 'bottom',   // Xuất hiện từ phía dưới
    distance: '100px',    // Khoảng cách ban đầu
    duration: 1500,      // Thời gian xuất hiện (milliseconds)
    delay: 150,          // Độ trễ trước khi xuất hiện (milliseconds)
    // easing: 'ease-in-out', // Kiểu chuyển động
    easing: 'ease-in-out',
    opacity: '0'
});
ScrollReveal().reveal('.product__title--move,.product__camera--box1', { delay: 200, origin: "bottom" });
ScrollReveal().reveal('.design__size,.design__material--title,.design__material--img,.size-display--img,.product__camera-front--img,.product__accessory ', { delay: 200, origin: "bottom" });
ScrollReveal().reveal('.product__description--display--title,.design__size-big ', { delay: 400, origin: "left" });
ScrollReveal().reveal('.product__description--display--img ,.product__camera--front', { delay: 400, origin: "bottom" });
ScrollReveal().reveal('.product__camera--box,.product__description--display,.product__perfomence--cpu ,.product__charger--box,.product__security', { delay: 200, origin: "bottom" });
ScrollReveal().reveal('.design__material,.product__update  ', { delay: 200, origin: "left" });


ScrollReveal().reveal('.product__juridical--title,.product__juridical--screen', { delay: 200, origin: "bottom", distance: '30px', duration: '1100' });
ScrollReveal().reveal('.product__juridical--electricity,.product__juridical--charging-cable, .product__juridical--guarantee-plus,.product__juridical--area,.product__juridical--accessory, .product__juridical--network', { delay: 150, origin: "bottom", distance: '30px', duration: '1000' });


