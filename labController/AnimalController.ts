import Animal from "../labEntity/Animal";

export default class AnimalController {

    getTheFastestAnimal (animals: Animal[]): Animal {
        let theFastestAnimal = animals[0];
        let theRandomSpeed = theFastestAnimal.getRandomSpeed();
        console.log(`INFO | ${theFastestAnimal.getName()} => ${theRandomSpeed} km/h`);
        
        for (let i = 1; i < animals.length; i++) {
            let speedVar = animals[i].getRandomSpeed();
            console.log(`INFO | ${animals[i].getName()} => ${speedVar} km/h`);
            if (speedVar > theRandomSpeed) {
                theFastestAnimal = animals[i];
            }
        }
        return theFastestAnimal;
    }
}