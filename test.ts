import { createMock } from "@golevelup/ts-jest";

it("trying to trigger an error", () => {
  class SubClass {
    foo() {
      return "some string";
    }
  }

  class TopClass {
    constructor(private readonly subClass: SubClass) {}

    bar() {
      return this.subClass.foo();
    }
  }

  const topClass = new TopClass(createMock<SubClass>());
  expect(topClass.bar()).toEqual("some string");
});

it("same as above, without  createMock", () => {
  class SubClass {
    foo() {
      return "some string";
    }
  }

  class TopClass {
    constructor(private readonly subClass: SubClass) {}

    bar() {
      return this.subClass.foo();
    }
  }

  const topClass = new TopClass({ foo: jest.fn() })
  expect(topClass.bar()).toEqual("some string");
});
