import Animal from "../labEntity/Animal";
import AnimalController from "../labController/AnimalController";

let horse: Animal = new Animal("Horse", 75);
let tiger: Animal = new Animal("Tiger", 100);
let dog: Animal = new Animal("Dog", 60);
let animals = [horse, tiger, dog];
let animalController = new AnimalController;

let theFastestAnimal = animals[0];
let theFastestSpeed = animalController.getRandomSpeed(theFastestAnimal);
for (let i = 1; i < animals.length; i++) {
    let speed = animalController.getRandomSpeed(animals[i]);
    if (speed > theFastestSpeed) {
        theFastestAnimal = animals[i];
        theFastestSpeed = speed;
    }
}
console.log(`[INFO]: The fastest animal is ${theFastestAnimal.getName()} with speed ${theFastestSpeed} km/h`);