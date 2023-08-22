// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  describe("encoding", () => {
    it("should return an encoded string", () => {
      const expected = "44513444";
      const actual = polybius("test");
      expect(actual).to.equal(expected);
    });

    it("should keep spaces unchanged", () => {
      const expected = "52515153 345311315134";
      const actual = polybius("keep spaces");
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const expected = "44513444";
      const actual = polybius("TeSt");
      expect(actual).to.equal(expected);
    });

    it("should return 42 when seeing i or j", () => {
      const expected = "4432423352125413";
      const actual = polybius("thinkful");
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("should return a decoded string", () => {
      const expected = "test";
      const actual = polybius("44513444", false);
      expect(actual).to.equal(expected);
    });

    it("should keep spaces unchanged", () => {
      const expected = "keep spaces";
      const actual = polybius("52515153 345311315134", false);
      expect(actual).to.equal(expected);
    });

    it("should return i and j when the input is 42", () => {
      const expected = "th(i/j)nkful";
      const actual = polybius("4432423352125413", false);
      expect(actual).to.equal(expected);
    });

    it("should return false if the string of numbers is uneven", () => {
      const actual = polybius("443242 335212 54134", false);
      expect(actual).to.be.false;
    });
  });
});
