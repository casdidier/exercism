const names: {[key: string]: boolean} = {};
export class Robot {
    public name: string;
    constructor() {
        this.name = this.getName();
    }
    randLetter(): string {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
    }
    randNumber(): string {
        return '0123456789'[Math.floor(Math.random() * 10)];
    }
    randName(): string {
        return this.randLetter() + this.randLetter() +
            this.randNumber() + this.randNumber() + this.randNumber();
    }
    getName(): string {
        let newName = this.randName();
        while (names[newName] === true) {
            newName = this.randName();
        }
        names[newName] = true;
        return newName;
    }
    resetName(): void {
        this.name = this.getName();
    }

    releaseNames(): void {
        
    }
}
