const expect = chai.expect;
spyOnNumberIsInteger.restore();

describe('index.js', () => {
  describe('newID', () => {
    it('converts IDs from the old style to the new style', () => {
      expect(newID).to.eq(1000000000 + oldID);
    });
  });

  describe('ageIsValid', () => {
    it("contains 'true' when the value in 'currentAge' is a valid integer", () => {
      if (currentAgeIsInteger) {
        expect(ageIsValid).to.be.true;
      } else {
        expect(ageIsValid).to.be.false;
      }
    });

    it("invokes 'Number.isInteger()'", () => {
      expect(spyOnNumberIsInteger.calledOnce).to.be.true;
    });
  });

  describe('randomNumber', () => {
    it('contains a random number greater than or equal to 0 and less than 20', () => {
      expect(randomNumber).to.be.at.least(0).but.below(20);
    });

    it("invokes 'Math.random()'", () => {
      expect(spyOnMathRandom.calledOnce).to.be.true;
    });
  });

  describe('randomInteger', () => {
    it("contains the value of 'randomNumber' rounded down to the nearest integer", () => {
      expect(Number.isInteger(randomInteger)).to.be.true;

      expect(randomInteger).to.be.at.least(0).and.at.most(19);
    });

    it("invokes 'Math.floor()'", () => {
      expect(spyOnMathFloor.calledOnce).to.be.true;
    });
  });

  describe('randomUserID', () => {
    it('contains a random integer between 1000000001 and 1000000020', () => {
      expect(Number.isInteger(randomUserID)).to.be.true;

      expect(randomUserID).to.be.at.least(1000000001).and.at.most(1000000020);
    });
  });
});
