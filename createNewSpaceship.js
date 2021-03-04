let createNewSpaceship = (name) => {
  let newSpaceShip = {
    name,
    crew: [],
    propulsion: null,
    loadCrew(crewArray) {
      crewArray.forEach((crewMember) => {
        debugger
        this.crew.push(crewMember)
        let { name } = crewMember
        console.log(`${name} has been loaded into the ${this.name}.`)
      })
    },
    captain() {
      let index = Math.floor(Math.random() * this.crew.length)
      let ourCaptain = this.crew[index]
      return ourCaptain.name
    },
    mountPropulsion(rocket) {
      this.propulsion = rocket
      console.log("Propulsion mounted!")
    },
    takeoff() {
      let rocketFired = this.propulsion.fire()
      if (rocketFired) {
        console.log("BBBRRROARZZZZZZ!!!!!!!")
      } else {
        console.log("takeoff was unsuccessful")
      }
    }
  }
  return newSpaceShip
}

export default createNewSpaceship
