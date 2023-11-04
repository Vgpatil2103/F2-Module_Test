const recipeCardsContainer = document.querySelector('.recipe-cards');

const cardlist = document.querySelectorAll(".cardlist");


const aboveFourCheckbox = document.getElementById("abovefour");
const belowFourCheckbox = document.getElementById("belowfour");
const searchInput = document.getElementById("search-tab");

const leftmenu=document.querySelector(".left-menu");
const mergemenu=document.querySelector(".merged-menu");
const container=document.querySelector(".section");


function showMenu(){
    mergemenu.style.display="block";
    
    leftmenu.style.display="none";
    
}

leftmenu.addEventListener("click",showMenu);


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

///to add the images dynaically
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


// Set the "Show All" toggle as the default
const showAllButton = document.querySelector(".all-recipes");
showAllButton.style.backgroundColor = "lightblue"; // Highlight the "Show All" button
let currentFilter = "all"; // Current filter, initially set to "all"

// Function to update the displayed recipes based on filters
function updateDisplayedRecipes() {
  const filteredRecipes = recipeData.filter((recipe) => {
    if (currentFilter === "veg" && recipe.type === "non-veg") {
      return false; // Hide non-veg recipes when "Show Only Veg" is selected
    }
    if (currentFilter === "non-veg" && recipe.type === "veg") {
      return false; // Hide veg recipes when "Show Only Non-Veg" is selected
    }
    if (
      currentFilter === "aboveFour" &&
      (recipe.rating < 4.5 || recipe.rating === undefined)
    ) {
      return false; // Hide recipes with a rating below 4.5
    }
    if (currentFilter === "belowFour" && recipe.rating >= 4) {
      return false; // Hide recipes with a rating of 4 or above
    }
    if (
      searchInput.value.trim() !== "" &&
      !recipe.name.toLowerCase().includes(searchInput.value.trim().toLowerCase())
    ) {
      return false; // Hide recipes that don't match the search query
    }
    return true;
  });

  // Clear the existing recipe cards
  recipeCardsContainer.innerHTML = "";

  // Create and append recipe cards for the filtered recipes
  filteredRecipes.forEach((recipe) => {
    // Create recipe cards (same code as before)
    // ...recipeData.forEach(recipe => {
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

  
}

// Event listeners for filter buttons
showAllButton.addEventListener("click", () => {
  currentFilter = "all";
  showAllButton.style.backgroundColor = "lightblue";
  aboveFourCheckbox.checked = false;
  belowFourCheckbox.checked = false;
  updateDisplayedRecipes();
});

document.querySelector(".Veg-recipes").addEventListener("click", () => {
  currentFilter = "veg";
  showAllButton.style.backgroundColor = "";
  aboveFourCheckbox.checked = false;
  belowFourCheckbox.checked = false;
  updateDisplayedRecipes();
});

document.querySelector(".Non-Veg-recipes").addEventListener("click", () => {
  currentFilter = "non-veg";
  showAllButton.style.backgroundColor = "";
  aboveFourCheckbox.checked = false;
  belowFourCheckbox.checked = false;
  updateDisplayedRecipes();
});

aboveFourCheckbox.addEventListener("change", () => {
  if (aboveFourCheckbox.checked) {
    currentFilter = "aboveFour";
    showAllButton.style.backgroundColor = "";
    belowFourCheckbox.checked = false;
    updateDisplayedRecipes();
  }
});

belowFourCheckbox.addEventListener("change", () => {
  if (belowFourCheckbox.checked) {
    currentFilter = "belowFour";
    showAllButton.style.backgroundColor = "";
    aboveFourCheckbox.checked = false;
    updateDisplayedRecipes();
  }
});

// Event listener for the search input
searchInput.addEventListener("input", () => {
  updateDisplayedRecipes();
});

// Initial load with default filters
updateDisplayedRecipes();
