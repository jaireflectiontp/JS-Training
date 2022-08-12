class slider {
    constructor() {
        this.pages = [
            {
                name: 'christina.jpg',
            },
            {
                name: 'jason-goodman.jpg',
            },
        ]
        this.activepage = this.pages[0];
        this.activeIndex = 0;
    }

    playthis() {
           let present ='<img src="' + this.activepage.name + '" alt="" class="slide"></img>'
        $('#slider').html(present)
    }
    prev() {
        if (this.activeIndex > 0) {
            this.activeIndex = this.activeIndex - 1;
            this.activepage = this.pages[this.activeIndex];
            this.playthis();
        }
    }
    next() {
        if (this.activeIndex < this.pages.length - 1) {
            this.activeIndex = this.activeIndex + 1;
            this.activepage = this.pages[this.activeIndex];
            this.playthis();
        }

    }
}
let show = new slider();
show.playthis()
