/* This function will generate a skywest trip for the day

Varibles:
Aircraft type you will be flying
Your crew position
Number of legs you will be flying
Your route - airports you will be flying to

*/

function generateTrip() {
    const aircraft = ['ERJ', 'CRJ 700', 'CRJ 550', 'CRJ 200']
    const position = ['Captain', 'First Officer', 'Flight Attendant']
    const airports = ['APA', 'COS', 'GJT', 'ASE', 'DRO', 'PUB', 'LAR', 'CPR', 'COD']
    let legs = Math.ceil((Math.random() * 4) + 1)

    function generateAirports() {
        let list = ['DEN', '>>>']
        for (i = 0; i < legs - 1; i++) {
            let nextStop = Math.floor(Math.random() * airports.length)
            while (airports[nextStop] === list[list.length - 2]) {
                nextStop = Math.floor(Math.random() * airports.length)
            }
            list.push(airports[nextStop])
            list.push('>>>')
        }
        list.push('DEN')
        return list
    }

    let aircraftIndex = Math.floor(Math.random() * aircraft.length)
    let positionIndex = Math.floor(Math.random() * position.length)

    let airportsList = generateAirports()

    console.log(`You got assigned a trip!`)
    console.log(`You will be flying on the ${aircraft[aircraftIndex]}.`)
    console.log(`You will be operating as the ${position[positionIndex]}.`)
    console.log(`Your trip has ${legs} legs.`)
    console.log(`Your route: ${airportsList.join(' ')}`)
}

generateTrip()