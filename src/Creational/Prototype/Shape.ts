// Prototype Design Pattern

interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}

  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(
    public properties: ShapeProperties,
    public width: number,
    public height: number
  ) {
    super(properties);
  }

  clone(): Shape {
    return new Rectangle({ ...this.properties }, this.width, this.height);
  }
}

class Circle extends Shape {
  constructor(public properties: ShapeProperties, public radius: number) {
    super(properties);
  }

  clone(): Shape {
    return new Circle({ ...this.properties }, this.radius);
  }
}

export default function test() {
  const rectAngle = new Rectangle({ color: "red", x: 10, y: 20 }, 50, 120);
  const rectAngle2 = rectAngle.clone();
  rectAngle.properties.x = 112;
  console.log(rectAngle, rectAngle2);

  const circle = new Circle({ color: "blue", x: 12, y: 18 }, 25.4);
  const circle2 = circle.clone();
  circle.properties.x = 2000;
  console.log(circle, circle2);
}
