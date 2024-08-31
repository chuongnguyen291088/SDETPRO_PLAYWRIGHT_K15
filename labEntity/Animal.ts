export default class Animal {

    private name: string;
    private maxSpeed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    };

    getName(): string {
        return this.name;
    };

    getMaxSpeed(): number {
        return this.maxSpeed;
    };
}
