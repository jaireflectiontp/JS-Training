class slider {
    constructor() {
        this.pages = [
            {
                name: '0.jpg',
            },
            {
                name: '1.jpg',
            },
            {
                name: '2.jpg',
            },
            {
                name: '3.jpg',
            },
        ]
        this.activepage = this.pages[0];
        this.activeIndex = 0;
    }

    playthis() {
        let present = '<img src="' + this.activepage.name + '" alt="" class="slide"></img>'
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
            else if (alternate.activeIndex <= alternate.pages.length - 1) {
                alternate.activeIndex = 0;
                alternate.activepage = alternate.pages[0];
                alternate.playthis();
            }

        }, 800)
    }
}
let show = new slider();
show.playthis()
