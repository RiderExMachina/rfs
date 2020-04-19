restaurants = ["McDonald's", "Wendy's", "Burger King", "Taco Bell", "Taco Time", "Panda Express", "Subway"]
oldChoice = 0;

function randomFood() {
    restaurantChoice = Math.round(Math.random() * restaurants.length);

    if (restaurantChoice == 7 || restaurantChoice == oldChoice){ 
        console.log("")
        randomFood(); }
    
    restaurant = restaurants[restaurantChoice]
    console.log(restaurantChoice)
    console.log(restaurant);
    oldChoice = restaurantChoice
    document.getElementById("restaurant").innerHTML = "Go to " + restaurant;
}