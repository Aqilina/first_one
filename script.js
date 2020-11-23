let products = [
    {
        title: "OZWEEGO SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/f204ed5c024d42498e67ab9e012eb10f_9366/OZWEEGO_Shoes_White_FV9654_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9535beef288247efb9e4ab9e012ec028_9366/OZWEEGO_Shoes_White_FV9654_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/dad6b877e7fd4f1eb278ab9e012ec786_9366/OZWEEGO_Shoes_White_FV9654_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9ced8f95abe745cd95b6ab9f001dc207_9366/OZWEEGO_Shoes_White_FV9654_04_standard.jpg"
        ],
        stock: "2",
        price: "80",
        id: "1"
    },
    {
        title: "ZX 2K BOOST SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/a00e176273414e2d986babc90099fa3e_9366/ZX_2K_Boost_Shoes_White_FV9996_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/22ca1f055a294725880aabc9009a070a_9366/ZX_2K_Boost_Shoes_White_FV9996_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/4560338c129440d894d9abc9009a0e97_9366/ZX_2K_Boost_Shoes_White_FV9996_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/fd11b47048434931acd9abc9009a1542_9366/ZX_2K_Boost_Shoes_White_FV9996_04_standard.jpg"
        ],
        stock: "8",
        price: "150",
        id: "2"
    },

    {
        title: "X90004D SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/d6641ce0097f4b9ca22cabdd00a1c66e_9366/X90004D_Shoes_Black_FW7093_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9bca524f6e564ce19f7babdd00a1d334_9366/X90004D_Shoes_Black_FW7093_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/0075d5d3a0b8418c9756abdd00a1dad2_9366/X90004D_Shoes_Black_FW7093_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/efbfcf28ea55442e8130abdd00a1e173_9366/X90004D_Shoes_Black_FW7093_04_standard.jpg"
        ],
        stock: "5",
        price: "160",
        id: "3"
    },

    {
        title: "ULTRABOOST 20 SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/c506dc4a84804ab1a907abad011ebdf0_9366/Ultraboost_20_Shoes_Black_FV8330_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/d211447e73564a9d9d6babad011ec8fb_9366/Ultraboost_20_Shoes_Black_FV8330_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9b01b768b58546cebcf1abad011ecf01_9366/Ultraboost_20_Shoes_Black_FV8330_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/fd2750a89cb74c73beb4abad011ed544_9366/Ultraboost_20_Shoes_Black_FV8330_04_standard.jpg"
        ],
        stock: "12",
        price: "180",
        id: "4"
    },

    {
        title: "OZWEEGO SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/d8afb099dc9047789c63abed0072c6c1_9366/OZWEEGO_Shoes_Grey_FZ1963_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/be589225059b44868386abed0072d488_9366/OZWEEGO_Shoes_Grey_FZ1963_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/f897d99916184c928d19abed0072dbd1_9366/OZWEEGO_Shoes_Grey_FZ1963_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/d197459d4fcb494380d0abed0072e33a_9366/OZWEEGO_Shoes_Grey_FZ1963_04_standard.jpg"
        ],
        stock: "25",
        price: "110",
        id: "5"
    },

    {
        title: "ZX 2K BOOST SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/16216c130f5846ed8c9eabc600b3ea6f_9366/ZX_2K_Boost_Shoes_White_FX8835_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/34f64adbe930404f9203abc600b3f7f5_9366/ZX_2K_Boost_Shoes_White_FX8835_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/7f360335273e45cf9160abc600b3fefc_9366/ZX_2K_Boost_Shoes_White_FX8835_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/a6105a11bb96483297c5abc600b40603_9366/ZX_2K_Boost_Shoes_White_FX8835_04_standard.jpg"
        ],
        stock: "5",
        price: "150",
        id: "6"
    }
]




const btnHome = document.querySelector('.btn-home')
const mainPage = document.querySelector('main')
const shopPage = document.querySelector('.shop')

const menuBtn = document.querySelector('.f-start')
const nav = document.querySelector('nav')
const closeBtn = document.querySelector('.x-style')

const productPage = document.querySelector('.productPage')
const shoesContainer = document.querySelector('.shoesContainer')
const shoeSide = document.querySelector('.shoeSide')
const mainPhoto = document.querySelector('.mainPhoto')

const addPhotos = document.querySelector('.addPhotos')
const toCartBtn = document.querySelector('.toCartBtn')

const openShoppingCart = document.querySelector('#openShoppingCart')
const shoppingCartPage = document.querySelector('.shoppingCartPage')
const amount = document.querySelector('#amount')

const contShopping = document.querySelector('#contShopping')

const minus = document.querySelector('minus')
const plus = document.querySelector('plus')

const removeItemBtn = document.querySelector('.removeItemBtn')
const allItemInfo = document.querySelector('.allItemInfo')
const upperPart = document.querySelector('.upperPart')

const total = document.querySelector('.total')

const smallPhoto = document.querySelector('.smallPhoto')
const backToShop2 = document.querySelector('.backToShop2')


let chosenProduct
let cartArr = []
let totalAmount = 0
console.log("labas")
console.log("hello")

const switchingPages = {

    showShop(){
        // mainPage.style.display = 'none'
        shopPage.style.display = 'flex'
        productPage.style.display = 'none'
        shoppingCartPage.style.display = 'none'

    },
    goToChosen() {
        shopPage.style.display = 'none'
        productPage.style.display = 'flex'
        shoppingCartPage.style.display = 'none'
        showSingleItem()
    },
    goToCart() {
        shopPage.style.display = 'none'
        productPage.style.display = 'none'
        shoppingCartPage.style.display = 'flex'
        showCartItems()
    },
}
switchingPages.showShop()

function createShoes(){
    shoesContainer.innerHTML = ''
    products.map(item => {
        shoesContainer.innerHTML += `
        <div class="shoeBox" id="${item.id}" onclick="chooseProduct(event)">
            <img class="imgDiv" src="${item.photos[0]}"  alt="">
            <div class="productName">${item.title}</div>
            <div class="productPrice">$ ${item.price}</div>
        </div>`
    })
}
createShoes()


function chooseProduct(event){ // id priskirtas card'ui, todel per nuotrauka(target) neiseis paimt id. reikia per path
    let id
    !!event.target.id ? id = event.target.id : id = event.path[1].id

    let filter = products.filter(item => item.id === id)[0]
    chosenProduct = {...filter, quantity: 1} // galima jungti, updatinti objektus

    switchingPages.goToChosen()

    // console.log(chosenProduct)
    // console.log(products)
    // console.log(event)
}

function showSingleItem(event){
    console.log(event)
    productPage.innerHTML = ''
    productPage.innerHTML += `
      <div class="shoeSide">
        <img src="${chosenProduct.photos[0]}" class="mainPhoto" alt="">
        
        <div class="addPhotos">
            <img src="${chosenProduct.photos[1]}" class="smallPhoto">
            <img src="${chosenProduct.photos[2]}" class="smallPhoto">
            <img src="${chosenProduct.photos[3]}" class="smallPhoto">
        </div>
      </div> 
       
      <div class="featuresSide">
        <div class="SideDiv">
            <div>Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.</div>
            <div class="selectSize">Select size</div>
            <div class="toCartBtn" onclick="addToCart()">TO CART</div>
            <div class="backToShop" onclick="switchingPages.showShop()">BACK TO SHOP</div>
        </div>
    </div>
        
    
    `
}

 /// N.B.!!!!! //////////////
///// CART'O ATVAIZDAVIMAS //////////////////////////
///// KAD NERODYTU DAUG KORTELIU //////
/////////////////////////////////////////

function addToCart(){

    if(chosenProduct.stock > 0){
        chosenProduct.stock--

        if (cartArr.some(item => item.id === chosenProduct.id)) {
            cartArr.map((item) => { //index?
                if(item.id === chosenProduct.id){
                    chosenProduct.quantity++ // padideja esamo item quantity  //[index]?
                }
            })
        } else {
            cartArr.push(chosenProduct)
        }
    }
    console.log(cartArr)
    showTotalPrice()
}
///////////////////////////////////////////
/////////////////////////////////////////


function showTotalPrice(){
    cartArr.map(x => {
        totalAmount = x.quantity * x.price
        console.log(totalAmount)
    })
    amount.innerText = `$ ${totalAmount}`
    total.innerText = `$ ${totalAmount}`
}


function showCartItems() {
    cartArr.map(item => {
        shoppingCartPage.innerHTML += `
        <div class="upperPart">
            <div class="shoeBoxInCart" id="${item.id}">
                <div class="allItemInfo">
                    <img class="imgCart" src="${item.photos[0]}">
                    <div class="productNameCart">${item.title}</div>
                    <div class="productPriceCart">$ ${item.price}</div>
                    <div class="editAmount">
                        <div class="editAmountBtn min" onclick="changeInCard(event, false)">-</div>
                        <div class="number">${item.quantity}</div>
                        <div class="editAmountBtn plu" onclick="changeInCard(event, true)">+</div>
                    </div>
                    <div class="totalAmountCart">$ ${item.quantity * item.price}</div>
                </div>
            <div class="removeItemBtn">X</div>
        </div>
    `
    })
}

function changeInCard(event, trigger){
    // console.log(trigger)
    // console.log(event)

    let id = event.path[3].id

    cartArr.map(item => {
        if(item.id === id){
            if(trigger && item.stock > 0){
                cartArr.quantity++
                cartArr.stock--
            } else {
                if(item.quantity > 0)
                cartArr.quantity--
                cartArr.stock++
            }
        }
    })
    showCartItems()
}






// function chooseSmallPhoto(event){
//     console.log(event)
//
//     let chosenId = event.target.id
//     mainPhoto.src = products.photos[chosenId]
// }


// addPhotos.addEventListener('click', chooseSmallPhoto)

openShoppingCart.addEventListener('click', switchingPages.goToCart)
backToShop2.addEventListener('click', switchingPages.showShop)
















// let chosenProduct
// let cartArr = []
// let cartArrFiltered =[]
// let price = 0
// let triggerShop = true
// let cartAmount = 0
// let included = []
//
// let totalAmountCartInner = 0
//
//
//
//
// function showShop(){
//     mainPage.style.display = 'none'
//     shopPage.style.display = 'flex'
// }
//
// function showMenu(){
//     nav.style.display = 'flex'
// }
// function closeMenu(){
//     nav.style.display = 'none'
// }
//
// function createShoes(){
//     products.map(item =>{
//         let shoeBox = document.createElement('div')
//         shoeBox.classList.add('shoeBox')
//         shoeBox.setAttribute('id', item.id)
//         shoeBox.addEventListener("click", goToChosen)
//         shoeBox.addEventListener("click", chooseProduct)
//
//         let shoeImg = document.createElement('img')
//         shoeImg.classList.add('imgDiv')
//         shoeImg.src = item.photos[0]
//         shoeImg.style.pointerEvents = 'none'
//
//         let productName = document.createElement('div')
//         productName.classList.add('productName')
//         productName.innerText = item.title
//         productName.style.pointerEvents = 'none'
//
//
//         let productPrice = document.createElement('div')
//         productPrice.classList.add('productPrice')
//         productPrice.innerText = `$ ${item.price}`
//         productPrice.style.pointerEvents = 'none'
//
//
//         shoesContainer.appendChild(shoeBox)
//         // shoeBox.appendChild(imgDiv)
//         shoeBox.appendChild(shoeImg)
//         shoeBox.appendChild(productName)
//         shoeBox.appendChild(productPrice)
//     })
// }
// createShoes()
//
// function goToChosen(){
//     mainPage.style.display = 'none'
//     shopPage.style.display = 'none'
//     productPage.style.display = 'flex'
// }
//
// function chooseProduct(event){
//     // console.log(event)
//     chosenProduct = products.filter(item => item.id === event.target.id)
//     mainPhoto.src = chosenProduct[0].photos[0]
//
//     addPhotos.innerHTML = ''
//
//     chosenProduct[0].photos.map((item, index) => {
//         let smallPhoto = document.createElement('img')
//         smallPhoto.src = item
//         smallPhoto.classList.add('smallPhoto')
//         smallPhoto.setAttribute('id', index)
//         smallPhoto.addEventListener('click', chooseSmallPhoto)
//
//         addPhotos.appendChild(smallPhoto)
//     })
// }
//
//
// function chooseSmallPhoto(event){
//     let chosenId = event.target.id
//     console.log(chosenProduct)
//     mainPhoto.src = chosenProduct[0].photos[chosenId]
// }
//
// function addToCart() {
//
//     if (chosenProduct[0] && chosenProduct[0].stock > 0) {
//         triggerShop = true
//         chosenProduct[0].stock = chosenProduct[0].stock - 1
//         cartArr.push(chosenProduct[0])
//     //     if (!included.includes(chosenProduct[0].id)){
//     //         included.push(chosenProduct[0].id)
//     //
//     //     }else {
//     //         totalAmountCart.innerText = `$ ${totalAmountCartInner += Number(chosenProduct[0].price)}`
//     //     }
//         price += Number(chosenProduct[0].price)
//         amount.innerText = `$ ${price}`
//         total.innerText = `$ ${price}`
//     }
//     if (chosenProduct[0].stock === 0) {
//         triggerShop = false
//     }
//
//     // console.log(chosenProduct[0].stock)
//     // console.log(cartArr.length)
//     // console.log(price)
//     // console.log(cartArr)
//     showCartItems()
// }
//
// function showCartItems(){
//
//     upperPart.innerHTML = ''
//
//     cartArr.map(item => {
//
//         let shoeBoxInCart = document.createElement('div')
//         shoeBoxInCart.classList.add('shoeBoxInCart')
//
//         let allItemInfo = document.createElement('div')
//         allItemInfo.classList.add('allItemInfo')
//
//         let imgCart = document.createElement('img')
//         imgCart.classList.add('imgCart')
//         imgCart.src = item.photos[0]
//         // console.log(imgCart.src)
//
//         let productNameCart = document.createElement('div')
//         productNameCart.classList.add('productNameCart')
//         productNameCart.innerText = item.title
//
//         let productPriceCart = document.createElement('div')
//         productPriceCart.classList.add('productPriceCart')
//         productPriceCart.innerText = `$ ${item.price}`
//         // console.log(productPriceCart.innerText)
//
//         let editAmount = document.createElement('div')
//         editAmount.classList.add('editAmount')
//
//         let substract = document.createElement('div')
//         substract.classList.add('editAmountBtn')
//
//         let number = document.createElement('div')
//         number.classList.add('number')
//
//         let add = document.createElement('div')
//         add.classList.add('editAmountBtn')
//
//         // let numberInCart = 0
//         // numberInCart++
//         // let totalAmountOneItem = 0
//
//         let totalAmountCart = document.createElement('div')
//         totalAmountCart.classList.add('totalAmountCart')
//         totalAmountCart.innerText = `$ ${price+= Number(item.price)}`
//
//         upperPart.appendChild(shoeBoxInCart)
//         shoeBoxInCart.appendChild(allItemInfo)
//         allItemInfo.appendChild(imgCart)
//         allItemInfo.appendChild(productNameCart)
//         allItemInfo.appendChild(productPriceCart)
//         allItemInfo.appendChild(editAmount)
//         allItemInfo.appendChild(totalAmountCart)
//
//         editAmount.appendChild(substract)
//         editAmount.appendChild(number)
//         editAmount.appendChild(add)
//     })
//     // cartArr = []
//     // cartArr.filter(item => item.id === chosenProduct[0].id)
//     // console.log(item.id, chosenProduct[0].id)
//
// }
//
//
// function pushCartBtn(){
//     productPage.style.display = 'none'
//     shoppingCartPage.style.display = 'flex'
// }
//
// function shopAgain(){
//     shopPage.style.display = 'flex'
//     productPage.style.display = 'none'
//     closeMenu()
// }
//
// function removeItem(event){
//     console.log(event)
// }
//
//
// // btnHome.addEventListener('click', showShop)
// menuBtn.addEventListener('click', showMenu)
// closeBtn.addEventListener('click', closeMenu)
// toCartBtn.addEventListener('click', addToCart)
// openShoppingCart.addEventListener('click', pushCartBtn)
//
// contShopping.addEventListener('click', shopAgain)
//
// // removeItemBtn.addEventListener('click', removeItem)