export abstract class Character {
    constructor(
        protected readonly name: string,
        protected readonly attack: number,
        protected health: number
    ) {}

    hit(personagem: Character): void {
        personagem.losingLife(this.attack);
    }

    losingLife(attack: number): void {
        this.health -= attack;
        console.log(`${this.name} has now ${this.health} of health...`)
    }

    abstract speech(): void;
}

export class Hero extends Character {
    speech(): void {
        console.log("I'LL KILL YOU, MONSTER!");
    }
}
export class Monster extends Character {
    speech(): void {
        console.log("ROOOOOARRRR!!!");
    }
}  

const hero = new Hero("Heroo", 40, 500);
const monster = new Monster("Monsterr", 20, 780);

hero.hit(monster);
monster.hit(hero);
hero.hit(monster);
monster.hit(hero);
hero.hit(monster);
monster.hit(hero);
hero.speech();
monster.speech();