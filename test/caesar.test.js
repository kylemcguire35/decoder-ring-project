// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  describe("error handling", () => {
    it("should return false if shift value is 0", () => {
      const actual = caesar("test", 0);
      expect(actual).to.be.false;
    });

    it("should return false if shift value is less than -25", () => {
      const actual = caesar("test", -26);
      expect(actual).to.be.false;
    });

    it("should return false if shift value is greather than 25", () => {
      const actual = caesar("test", 26);
      expect(actual).to.be.false;
    });

    it("should return false if shift value is not present", () => {
      const actual = caesar("test");
      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("should work with any capital letters", () => {
      const expected = "whvw";
      const actual = caesar("TeSt", 3);
      expect(actual).to.equal(expected);
    });

    it("should handle values at end of the alphabet", () => {
      const expected = "difve";
      const actual = caesar("zebra", 4);
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other nonalphabetic symbols in the message", () => {
      const expected = "nhhs vsdfh";
      const actual = caesar("keep space", 3);
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("should work with any capital letters", () => {
      const expected = "qbpq";
      const actual = caesar("TeSt", 3, false);
      expect(actual).to.equal(expected);
    });

    it("should handle values at the beginning of the alphabet", () => {
      const expected = "vaxnw";
      const actual = caesar("zebra", 4, false);
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other nonalphabetic symbols in the message", () => {
      const expected = "hbbm pmxzb";
      const actual = caesar("keep space", 3, false);
      expect(actual).to.equal(expected);
    });
  });
});
