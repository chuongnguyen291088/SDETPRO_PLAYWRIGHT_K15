import Animal from "../../labEntity/Animal";
import Horse from "./Horse";
import Tiger from "./Tiger";
import Dog from "./Dog";
import AnimalController from "../../labController/AnimalController";

let horse: Horse = new Horse;
let tiger: Tiger = new Tiger;
let dog: Dog = new Dog;
let animals: Animal[] = [horse, tiger, dog];
let animalController = new AnimalController;
let theFastestAnimal: Animal = animalController.getTheFastestAnimal(animals);


console.log(`INFO | The fastest animal is ${theFastestAnimal.getName()} with speed ${theFastestAnimal.getRandomSpeed()} km/h`);