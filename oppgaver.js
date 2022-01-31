//Først lager jeg en class som blir gjeldene for hele koden.
//Denne classen henter jeg lenger ned i coden.
//Her setter jeg parrameterne for hva jeg vil ha med av info i Constructor
class Animal {
  constructor(species, name, country, color, imgUrl) {
    //Spørr Amina hva dette gjør
    this.species = species;
    this.name = name;
    this.country = country;
    this.color = color;
  }
}
//Her lager jeg const hvor jeg forteller at den skal hente classen Animal.
//Dette gjør at de verdiene jeg skriver inn blir linket til de parrameterne jeg har laget i Constructor

const animalOne = new Animal(
  "African Bush Elephant",
  "Elephant",
  "Africa",
  "Grey",
  "https://images.unsplash.com/photo-1574241298650-74e9f3649c60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
);
const animalTwo = new Animal(
  "Cat",
  "Cheetah",
  "Iran",
  "Yellow with black spots",
  "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80"
);
const animalThree = new Animal(
  "Cat",
  "Panther",
  "India",
  "Black",
  "https://images.unsplash.com/photo-1612737920943-d927663dd4ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
);

const animalFour = new Animal(
  "Bird",
  "Atlantic puffin",
  "Norway",
  "Black and white, with colourfull beak",
  "https://images.unsplash.com/photo-1605687720346-873638c5f4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80"
);

//Her forteller jeg koden og printe ut infoen i animalOne osv.
console.log(animalOne);
console.log(animalTwo);
console.log(animalThree);
console.log(animalFour);
