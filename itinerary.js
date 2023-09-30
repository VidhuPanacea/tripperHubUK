const itineraries = [{
    id: 1,
    packageId: 1,
    itinerary: `<div class="itinerary-cont accordion-box">
    <h3>Itinerary</h3>
    <div class="itinerary-cont-box accordion-item is-active">
        <span>Day 1</span>
        <div class="accordion-thumb">
            <h4>DELHI - NAINITAL (320 KMS / 08 HRS. DRIVE)</h4>
            <ul class="tags">
                <li>Arrival Transfer</li>
                <li>Sightseeing tour</li>
                <li>Lunch</li>
                <li>Dinner</li>
            </ul>
        </div>
        <div class="accordion-panel">
            <h5>Other Benfits (On Arrival) </h5>
            <ul class="Benfits">
                <li><img style="width:35px" src="images/meal.svg" alt="meal">
                    Breakfast
                </li>
                <li><img style="width:35px" src="images/transport.svg" alt="transport">
                    Transfers
                </li>
                <li><img style="width:35px" src="images/hotel.svg" alt="star hotel">
                    Stay Included
                </li>
            </ul>
            <p>Drive to Nainital in the morning and on arrival check in at the hotel. evening free for leisure. Overnight stay in hotel.</p>
        </div>
    </div>
    <div class="itinerary-cont-box accordion-item">
        <span>Day 2</span>
        <div class="accordion-thumb">
            <h4>NAINITAL</h4>
        </div>
        <div class="accordion-panel" style="">
            <p>After the breakfast, you will head for the famous lake tour of Bhimtal, Sattal, Naukuchiatal, Malli Tal. Overnight stay in Hotel.</p>
        </div>
    </div>
    <div class="itinerary-cont-box accordion-item">
        <span>Day 3</span>
        <div class="accordion-thumb">
            <h4>NAINITAL</h4>
        </div>
        <div class="accordion-panel">
            <p>After having the breakfast, visit Snow View Point, Bara Pathar, Tiffin Top, Zoo. In the evening, enjoy shopping at the Mall Road. Overnight stay at the hotel.</p>
        </div>
    </div>
    <div class="itinerary-cont-box accordion-item">
        <span>Day 4</span>
        <div class="accordion-thumb">
            <h4>Nainital - Delhi</h4>
        </div>
        <div class="accordion-panel">
            <p>After early breakfast, drive back to Delhi. On arrival to Delhi, drop at your place.</p>
            <p><strong>Tour and Services ends</strong></p>
        </div>
    </div>
</div>`
}];

var urlParams = new URLSearchParams(window.location.search)
let pkgId = urlParams.get('id');
var itinerary = document.querySelector('#itinerary');


let iti = itineraries.filter(p => p.pkgId == pkgId)[0];

const div = document.createElement("div")
div.className = " fadeInUp ftco-animate ftco-animated"
div.innerHTML = iti.itinerary
itinerary.appendChild(div) //finally appends the above code into the DOM


// itineraries.map(function (iti) {
//     //    creates a DOM element (card) and appends in the div with id - #app



// });

