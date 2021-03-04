// YOUR CODE GOES HERE
import createNewSpaceship from "./createNewSpaceship.js"

import createNewCrewMember from "./createNewCrewMember.js"

import createNewRocket from "./createNewRocket.js"

const launchpad = (ship, crewMembers, rocket) => {
  console.log("Initiating preflight procedures")
  console.log(`Welcome aboard the ${ship.name}`)
  ship.loadCrew(crewMembers)
  debugger
  console.log(ship.captain(), "is the captain. High five")
  ship.mountPropulsion(rocket)
  ship.takeoff()
}

let ourShip = createNewSpaceship("Apollo")

let crewNames = ["Brave", "Campion", "Dharma"]

const trainCrew = (crewArray) => {
  let trainedCrew = []
  crewArray.forEach((crewName) => {
    let crewMember = createNewCrewMember(crewName)
    crewMember.trained = true
    trainedCrew.push(crewMember)
  })
  return trainedCrew
}

let outFirstRocket = createNewRocket()
console.log(outFirstRocket.fire())
//outFirstRocket.addFuel(100)

let trainedCrew = trainCrew(crewNames)
launchpad(ourShip, trainedCrew, outFirstRocket)
// console.log(outFirstRocket.fire())
