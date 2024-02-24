import React from "react";

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

function Business() {
    return (
        <div class="Business">
            <div class="imgContainer">
                <img alt='' src={business.imageSrc} />
            </div>,
            <h2>{business.name}</h2>,
            <div class="BusinessInformation">
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.state} {business.zipCode}</p>
            </div>,
            <div class="BusinessReviews">
                <h3>{business.category}</h3>
                <h3>{business.rating}</h3>
                <p>{business.reviewCount}</p>
            </div>
        </div>
    )
}

export default Business;