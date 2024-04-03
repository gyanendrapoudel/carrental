import {cars} from './data/cardetails.js'
let carHTML=''
cars.forEach((car)=>{
     carHTML += ` <div class="cars">
                <img src="${car.img}" alt="img">
                <div>
                    <button class="btn year-btn">${car.year}</button>
                </div>

                <div class=" car-info display-flex-sb">
                    <div class="display-flex-center">
                        <img src="./images/person.png" alt="">
                        ${car.person}
                    </div>
                    <div class="display-flex-center">
                        <img src="./images/feature_transmission.png" alt="">
                        A
                    </div>
                    <div class="display-flex-center">
                        <img src="./images/feature_fuel.png" alt="">
                        ${car.fuel}/100km
                    </div>
                </div>
                
                <div class="model">${car.name}</div>
                <div class="price">$${car.price}</div>
                <div class="rent-btn">
                        <button class="btn rent-btn">Rent Now</button>
                </div>
            </div>`
})

console.log(carHTML);
document.querySelector('.car-rate').innerHTML=carHTML