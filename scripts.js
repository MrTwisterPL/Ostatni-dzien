

{/* <article class="best-card">
                <img src="https://i.pravatar.cc/150?img=7" alt="">
                <h3 class="card-name">John Smith</h3>
                <button class=card-btn>
                    <i class="bi bi-person-plus"></i>
                    Follow
                </button>
                <p class="card-desc">Some quick example text to build on the card title and make up the bulk of the.</p>
            </article> */}

//best workers
const workersWrapper = document.getElementById("Workers");

function createWorkerCard(imageLink,Name,textContent){
    const card = document.createElement("article");
    card.setAttribute("class","best-card");
    const image = document.createElement("img");
    image.src = imageLink;
    image.alt = `Zdjęcie użytkownika ${Name}`;

    card.appendChild(image);

    const title = document.createElement("h3");
    title.setAttribute("class","card-name");
    title.textContent = Name ;
    
    card.appendChild(title);

    const btn = document.createElement("button");
    btn.classList.add ("card-btn");
    btn.innerHTML =`<i class="bi bi-person-plus"></i> Follow`

    card.appendChild(btn);

    const text = document.createElement("p")
    text.classList.add("card-desc");
    text.textContent= textContent;

    card.appendChild(text);


    workersWrapper.appendChild(card);
}

createWorkerCard("https://i.pravatar.cc/150?img=7","John Smith","Some quick example text to build on the card title and make up the bulk of the.");
createWorkerCard("https://i.pravatar.cc/150?img=12", "Tom Moon", "Some quick example text to build on the card title and make up the bulk of the.");
createWorkerCard("https://i.pravatar.cc/150?img=26", "Patricia Nowak", "Some quick example text to build on the card title and make up the bulk of the.");
createWorkerCard("https://i.pravatar.cc/150?img=23", "Margaret Carrot", "Some quick example text to build on the card title and make up the bulk of the.");

const pricingWrapper = document.getElementById("PriceBox");

const CreatePricingCard = (cena,opis,Support,Storage,Visitors) => {
    const pricecard = document.createElement("div")
    pricecard.classList.add("price-card");

    pricingWrapper.appendChild(pricecard)

    const price= document.createElement("div");
    price.classList.add("price");

    pricecard.appendChild(price);

    const icon = document.createElement("i");
    icon.setAttribute("class","bi bi-currency-dollar")

    price.appendChild(icon);

    const value= document.createElement("span");
    value.classList.add("value");
    value.textContent=cena;

    price.appendChild(value)

    const month = document.createElement("span");
    month.textContent="month";

    price.appendChild(month);

    const priceText = document.createElement("p");
    priceText.classList.add("price-text")
    priceText.textContent= opis;

    pricecard.appendChild(priceText);

    const itemInfo = document.createElement("div");
    itemInfo.classList.add("item-info");

    pricecard.appendChild(itemInfo);

    const list = document.createElement("ul");
    
    itemInfo.appendChild(list);

    const listContent = document.createElement("li")
    listContent.textContent="Full Support"

        const listContentSpan = document.createElement("span");
        listContentSpan.textContent=Support;
        listContent.appendChild(listContentSpan);
        list.appendChild(listContent);

    const listContent2 = document.createElement("li");
        listContent2.textContent="Storage"

        const listContentSpan2 = document.createElement("span");
        listContentSpan2.textContent=Storage;
        listContent2.appendChild(listContentSpan2);

        list.appendChild(listContent2);

    const listContent3 = document.createElement("li")
        listContent3.textContent="Monthly Visitors"

        const listContentSpan3 = document.createElement("span")
        listContentSpan3.textContent=Visitors;
        listContent3.appendChild(listContentSpan3);

        list.appendChild(listContent3);

    const button = document.createElement("button")
    button.textContent="Buy Now";

    pricecard.appendChild(button);

  
}

CreatePricingCard(15,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam aliquid nihil quia ipsum est a earum, dicta atque cumque culpa voluptate accusamus animi, dolore rerum sint quasi","No","No","200K");
CreatePricingCard(30, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam aliquid nihil quia ipsum est a earum, dicta atque cumque culpa voluptate accusamus animi, dolore rerum sint quasi","Yes","No","500K");
CreatePricingCard(40, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam aliquid nihil quia ipsum est a earum, dicta atque cumque culpa voluptate accusamus animi, dolore rerum sint quasi","Yes","Yes","800K" );
CreatePricingCard(60, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam aliquid nihil quia ipsum est a earum, dicta atque cumque culpa voluptate accusamus animi, dolore rerum sint quasi", "Yes","Yes","1M");



const showgreeting = () => {
    const title = document.getElementById("Greeting");
    const date = new Date();
    const hour = date.getHours();
    console.log(date.getHours() );
    if (hour < 12 && hour >=6) {
        title.textContent="Good Morning!";
    }
    else if (hour >= 12 && hour < 18) {
        title.textContent="Good Afternoon!";
    }
    else {
        title.textContent="Good Evening";
    }


}

showgreeting();

const loginbutton= document.getElementById("JoinButton");
const logintext=document.getElementById("LoginText");
const changeText = () => logintext.textContent="You are logged"
loginbutton.addEventListener("click" ,changeText);

const menu = document.getElementById("Menu")
const Hamburger = document.getElementById("HamburgerBtn") 
const showmenu = () => menu.classList.add("showMenu");
const toogleMenu = () => {
    menu.classList.toggle("showMenu")
    // if(menu.classList.contains("showMenu")) {
    //     menu.classList.remove("showMenu")
    // } else {
    //     menu.classList.add("showMenu")
    // }
}
Hamburger.addEventListener("click", toogleMenu)


//arrow function
//this w funkcji strzalkowej

// const funkcjaStrzalkowa = (a) => {
//     console.log("funkcja strzalkowa",a)
// }

// funkcjaStrzalkowa(8);

//zakresy: globalny, funkcyjny,blokowy
//globalny i lokalny

// const userAge=19;

// const info = () => {

//     const userAge=20;

//closures - domkniecia

// const info= () => {
//     let age=25;
//     const innerInfo = () => {
//         console.log(age)
//     }
//     return innerInfo;
// }

// const test=info();
// test()