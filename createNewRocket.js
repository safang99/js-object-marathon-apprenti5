let createNewRocket = () => {
  let newRocket = {
    fuel: 0,
    addFuel(fillAmount) {
      this.fuel = this.fuel + fillAmount
      console.log(this.fuel)
    },
    fire() {
      if (this.fuel > 0) {
        this.fuel -= 1
        console.log(
          `Engine has been fired! There is ${this.fuel} fuel in the engine`
        )
        return true
      } else {
        console.log(`There isnt enough fuel in the engine`)
        return false
      }
    }
  }
  return newRocket
}

export default createNewRocket
