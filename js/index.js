// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.cap, .stem').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add("sauce-white");
  } else {
    document.querySelector('.sauce').classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add("crust-gluten-free");
  } else {
    document.querySelector('.crust').classList.remove("crust-gluten-free");
  }

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add("active");
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove("active");
  }
  if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.add("active");
  } else {
    document.querySelector('.btn.btn-pepperoni').classList.remove("active");
  }
  if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.add("active");
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove("active");
  }
  if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.add("active");
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove("active");
  }
  if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.add("active");
  } else {
    document.querySelector('.btn.btn-crust').classList.remove("active");
  }

}

function renderPrice() {

  addToBill(state.pepperoni, '.price.pepp', '<li class = "price pepp">$1 pepperoni</li>');
  addToBill(state.mushrooms, '.price.mush', '<li class = "price mush">$1 mushrooms</li>')
  addToBill(state.greenPeppers, '.price.greenpep', '<li class = "price greenpep">$1 green peppers</li>')
  addToBill(state.whiteSauce, '.price.whitesauce', '<li class = "price whitesauce">$3 white sauce</li>')
  addToBill(state.glutenFreeCrust, '.price.glutenfree', '<li class = "price glutenfree">$5 gluten-free crust</li>')

  let total = 0;
  if (document.querySelector('.price.pepp') !== null) total +=1;
  if (document.querySelector('.price.mush') !== null) total +=1;
  if (document.querySelector('.price.greenpep') !== null) total +=1;
  if (document.querySelector('.price.whitesauce') !== null) total +=3;
  if (document.querySelector('.price.glutenfree') !== null) total +=5;

  console.log(total);

  document.getElementById("total").innerHTML = 'Total : $' + (Number(10 + total));
  
}
function addToBill (stateAttribute, selector, toDisplay) {
  if (stateAttribute) {
    if (document.querySelector(selector) === null) {
      document.querySelector('.toppings').innerHTML += toDisplay;
    }
  } else {
    if (document.querySelector(selector))
      document.querySelector(selector).remove();
  }
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});