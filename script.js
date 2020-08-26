window.addEventListener('DOMContentLoaded', () => {

    const traffic = document.querySelectorAll('.tariffs__block-item'),
        tariffsBlock = document.querySelector('.tariffs__block'),
        btn = document.querySelectorAll('.btn__classicbtn'),
        priceY = document.querySelectorAll('.tariffs__block-price'),
        modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]'),
        inputsText = document.querySelectorAll('input[type=text]'),
        inputsPhone = document.querySelector('input[type=number'),
        inputsDate = document.querySelector('input[type=date');


    ClearInputs();

    //Выбор класса такси
    function addActive() {
        traffic.forEach(item => {
            item.classList.remove('active');
        });

        priceY.forEach(item => {
            item.classList.remove('black');
        })
    }

    function showActive(i = 0) {
        traffic[i].classList.add('active');
        priceY[i].classList.add('black');
    }

    addActive();
    showActive();


    btn.forEach(btns => {
        btns.addEventListener('mouseover', e => {
            const target = e.target;

            if (target) {
                btn.forEach((item, i) => {
                    if (target == item) {
                        addActive();
                        showActive(i);
                    }
                });
            }
        });

    });

    //Очистка полей
    function ClearInputs() {
        inputsText.forEach(item => {
            item.value = '';
        });
        inputsDate.value = '';
        inputsPhone.value = '';
    }




    //Модальное окно
    function openModal() {
        modalTrigger.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';

            ClearInputs();
        });
    }

    function closeModal() {
        modalCloseBtn.addEventListener('click', () => {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    function closeModalBody() {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }

    openModal();
    closeModal();
    closeModalBody();


    //Классы для отзывов

    class Rews {
        constructor(src, desc, img, name, prof, parentSelector) {
            this.src = src;
            this.desc = desc;
            this.img = img;
            this.name = name;
            this.prof = prof;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="rews__block-item">
                    <div class="rews__block-img">
                        <img src=${this.src} alt="">
                    </div>
                    <div class="rews__block-con">
                        <p class="rews__block-text">${this.desc}</p>
                        <img src=${this.img} alt="face" class="rews__content-img">
                        <div class="rews__content-b">
                            <h4 class="rews__content-name"><span>${this.name}</span></h4>
                            <p class="rews__content-prof">${this.prof}</p>
                        </div>
                    </div>
                </div>`;
        
        this.parent.append(element);
        }
    }

    new Rews(
        "./Images/Rectangle.png",
        'Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur.Quisque sollicitudin feugiat risus.',
        "./Images/Ellipse1.png",
        'john doe',
        'business man',
        '.rews__block'
    ).render();

    new Rews(
        "./Images/Rectangle.png",
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae consequatur iure rerum nostrum?',
        "./Images/Ellipse1.png",
        'Erik Mar',
        'Designer',
        '.rews__block'
    ).render();
});
