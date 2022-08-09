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
           let present ='<div class="slide">'+ this.activepage.name +'</div>'
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
