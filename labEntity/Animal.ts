export default class Animal {

    private name: string;
    private maxSpeed: number;
    private randomSpeed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.randomSpeed = this.setRandomSpeed();
    };
    
    getName(): string {
        return this.name;
    };
    
    getMaxSpeed(): number {
        return this.maxSpeed;
    };

    setRandomSpeed(): number {
        let randomSpeed = Math.floor((Math.random() * this.maxSpeed)) + 1;
        return randomSpeed;
    };
    
    getRandomSpeed(): number {
        return this.randomSpeed;
    };
}
