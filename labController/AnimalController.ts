import Animal from "../labEntity/Animal";

export default class AnimalController {

    getRandomSpeed(animal: Animal) {
        let animalMaxSpeed = animal.getMaxSpeed();
        let randomSpeed = Math.floor((Math.random() * animalMaxSpeed)) + 1;
        return randomSpeed;
    }
}