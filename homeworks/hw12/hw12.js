'use strict';

class BaseClass {
    #resourceBalance

    constructor(hp, mp, speed, resourceBalance) {
        this.hp = hp;
        this.mp = mp;
        this.speed = speed;
        this.#resourceBalance = resourceBalance;
    }

    checkHp = () => console.log(`My current HP is: ${this.hp}`);
    checkMp = () => console.log(`My current MP is: ${this.mp}`);
    checkSpeed = () => console.log(`My current Speed is: ${this.speed}`);
    checkResourceBalance = () => console.log(`My current balance is: ${this.#resourceBalance}`);
}

class BasePhysClass extends BaseClass {
    #physicalUltimate

    constructor(meleeDamage, meleeCritChance, meleeCritDmg, physicalUltimate, hp, mp, speed) {
        super(hp, mp, speed);
        this.meleeDamage = meleeDamage;
        this.meleeCritChance = meleeCritChance;
        this.meleeCritDmg = meleeCritDmg;
        this.#physicalUltimate = physicalUltimate;
    }

    battleRoar = () => console.log(`RUN IF YOU CAN!`);
    checkMeleeDamage = () => console.log(`My melee damage is ${this.meleeDamage}`);
    checkCritDamage = () => console.log(`My melee damage is ${this.meleeCritDmg}`);
    attackEnemy = () => console.log(`Casting phys attack!`);
}

class BaseMageClass extends BaseClass {
    #magicUltimate

    constructor(magicDamage, magicCritChance, magicCritDmg, magicUltimate, hp, mp, speed) {
        super(hp, mp, speed);
        this.magicDamage = magicDamage;
        this.magicCritChance = magicCritChance;
        this.magicCritDmg = magicCritDmg;
        this.#magicUltimate = magicUltimate;
    }

    castMeteor = () => console.log(`CASTING METEOR!!!`);
    castBlizzard = () => console.log(`CASTING BLIZZARD!!!`);
    castFrostNova = () => console.log(`CASTING FROST NOVA!`);
    attackEnemy = () => console.log(`Casting magic attack!`);
}

class BaseHybridClass extends BaseClass {
    #coinBalance

    constructor(coinToss, escape, coinBalance, hp, mp, speed) {
        super(hp, mp, speed);
        this.coinToss = coinToss;
        this.#coinBalance = coinBalance;
        this.escape = escape;
    }

    checkCoinBalance = () => console.log(`My coin balance is: ${this.#coinBalance}`);
    castCoinToss = () => console.log(`Casting coin toss...`);
    castEscape = () => console.log(`Escaping...`);
}

const baseClass = new BaseClass('100', '50', '5', '10');
console.log(baseClass);
baseClass.checkResourceBalance();

const warrior = new BasePhysClass('25', '5%', '150%', 'AOE SPLASH', '250', '10', '8');
console.log(warrior);
warrior.attackEnemy()

const mage = new BaseMageClass('40', '5%', '150%', 'AOE HEAL', '90', '150', '10');
console.log(mage);
mage.attackEnemy();

const thief = new BaseHybridClass(true, '50%', '10', '120', '50', '20');
console.log(thief);
thief.castCoinToss();
thief.checkCoinBalance();