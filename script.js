const recipeCardsContainer = document.querySelector('.recipe-cards');


const recipeData = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

recipeData.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'cardlist';

    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    const image = document.createElement('img');
    image.src = recipe.imageSrc;
    image.className = 'dishimg';
    cardImage.appendChild(image);

    const vegNonVeg = document.createElement('div');
    vegNonVeg.className = 'veg-nonveg';
    const type = document.createElement('p');
    type.id = 'type';
    type.textContent = recipe.type === 'veg' ? 'Veg' : 'Non-Veg';
    vegNonVeg.appendChild(type);

    const dishName = document.createElement('div');
    dishName.className = 'dish-name';
    const nameOfDish = document.createElement('p');
    nameOfDish.id = 'name-of-dish';
    nameOfDish.textContent = recipe.name;
    dishName.appendChild(nameOfDish);

    const starRating = document.createElement('div');
    starRating.className = 'star-rating';
    const starImage = document.createElement('img');
    starImage.id = 'star';
    starImage.src = 'Star.svg';
    const starRatingValue = document.createElement('p');
    starRatingValue.id = 'star-rating';
    starRatingValue.textContent = recipe.rating;
    starRating.appendChild(starImage);
    starRating.appendChild(starRatingValue);

    dishName.appendChild(starRating);

    const time = document.createElement('div');
    time.className = 'time';
    const timeForDish = document.createElement('p');
    timeForDish.id = 'time-for-dish';
    timeForDish.textContent = recipe.time;
    time.appendChild(timeForDish);

    card.appendChild(cardImage);
    card.appendChild(vegNonVeg);
    card.appendChild(dishName);
    card.appendChild(time);

    recipeCardsContainer.appendChild(card);
});