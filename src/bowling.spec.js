//bowling.spec.js
import Game from "./bowling";

let g;
beforeEach(() => (g = new Game()));

function rollMany(rolls, pins) {
  for (let i = 0; i < rolls; i += 1) {
    g.roll(pins);
  }
}

function rollSpare() {
  g.roll(5);
  g.roll(5);
}

function rollStrike() {
  g.roll(10);
}

test("gutter game", () => {
  rollMany(20, 0);
  expect(g.score()).toBe(0);
});

test("all ones", () => {
  rollMany(20, 1);
  expect(g.score()).toBe(20);
});

test("one spare", () => {
  rollSpare();
  g.roll(3);
  rollMany(17, 0);
  expect(g.score()).toBe(16);
});

test("one strike", () => {
  rollStrike();
  g.roll(3);
  g.roll(4);
  rollMany(16, 0);
  expect(g.score()).toBe(24);
});

test("perfect game", () => {
  rollMany(12, 10);
  expect(g.score()).toBe(300);
});
TabNine::sem;
