// event listener
// event handlier / click

// const pin = 

// export details
// import details

// details.TimeSquare

// class Pin {
//     constructor(name, type, price, ) {
//         this.name = name
//         this.type = type
//         this.price = price

//         addEventListener("click", this.click)

//     }

//     click () {
        
//     }

// }
// hash like 
// export

const details = {
    "Time Square": {
        "type": "Tourist",
        "price": "$",
        "party": "Solo Advanture",
        "seasonal": "no",
    },

    "Empire State Building": {
        "type": "Tourist",
        "price": "$$",
        "party": "Solo Advanture",
        "seasonal": "no",
    },

    "Koreatown": {
        "type": "Food/Drink",
        "price": "$$",
        "party": "Travel With Friends",
        "seasonal": "no",
    },

    "Chinatown": {
        "type": "Food/Drink",
        "price": "$",
        "party": "Solo Advanture",
        "seasonal": "no",
    },

    "Central Park": {
        "type": "Cultural",
        "price": "$",
        "party": "Solo Advanture",
        "seasonal": "no",
    },

    "The Vessel": {
        "type": "Tourist",
        "price": "$$",
        "party": "Solo Advanture",
        "seasonal": "no",
    },

    "Metropolitan Museum of Art": {
        "type": "Cultural",
        "price": "$",
        "party": "Solo Advanture",
        "seasonal": "no",
    },

    "Museum of Modern Art": {
        "type": "Cultrual",
        "price": "$",
        "party": "Solo Advanture",
        "seasonal": "no",
    },

    "Chelsea Market": {
        "type": "Food/Drink",
        "price": "$$",
        "party": "Solo Advanture",
        "seasonal": "no",
    },

    "St Marks Place": {
        "type": "Food/Drink",
        "price": "$$",
        "party": "Travel With Friends",
        "seasonal": "no",
    },

    "Madison Square Garden": {
        "type": "Tourist",
        "price": "$$$",
        "party": "Travel With Friends",
        "seasonal": "yes",
    },

    "Rockefella Center": {
        "type": "Tourist",
        "price": "$$",
        "party": "Solo Advanture",
        "seasonal": "yes",
    },

    "Little Italy": {
        "type": "Food/Drink",
        "price": "$$",
        "party": "Solo Advanture",
        "seasonal": "no",
    },

    "Little Island": {
        "type": "Tourist",
        "price": "$",
        "party": "Solo Advanture",
        "seasonal": "no",
    },

    "SOHO": {
        "type": "Tourist",
        "price": "$$",
        "party": "Solo Advanture",
        "seasonal": "no",
    },


}
export function myfunction(){
const met = document.querySelector("#gmimap5")
const central = document.querySelector("#gmimap3")
const moma = document.querySelector("#gmimap6")
const vessel = document.querySelector("#gmimap4")
const msg = document.querySelector("#gmimap11")
const rock = document.querySelector("#gmimap12")
const highline = document.querySelector("#gmimap7")
const ktown = document.querySelector("#gmimap1")
const empire = document.querySelector("#gmimap0")
const island = document.querySelector("#gmimap14")
const chelsea = document.querySelector("#gmimap8")
const hudson = document.querySelector("#gmimap9")
const soho = document.querySelector("#gmimap15")
const stmark = document.querySelector("#gmimap10")
const italy = document.querySelector("#gmimap13")
const china = document.querySelector("#gmimap2")


met.addEventListener("click", function() {
    document.querySelector('#list-name').innerText = 
    "Name? Metropolitan Museum of Art"
    document.querySelector('#list-type').innerText =
    "Type? Cultural"    
    document.querySelector('#list-price').innerText =
    "Price? $"
    document.querySelector('#list-party').innerText =
    "PartySize? Solo Adventure"
    document.querySelector('#list-seasonal').innerText =
    "Seasonal? No"
    
})

central.addEventListener("click", function() {
    document.querySelector('#list-name').innerText = 
    "Name? Central Park"
    document.querySelector('#list-type').innerText =
    "Type? Cultural"    
    document.querySelector('#list-price').innerText =
    "Price? $"
    document.querySelector('#list-party').innerText =
    "PartySize? Solo Adventure"
    document.querySelector('#list-seasonal').innerText =
    "Seasonal? No"
    
})

moma.addEventListener("click", function () {
        document.querySelector('#list-name').innerText =
            "Name? The Museum of Modern Art"
        document.querySelector('#list-type').innerText =
            "Type? Cultural"
        document.querySelector('#list-price').innerText =
            "Price? $"
        document.querySelector('#list-party').innerText =
            "PartySize? Solo Adventure"
        document.querySelector('#list-seasonal').innerText =
            "Seasonal? No"

})

vessel.addEventListener("click", function () {
        document.querySelector('#list-name').innerText =
            "Name? The Vessel"
        document.querySelector('#list-type').innerText =
            "Type? Tourist"
        document.querySelector('#list-price').innerText =
            "Price? $"
        document.querySelector('#list-party').innerText =
            "PartySize? Solo Adventure"
        document.querySelector('#list-seasonal').innerText =
            "Seasonal? No"

})
}