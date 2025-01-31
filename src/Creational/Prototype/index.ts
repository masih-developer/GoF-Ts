// Prototype Design Pattern
interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcreetePrototype implements Prototype {
  constructor(public user: UserDetails) {}

  clone(): Prototype {
    const clonedUser = { ...this.user };
    return new ConcreetePrototype(clonedUser);
  }

  getUserDetails(): UserDetails {
    return this.user;
  }
}

export default function test() {
  const user1 = new ConcreetePrototype({
    name: "masih",
    email: "masih7816@gmail.com",
    age: new Date().getFullYear() - 2004,
  });

  const user2 = user1.clone();

  user1.user.name = "ali";

  console.log(user1.getUserDetails());
  console.log(user2.getUserDetails());
}
