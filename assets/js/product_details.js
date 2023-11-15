const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const proDuctImg = $('.product--img')
const capacitys = $$('.product__capacity--index')
const priceCurent = $('.price-curent')
const priceOld = $('.price-old')
const carousel = $('.carousel-inner')
const carouselItem = $$('.carousel-item')
const product__colors = $('.product__colors')
const product__name = $('.product__name')

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

            ; (() => {
                capacitys.forEach(capacity => {
                    console.log(capacity);
                    var check = capacity.classList.contains('active1')
                    if (check) {
                        product__name.innerHTML = (`iPhone 15 Pro Max - ${capacity.innerText}`)

                    }
                })
            })()

    },


    handleClickBntColor() {
        var colorItem = $$('.color-item')
        buttonCapacity: {
            capacitys.forEach((capacity) => {
                capacity.onclick = () => {
                    setTimeout(() => {
                        capacitys.forEach((capacity1) => {
                            capacity1.classList.remove('active1')
                        })
                        capacity.classList.add('active1')
                        if (capacity.classList.contains('active1')) {
                            this.prices.map((price) => {
                                console.log(price)
                                if (price.id === capacity.innerText) {
                                    priceCurent.innerText = price.new
                                    priceOld.innerText = price.old
                                    product__name.innerHTML = (`iPhone 15 Pro Max - ${price.id}`)
    
                                }
                            })
                        }
                    },200)
                }
            })
        }
        ; (() => {
            colorItem.forEach((item) => {
                item.onclick = () => {
                    setTimeout(() => {
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
                    }, 200)
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
    distance: '30px',    // Khoảng cách ban đầu
    duration: 1500,      // Thời gian xuất hiện (milliseconds)
    delay: 0,          // Độ trễ trước khi xuất hiện (milliseconds)
    // easing: 'ease-in-out', // Kiểu chuyển động
    easing: 'ease-in-out',
    opacity: '0'
});



ScrollReveal().reveal('.cpu-confirm,.product__battery--title,.product__charger--title,.product__security--title,.accessory__title-main ,.product__description--display--title,.design__material--title,.design__size-big,.cam-main-describe,.product__juridical--screen,.product__juridical--title,.product__juridical--screen', { origin: "bottom", duration: '1100' });
ScrollReveal().reveal('.product__camera-front--img', { delay: 200, origin: "right", duration: '1100' });
ScrollReveal().reveal('.product__battery--model', { delay: 200, origin: "left", duration: '1100' });
ScrollReveal().reveal('.product__juridical--electricity,.product__juridical--charging-cable, .product__juridical--guarantee-plus,.product__juridical--area,.product__juridical--accessory, .product__juridical--network', { origin: "bottom", distance: '30px', duration: '1000' });


