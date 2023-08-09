import f1 from './f1.png';
import f2 from './f2.png';
import f3 from './f3.png';

export default function home() {

    const content = document.querySelector('.content'); //Main DIV

    const inner = document.createElement('div');
    inner.classList.add('inner');

    //Main
    const main = document.createElement('main');
    //Main Top
    const mainTop = document.createElement("div");
    mainTop.classList.add("main-top");

    const info = document.createElement("div");
    info.classList.add("info");

    const infoInner = document.createElement("div");
    infoInner.classList.add("info-inner");

    const heading3 = document.createElement("h3");
    heading3.textContent = "Food & Bar";

    const heading4 = document.createElement("h4");
    heading4.textContent = "THERE'S SOMETHING FOR EVERYONE";

    const span = document.createElement("span");
    span.textContent = "From our charming Restaurant & Irish Front Bar all the way up to our vibrant Rooftop cocktail deck & third-level Skygarden – This pub offers a unique & memorable experience around every corner.";

    const viewMenuButton = document.createElement("button");
    viewMenuButton.textContent = "View Menu";
    viewMenuButton.classList.add("info-btn");
    viewMenuButton.id = "vis-menu";

    const pics = document.createElement("div");
    pics.classList.add("pics");

    const pInner = document.createElement('div');
    pInner.classList.add('pics-inner')

    const img1 = document.createElement('img');
    img1.classList.add('img1');
    img1.src = f1;

    const img2 = document.createElement('img');
    img2.classList.add('img2');
    img2.src = f2;

    const img3 = document.createElement('img');
    img3.classList.add('img3');
    img3.src = f3;

    //Main Bottom
    const mainBottom = document.createElement('div');
    mainBottom.classList.add('main-bottom')
    mainBottom.innerHTML = `
            <div class="loc-cont">
                <h5>Location</h5>
                <span>30 NOWHERE STREET NOWHERE WEST 3232</span>
                <span><a class="links" href="#">(03) 5222 3344</a></span>
                <span><a class="links" href="#">book@pubfeed.com.au</a></span>
                <span><a class="links" href="#">Get in touch</a></span>

            </div>
            <div class="barhrs-cont">
                <h5>Bar Hours</h5>
                <span>MON – Closed</span>
                <span>TUE 4:00pm – 10:00pm</span>
                <span>WED 4:00pm – 10:00pm</span>
                <span>THU 4:00pm – 11:00pm</span>
                <span>FRI 12:00pm – 1:00am</span>
                <span>SAT 11:00am – 1:00am</span>
                <span>SUN 12:00pm – 11:00pm</span>
            </div>
            <div class="kitchhrs-cont">
                <h5>Kitchen Hours</h5>
                <h6>Lunch</h6>
                <span>FRI, SAT & SUN 12:00pm – 2:30pm</span>
                <h6>Dinner</h6>
                <span>TUE  5:30pm – 8:30pm</span>
                <span>WED 5:30pm – 8:30pm</span>
                <span>THU  5:30pm – 8:30pm</span>
                <span>FRI  5:30pm – 9:00pm</span>
                <span>SAT  5:30pm – 9:00pm</span>
                <span>SUN  5:30pm – 8:30pm</span>
            </div>`;

    const footer = document.createElement('footer');
    footer.innerHTML = `
        <footer>
            <span>Copyright © 2023 Declankb</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>github</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
        </footer>`;

    content.appendChild(inner);
    inner.appendChild(main)
    main.appendChild(mainTop)
    mainTop.appendChild(info);
    info.appendChild(infoInner);
    infoInner.appendChild(heading3);
    infoInner.appendChild(heading4);
    infoInner.appendChild(span);
    infoInner.appendChild(viewMenuButton);
    mainTop.appendChild(pics);
    pics.appendChild(pInner);
    pInner.appendChild(img1);
    pInner.appendChild(img2);
    pInner.appendChild(img3);
    main.appendChild(mainBottom);
    inner.appendChild(footer);
}
