function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        return (someValue - 42);
    }
    else if (someValue < 42) {
        return (42 - someValue)
    }    
}
function distanceFromHqInFeet(someValue) {
    return (distanceFromHqInBlocks(someValue) * 264);
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return ((start - destination) * 264)
    }
    else if (destination > start) {
        return ((destination - start) * 264)
    }
}
function calculatesFarePrice(start, destination) {
    const fareCalc = distanceTravelledInFeet(start, destination);
    if (fareCalc <= 400) {
        return 0
    }
    else if (fareCalc > 400 && fareCalc <= 2000){
        return ((fareCalc - 400) * .02)
    }
    else if (fareCalc > 2000 && fareCalc <=2500) {
        return 25
    }
    else if (fareCalc > 2500) {
        return "cannot travel that far"
    }
}