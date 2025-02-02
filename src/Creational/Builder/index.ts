// Builder Design Pattern

interface Builder {
  setPartA(): void;
  setPartB(): void;
  setPartC(): void;
}

class Product {
  private parts: string[] = [];

  add(part: string): void {
    this.parts.push(part);
  }

  listParts(): void {
    console.log(`Product Parts: ${this.parts.join(", ")}`);
  }
}

class ConcreterBuilder implements Builder {
  private product!: Product;

  reset(): void {
    this.product = new Product();
  }

  setPartA(): void {
    this.product.add("partA");
  }

  setPartB(): void {
    this.product.add("partB");
  }

  setPartC(): void {
    this.product.add("partC");
  }

  getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  BuildMinimumProduct(): void {
    this.builder.setPartA();
  }

  buildFullProduct(): void {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}

export default function test() {
  const builder = new ConcreterBuilder();
  const director = new Director();
  director.setBuilder(builder);

  director.BuildMinimumProduct();
  let minProduct = builder.getProduct();
  console.log(minProduct);
}
