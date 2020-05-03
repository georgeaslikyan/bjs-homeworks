class Weapon {
  constructor(name, attack, durability, range, startDurability) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.startDurability = startDurability;
  }
  takeDamage(damage) {
    const check = this.durability - damage;
    if (damage <= this.durability) {
      return (this.durability = check);
    } else {
      return (this.durability = 0);
    }
  }
  getDamage() {
    const percent = (this.startDurability / 100) * 30;
    if (this.durability == 0) {
      return 0;
    } else if (this.durability >= percent) {
      return this.attack;
    } else {
      return this.attack / 2;
    }
  }
  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }
};

class Arm extends Weapon {
  constructor(name, attack, durability, range, startDurability) {
    super(name, attack, durability, range, startDurability);
  }
};
class Bow extends Weapon {
  constructor(name, attack, durability, range, startDurability) {
    super(name, attack, durability, range, startDurability);
  }
};

class Sword extends Weapon {
  constructor(name, attack, durability, range, startDurability) {
    super(name, attack, durability, range, startDurability);
  }
};

class Knife extends Weapon {
  constructor(name, attack, durability, range, startDurability) {
    super(name, attack, durability, range, startDurability);
  }
};

class Crutch extends Weapon {
  constructor(name, attack, durability, range, startDurability) {
    super(name, attack, durability, range, startDurability);
  }
};

class LongBow extends Bow {
  constructor(name, attack, durability, range, startDurability) {
    super(name, attack, durability, range, startDurability);
  }
}
class Axe extends Sword {
  constructor(name, attack, durability, range, startDurability) {
    super(name, attack, durability, range, startDurability);
  }
};

class CrutchStorm extends Crutch {
  constructor(name, attack, durability, range, startDurability) {
    super(name, attack, durability, range, startDurability);
  }
};

const arm = new Arm(`Рука`, 1, Infinity, 1, Infinity);
const bow = new Bow(`Лук`, 10, 200, 3, 200);
const sword = new Sword(`Меч`, 25, 500, 1, 500);
const knife = new Knife(`Нож`, 5, 300, 1, 300);
const crutch = new Crutch(`Посох`, 8, 300, 2, 300);

const longBow = new LongBow(`Длинный лук`, 15, 200, 4, 200);
const axe = new Axe(`Секира`, 27, 800, 1, 800);
const crutchStorm = new CrutchStorm(`Посох бури`, 10, 300, 3, 300);
