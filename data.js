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

const allPackages = [...packages,
{
    id: 10,
    name: "Natural Nainital",
    duration: "2 Nights - 3 Days",
    destinations: "Nainital",
    category: "Family",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},

{
    id: 11,
    name: "Charm Of Ranikhet",
    duration: "2 Nights - 3 Days",
    destinations: "Ranikhet",
    category: "Family",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 12,
    name: "Charm Of Ranikhet",
    duration: "2 Nights - 3 Days",
    destinations: "Ranikhet",
    category: "Family",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 13,
    name: "Best Of Kumaon Hills",
    duration: "5 Nights - 6 Days",
    destinations: "Kumaon",
    category: "Family",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 14,
    name: "Nainital With Mukteshwar",
    duration: "3 Nights - 4 Days",
    destinations: "Kumaon",
    category: "Family",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 15,
    name: "Nainital With Ranikhet Tour",
    duration: "3 Nights - 4 Days",
    destinations: "Kumaon",
    category: "Family",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 16,
    name: "Nainital Dhikala Tour",
    duration: "4 Nights - 5 Days",
    destinations: "Nainital",
    category: "Family",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 17,
    name: "Nanital With Queen Of Hills",
    duration: "6 Nights - 7 Days",
    destinations: "Nainital",
    category: "Family",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 18,
    name: "Charm Of Kumaon Hills",
    duration: "7 Nights - 8 Days",
    destinations: "Nainital",
    category: "Family",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 19,
    name: "Splendors Of Nainital With Auli",
    duration: "9 Nights - 10 Days",
    destinations: "Nainital, Auli",
    category: "Family",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 20,
    name: "Mussoorie With Rishikesh",
    duration: "3 Nights - 4 Days",
    destinations: "Mussoorie, Rishikesh",
    category: "Family",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 20,
    name: "Mussoorie With Rishikesh",
    duration: "3 Nights - 4 Days",
    destinations: "Mussoorie",
    category: "Family",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 40,
    name: "Hills And Ganges Tour",
    duration: "3 Nights - 4 Days",
    destinations: "Mussoorie",
    category: "Family",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 41,
    name: "Mussoorie Honeymoon Package",
    duration: "4 Nights - 5 Days",
    destinations: "Mussoorie",
    category: "Honeymoon",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 42,
    name: "Uttarakhand Honeymoon Tour",
    duration: "6 Nights - 7 Days",
    destinations: "Nainital",
    category: "Honeymoon",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 43,
    name: "Nainital Honeymoon Tour Package",
    duration: "3 Nights - 4 Days",
    destinations: "Nainital",
    category: "Honeymoon",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 44,
    name: "Mussoorie Chamba Rishikesh Honeymoon Tour",
    duration: "6 Nights - 7 Days",
    destinations: "Mussoorie, Chamba, Rishikesh",
    category: "Honeymoon",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 45,
    name: "Mussoorie Rishikesh Honeymoon Tour",
    duration: "4 Nights - 5 Days",
    destinations: "Mussoorie, Chamba, Rishikesh",
    category: "Honeymoon",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 46,
    name: "Nainital Almora Binsar Honeymoon Tour",
    duration: "6 Nights - 7 Days",
    destinations: "Almora, Nainital",
    category: "Honeymoon",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 47,
    name: "Nainital Ranikhet Kausani Honeymoon Tour",
    duration: "6 Nights - 7 Days",
    destinations: "Nainital, Ranikhet, Kausani",
    category: "Honeymoon",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
}
,
{
    id: 48,
    name: "Nainital Corbett Honeymoon Tour",
    duration: "5 Nights - 6 Days",
    destinations: "Nainital, Ranikhet, Kausani",
    category: "Honeymoon",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 49,
    name: "Nainital Mukteshwar Honeymoon Tour",
    duration: "5 Nights - 6 Days",
    destinations: "Nainital, Mukteshwar",
    category: "Honeymoon",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
}
,
{
    id: 50,
    name: "Jageshwar Dham Tour",
    duration: "5 Nights - 6 Days",
    destinations: "Almora",
    category: "Honeymoon",
    price: "",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 21,
    name: "Kaudiyala To Rishikesh River Rafting",
    duration: "2 Nights / 3 Days",
    destinations: "Kaudiyala To Rishikesh",
    category: "Adventure",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
}, {
    id: 22,
    name: "Marine Drive to Rishikesh Tour",
    duration: "2 Nights / 3 Days",
    destinations: "Marine Drive to Rishikesh",
    category: "Adventure",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 23,
    name: "Chopta Chandrashila Trek",
    duration: "4 Nights / 5 Days",
    destinations: "Chopta, Chandrashila",
    category: "Trekking and Hiking",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 24,
    name: "Nanda Devi Trek",
    duration: "8 Nights / 9 Days",
    destinations: "Nanda Devi",
    category: "Trekking and Hiking",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
}, {
    id: 25,
    name: "Har Ki Dun Trek",
    duration: "8 Nights / 9 Days",
    destinations: "Har ki Dun",
    category: "Trekking and Hiking",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 26,
    name: "Valley Of Flowers Trek",
    duration: "6 Nights / 7 Days",
    destinations: "Valley Of Flowers, Chamoli",
    category: "Trekking and Hiking",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 27,
    name: "Adi Kailash Trek",
    duration: "23 Nights / 24 Days",
    destinations: "Adi Kailash",
    category: "Trekking and Hiking",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 28,
    name: "Nanda Devi East Base Camp",
    duration: "16 Nights / 17 Days",
    destinations: "Nanda Devi",
    category: "Trekking and Hiking",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 29,
    name: "Sunderdhunga BC Trek",
    duration: "12 Nights / 13 Days",
    destinations: "Sunderdhunga",
    category: "Trekking and Hiking",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
}, {
    id: 30,
    name: "Kedarnath And Badrinath Yatra Package",
    duration: "7 Nights / 8 Days",
    destinations: "Kedarnath, Badrinath",
    category: "Pilgrimage",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 31,
    name: "Yamunotri Gangotri Package",
    duration: "6 Nights / 7 Days",
    destinations: "Yamunotri, Gangotri",
    category: "Pilgrimage",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 32,
    name: "Hemkund Sahib Yatra",
    duration: "6 Nights / 7 Days",
    destinations: "Hemkund Sahib",
    category: "Pilgrimage",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 33,
    name: "Haridwar Rishikesh Pilgrimage Tour",
    duration: "2 Nights / 3 Days",
    destinations: "Haridwar, Rishikesh",
    category: "Pilgrimage",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 34,
    name: "Dwadash(12) Jyotirlinga Tour",
    duration: "7 Nights / 8 Days",
    destinations: "Uttarakhand",
    category: "Pilgrimage",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 35,
    name: "Dhikala Weekend Tour",
    duration: "2 Nights / 3 Days",
    destinations: "Dhikala",
    category: "Wildlife",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 36,
    name: "Delhi Rajaji Weekend Tour",
    duration: "2 Nights / 3 Days",
    destinations: "Haridwar",
    category: "Wildlife",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 37,
    name: "Delhi Corbett Weekend Tour",
    duration: "2 Nights / 3 Days",
    destinations: "Jim Corbette",
    category: "Wildlife",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 38,
    name: "Pangot Corbett Birding Tour",
    duration: "2 Nights / 3 Days",
    destinations: "Pangot Corbett",
    category: "Wildlife",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
{
    id: 39,
    name: "Corbett Mussorie Tour",
    duration: "4 Nights / 5 Days",
    destinations: "Corbett, Nussorie",
    category: "Wildlife",
    price: "35,999",
    image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "",
    suggested: [{}]
},
];

const cats = ["All", "Adventure", "Trekking and Hiking", "Group Tours", "Wildlife", "Honeymoon", "Family"];

//selects the Element on the detialed package page
// var cat = document.querySelector('#cat');
// cats.map((cate) => {
//     const div = document.createElement("div");
//     //div.onclick = filterPackages(cate)

//     div.onclick = () => { filterPackages(cate); };

//     div.className = "category btn ";
//     div.innerText = cate
//     cat.appendChild(div)
// })


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
        let pkg = allPackages.filter(p => p.category == filter);
        renderAllPackages1(pkg);
    }
}