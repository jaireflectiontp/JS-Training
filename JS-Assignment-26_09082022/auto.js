class slider {
    constructor() {
        this.pages = [
            {
                name: 'slide1',
            },
            {
                name: 'slide2',
            },
            {
                name: 'slide3',
            },
            {
                name: 'slide4',
            },
        ]
        this.activepage = this.pages[0];
        this.activeIndex = 0;
    }

    playthis() {
        let present = '<div class="slide">' + this.activepage.name + '</div>'
        $('#slider').html(present)
    }
    auto() {
        let alternate = this;
        setInterval(function () {
            if (alternate.activeIndex < alternate.pages.length - 1) {
                alternate.activeIndex = alternate.activeIndex + 1;
                alternate.activepage = alternate.pages[alternate.activeIndex];
                alternate.playthis();
            }
            else if (alternate.activeIndex < alternate.pages.length - 1) {
                alternate.activeIndex = 0;
                alternate.activepage = alternate.pages[0];
                alternate.playthis();
            }

        }, 2000)
    }
}
let show = new slider();
show.playthis()
