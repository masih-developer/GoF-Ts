class Singleton {
  private static instance: Singleton;
  private static _value: number;

  constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value(): number {
    return Singleton._value;
  }
}

export default function test() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  instance1.value = 10;

  console.log(instance1.value);
  console.log(instance2.value);
  console.log(instance1 === instance2);
}
