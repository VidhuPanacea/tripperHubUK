const packages = [{
    id: 1,
    name: "Delhi Nainital Tour",
    duration: "3 Nights / 4 Days",
    destinations: "Nainital, Uttarakhand",
    category: "Family",
    price: "19,999",
    image: "https://images.unsplash.com/photo-1590265787538-4dc8fdeb9651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80;",
    description: "Very good package",
    itinerary: [{ day1: "Start", day2: "end" }],
    suggested: [{}]
}, {
    id: 2,
    name: "Nainital Ranikhet Tour",
    duration: "4 Nights / 5 Days",
    destinations: "Nainital, Ranikhet",
    category: "Honeymoon",
    price: "24,999",
    image: "https://images.unsplash.com/photo-1608942025318-1191eeade556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 3,
    name: "Mussorie Rishikesh Tour",
    duration: "3 Nights / 4 Days",
    destinations: "Mussorie, Rishikesh",
    category: "Adventure",
    price: "49,999",
    image: "https://images.unsplash.com/photo-1603867106100-0d2039fc8757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80",
    description: "",
    suggested: [{}]
}, {
    id: 4,
    name: "Mussorie Honeymoon Tour",
    duration: "4 Nights / 5 Days",
    destinations: "Mussorie",
    category: "Honeymoon",
    price: "25,999",
    image: "https://images.unsplash.com/photo-1490031781863-29b9bdbea131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description: "",
    suggested: [{}]
}, {
    id: 5,
    name: "Nainital Corbett Tour",
    duration: "4 Nights / 5 Days",
    destinations: "Nainital, Corbett",
    category: "Wildlife",
    price: "39,999",
    image: "https://images.unsplash.com/photo-1669021820355-7186908380d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "",
    suggested: [{}]
}, {
    id: 6,
    name: "Haridwar and Rishikesh Tour",
    duration: "2 Nights / 3 Days",
    destinations: "Haridwar, Rishikesh",
    category: "Adventure",
    price: "19,999",
    image: "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
}, {
    id: 7,
    name: "Delhi Landsdowne Weekend Tour",
    duration: "2 Nights / 3 Days",
    destinations: "Delhi, Lansdowne",
    category: "Trekking & Hiking",
    price: "19,999",
    image: "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 8,
    name: "Auli Skiing Tour",
    duration: "10 Nights / 11 Days",
    destinations: "Auli",
    category: "Adventure",
    price: "45,999",
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 9,
    name: "River Rafting Tour",
    duration: "1 Nights / 2 Days",
    destinations: "Bhrampuri to Rishikesh",
    category: "Adventure",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
}]

const allPackages = [...packages, {
    id: 9,
    name: "River Rafting Tour",
    duration: "1 Nights / 2 Days",
    destinations: "Bhrampuri to Rishikesh",
    category: "Adventure",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
}];

const cats = ["All", "Adventure", "Trekking and Hiking", "Group Tours", "Wildlife", "Honeymoon", "Family"];




function renderAllPackages() {
    renderAllPackages1(allPackages);
};


function renderAllPackages1(arr) {
    app.innerHTML = '';
    arr.map(function (pkg) {
        //    creates a DOM element (card) and appends in the div with id - #app 
        const div = document.createElement("div")
        div.className = "col-md-4 fadeInUp ftco-animate ftco-animated"
        div.innerHTML = `<div class="project-wrap">
        <a name="destinationcard" href = 'packageDetails.html?id=${pkg.id}&name=${pkg.name}'  class="img"
            style="background-image: url(${pkg.image})">
            <span class="price">From ₹${pkg.price}</span>
        </a>
        <div class="text p-4">
            <span class="days">${pkg.duration}</span>
            <h3><a href="#">${pkg.name}</a></h3>
            <p class="location"><span class="fa fa-map-marker"></span> ${pkg.destinations}</p>
            <ul>
                <li><a href = 'packageDetails.html?id=${pkg.id}&name=${pkg.name}'>Read More >></a></li>
                
            </ul>
        </div>
    </div>`
        app.appendChild(div) //finally appends the above code into the DOM
    })
};


// var newApp = document.querySelector('#newApp');
function filterPackages(filter) {
    if (filter == "All")
        renderAllPackages1(allPackages);
    else {
        let pkg = packages.filter(p => p.category == filter);
        renderAllPackages1(pkg);
    }
}