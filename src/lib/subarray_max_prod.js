
const Mocha = require('mocha')
const mocha = new Mocha()
const expect = require('chai').expect;
const should = require('chai').should();


class Example {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea()
  }

  calcArea() {
    return this.height * this.width;
  }
}

const maxProduct = (nums) => {
  if (!nums || nums.length === 0) return undefined
  if (nums.length === 1) return nums[0]
  const {best} = nums.reduce(
    ({pos, neg, best}, e) => {
      let ret
      if (e === 0) {
        ret = {
          pos: [pos[1], 0],
          neg: [neg[1], 0]
        }
      } else if (e > 0) {
        ret = {
          pos: [pos[1], Math.max(e * pos[pos.length - 1], e)],
          neg: [neg[1], e * neg[neg.length - 1]]
        }
      } else {
        ret = {
          pos: [pos[1], e * neg[neg.length - 1]],
          neg: [neg[1], Math.min(e * pos[pos.length - 1], e)]
        }
      }
      return {...ret, best: Math.max(best, ...ret.pos, ...ret.neg)}
    },
    {pos: [0, 0], neg: [0, 0], best: nums[0]}
  )
  return best
}




// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('Test suite', function() {
  it('should return undefined on empty', function() {
    expect(maxProduct([])).to.be.undefined
  })

  it('should return undefined on empty', function() {
    expect(maxProduct([-1, 2, 0, 3])).to.equal(3)
  })

  it('should return undefined on empty', function() {
    expect(maxProduct([-4, -3])).to.equal(12)
  })
})

mocha.run()
