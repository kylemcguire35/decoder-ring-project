const { expect } = require("chai");
const { substitution } = require("../src/substitution");

// Write your tests here!
describe("substitution()", () => {
  describe("error handling", () => {
    it("should return false if the alphabet is not exactly 26 characters", () => {
      const actual = substitution("test", "shortalphabet");
      expect(actual).to.be.false;
    });

    it("should return false if the alphabet contains duplicates", () => {
      const actual = substitution("test", "abcabcabcabcabcabcabcabcyz");
      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("should encode a message given another alphabet, including one with special characters", () => {
      const expected = "y&ii$r&";
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message", () => {
      const expected = "elp xhm xf mbymwwmfj dne";
      const actual = substitution(
        "You are an excellent spy",
        "xoyqmcgrukswaflnthdjpzibev"
      );
      expect(actual).to.equal(expected);
    });

    it("should ignore capitalized letters", () => {
      const expected = "y&ii$r&";
      const actual = substitution("MesSage", "$wae&zrdxtfcygvuhbijnokmpl");
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("should encode a message given another alphabet, including one with special characters", () => {
      const expected = "message";
      const actual = substitution(
        "y&ii$r&",
        "$wae&zrdxtfcygvuhbijnokmpl",
        false
      );
      expect(actual).to.equal(expected);
    });
  });
});
