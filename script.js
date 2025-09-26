// Recipe Data
const recipes = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        cuisine: "italian",
        difficulty: "medium",
        prepTime: "15 mins",
        cookTime: "15 mins",
        servings: 4,
        image: "image/carb.jpg",
        description: "A classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
        ingredients: [
            "400g spaghetti",
            "200g pancetta or guanciale",
            "4 large eggs",
            "100g Pecorino Romano cheese",
            "Black pepper",
            "Salt"
        ],
        steps: [
            "Cook spaghetti in salted boiling water until al dente.",
            "While pasta cooks, fry pancetta until crispy.",
            "Whisk eggs with grated cheese and black pepper.",
            "Drain pasta, reserving some pasta water.",
            "Mix hot pasta with pancetta, then quickly stir in egg mixture.",
            "Add pasta water to create a creamy sauce. Serve immediately."
        ]
    },
    {
        id: 2,
        title: "Margherita Pizza",
        cuisine: "italian",
        difficulty: "hard",
        prepTime: "2 hours",
        cookTime: "15 mins",
        servings: 4,
        image: "image/pizaa.jpg",
        description: "Simple and delicious pizza with tomato, mozzarella, and basil.",
        ingredients: [
            "500g pizza flour",
            "7g dry yeast",
            "300ml warm water",
            "400g canned tomatoes",
            "250g fresh mozzarella",
            "Fresh basil leaves",
            "Olive oil",
            "Salt"
        ],
        steps: [
            "Mix flour, yeast, water, and salt to make dough. Knead for 10 minutes.",
            "Let dough rise for 1-2 hours until doubled in size.",
            "Preheat oven to maximum temperature with pizza stone.",
            "Roll out dough, spread tomatoes, add mozzarella and basil.",
            "Bake for 10-15 minutes until crust is golden."
        ]
    },
    {
        id: 3,
        title: "Chicken Tacos",
        cuisine: "mexican",
        difficulty: "easy",
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: 4,
        image: "image/taco.jpg",
        description: "Flavorful chicken tacos with fresh toppings and spices.",
        ingredients: [
            "500g chicken breast",
            "8 corn tortillas",
            "1 onion",
            "2 tomatoes",
            "1 avocado",
            "Lime juice",
            "Cilantro",
            "Chili powder",
            "Cumin"
        ],
        steps: [
            "Season chicken with spices and cook until done.",
            "Shred chicken and mix with lime juice.",
            "Warm tortillas in a dry pan.",
            "Dice tomatoes, onion, and avocado.",
            "Assemble tacos with chicken and fresh toppings.",
            "Garnish with cilantro and serve with lime wedges."
        ]
    },
    {
        id: 4,
        title: "Guacamole",
        cuisine: "mexican",
        difficulty: "easy",
        prepTime: "10 mins",
        cookTime: "0 mins",
        servings: 4,
        image: "image/guac.jpg",
        description: "Fresh and creamy avocado dip perfect for chips or toppings.",
        ingredients: [
            "3 ripe avocados",
            "1 lime",
            "1 small onion",
            "1 tomato",
            "Cilantro",
            "Jalapeño pepper",
            "Salt"
        ],
        steps: [
            "Cut avocados in half, remove pit, and scoop flesh into bowl.",
            "Mash avocados with fork to desired consistency.",
            "Dice onion, tomato, and jalapeño finely.",
            "Mix all ingredients with lime juice and salt.",
            "Chop cilantro and stir gently.",
            "Serve immediately with tortilla chips."
        ]
    },
    {
        id: 5,
        title: "Butter Chicken",
        cuisine: "indian",
        difficulty: "medium",
        prepTime: "30 mins",
        cookTime: "40 mins",
        servings: 4,
        image: "image/bc.jpg",
        description: "Creamy and aromatic Indian curry with tender chicken.",
        ingredients: [
            "500g chicken thigh",
            "200ml cream",
            "2 onions",
            "4 tomatoes",
            "Ginger-garlic paste",
            "Garam masala",
            "Turmeric",
            "Butter"
        ],
        steps: [
            "Marinate chicken in spices and yogurt for 30 minutes.",
            "Sauté onions until golden, add ginger-garlic paste.",
            "Add tomatoes and cook until soft.",
            "Add chicken and cook until tender.",
            "Stir in cream and butter, simmer for 10 minutes.",
            "Garnish with cilantro and serve with naan or rice."
        ]
    },
    {
        id: 6,
        title: "Vegetable Biryani",
        cuisine: "indian",
        difficulty: "hard",
        prepTime: "45 mins",
        cookTime: "30 mins",
        servings: 6,
        image: "image/vb.jpg",
        description: "Fragrant rice dish layered with spiced vegetables and herbs.",
        ingredients: [
            "2 cups basmati rice",
            "Mixed vegetables",
            "1 onion",
            "Biryani spices",
            "Saffron",
            "Yogurt",
            "Mint leaves",
            "Ghee"
        ],
        steps: [
            "Soak rice for 30 minutes, then parboil.",
            "Sauté vegetables with biryani spices.",
            "Layer rice and vegetables in a heavy pot.",
            "Add saffron milk and fried onions between layers.",
            "Seal pot with dough and cook on low heat for 20 minutes.",
            "Let rest for 10 minutes before serving."
        ]
    }
];

// Initialize the recipe book
$(document).ready(function() {
    displayRecipes(recipes);
    
    $('#searchInput').on('input', filterRecipes);
    
    $('#cuisineFilter, #difficultyFilter').on('change', filterRecipes);
});

function displayRecipes(recipesToShow) {
    const container = $('#recipeContainer');
    container.empty();
    
    if (recipesToShow.length === 0) {
        container.html('<div class="col-12 text-center"><p>No recipes found. Try different filters.</p></div>');
        return;
    }
    
    recipesToShow.forEach(recipe => {
        const difficultyClass = `difficulty-${recipe.difficulty}`;
        
        const recipeCard = `
            <div class="col-lg-4 col-md-6">
                <div class="card recipe-card" data-recipe-id="${recipe.id}">
                    <img src="${recipe.image}" class="recipe-image card-img-top" alt="${recipe.title}">
                    <div class="card-body">
                        <h5 class="recipe-title">${recipe.title}</h5>
                        <span class="recipe-cuisine">${recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)}</span>
                        <p class="recipe-difficulty ${difficultyClass}">Difficulty: ${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}</p>
                        <p class="recipe-description">${recipe.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">Prep: ${recipe.prepTime}</small>
                            <button class="btn btn-outline-success btn-sm view-recipe" data-recipe-id="${recipe.id}">View Recipe</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        container.append(recipeCard);
    });
    
    $('.view-recipe').on('click', function() {
        const recipeId = $(this).data('recipe-id');
        showRecipeDetails(recipeId);
    });
}

function filterRecipes() {
    const searchTerm = $('#searchInput').val().toLowerCase();
    const cuisineFilter = $('#cuisineFilter').val();
    const difficultyFilter = $('#difficultyFilter').val();
    
    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) || 
                             recipe.description.toLowerCase().includes(searchTerm);
        const matchesCuisine = cuisineFilter === 'all' || recipe.cuisine === cuisineFilter;
        const matchesDifficulty = difficultyFilter === 'all' || recipe.difficulty === difficultyFilter;
        
        return matchesSearch && matchesCuisine && matchesDifficulty;
    });
    
    displayRecipes(filteredRecipes);
}

function showRecipeDetails(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe) return;
    
    const difficultyClass = `difficulty-${recipe.difficulty}`;
    
    const modalContent = `
        <div class="recipe-meta">
            <div class="recipe-meta-item">
                <span class="recipe-meta-label">Cuisine:</span>
                <span class="recipe-meta-value">${recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)}</span>
            </div>
            <div class="recipe-meta-item">
                <span class="recipe-meta-label">Difficulty:</span>
                <span class="recipe-meta-value ${difficultyClass}">${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}</span>
            </div>
            <div class="recipe-meta-item">
                <span class="recipe-meta-label">Prep Time:</span>
                <span class="recipe-meta-value">${recipe.prepTime}</span>
            </div>
            <div class="recipe-meta-item">
                <span class="recipe-meta-label">Cook Time:</span>
                <span class="recipe-meta-value">${recipe.cookTime}</span>
            </div>
            <div class="recipe-meta-item">
                <span class="recipe-meta-label">Servings:</span>
                <span class="recipe-meta-value">${recipe.servings}</span>
            </div>
        </div>
        
        <h6>Ingredients:</h6>
        <ul class="ingredients-list">
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        
        <h6 class="mt-4">Preparation Steps:</h6>
        <ol class="steps-list">
            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;
    
    $('#recipeModalTitle').text(recipe.title);
    $('#recipeModalBody').html(modalContent);
    
    const recipeModal = new bootstrap.Modal(document.getElementById('recipeModal'));
    recipeModal.show();
}