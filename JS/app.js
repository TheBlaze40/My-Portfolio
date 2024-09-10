



const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//Checks if element is in eye level.

class TxtRotate {
    constructor(element, toRotate, period) {
        this.toRotate = toRotate;
        this.el = element;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }

    //puts all of the text into an object type structure.

    tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = this.txt;

        let delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(() => this.tick(), delta);
    }
}

//this one does alot, it's more of a calculation (code) than a program. it sets an index of the remainder by dividing the two parameters.
//extracts the full text. updates the element with the new calculated text. also calculates a random value between 200-300 ms between pauses and 150-200 ms for deleting text.

window.onload = function() {
    const elements = document.getElementsByClassName('txt-rotate');
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-rotate');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
};

//when window loads, selects all elements with the class(makes list) txt-rotate class and gets their data-rotate and data-period attributes.

function openNav() {
    document.getElementById("sidenav").style.width = "20%";
  }
  
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }

  //increases width of sidenav. (20% of body)
