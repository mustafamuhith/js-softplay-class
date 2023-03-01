// TODO: Write your class in this file
class Softplay {
    constructor (adults, children) {
      this.adults = 0
      this.children = 0
    }
  
    occupancy () {
      return {
        adults: this.adults,
        children: this.children
      }
    }
  
    enter (numAdults, numChildren) {
      if (numAdults < numChildren) {
        return false
      } else {
        this.adults += numAdults
        this.children += numChildren
        return true
      }
    }
  
    leave (numAdults, numChildren) {
      const adultCount = this.adults - numAdults
      const childCount = this.children - numChildren
  
      if (numChildren > numAdults) {
        return false
      } else if (
        childCount > adultCount
      ) {
        return false
      } else if (
        adultCount < 0 || childCount < 0
      ) {
        return false
      } else {
        this.adults -= numAdults
        this.children -= numChildren
        return true
      }
    }
  }
  
  // TODO: Change undefined to the name of your class
  module.exports = {
    Softplay
  }
  