export const countingSheepsAndWolves = (sheeps) => {
    let sheepCount = 0
    sheeps.forEach(animal => {
        if (animal === true)
            sheepCount++
    })
    if (sheepCount === 0) {
        return "UPS!!! Wolfs eaten Sheeps"
    }
    else {
        return `There are ${sheepCount} sheep in total`
    }
}


