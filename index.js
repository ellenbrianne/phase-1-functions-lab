const destination = 42;

function distanceFromHqInBlocks(pickupLoc) {
    let distanceBlock;
    if (pickupLoc > destination) {
    return distanceBlock = pickupLoc - destination;
    } else if (pickupLoc < destination) {
        return distanceBlock = destination - pickupLoc;
    };
    return distanceBlock;
};

function distanceFromHqInFeet(pickupLoc) {
    let distanceFeet = distanceFromHqInBlocks(pickupLoc);

    return distanceFeet *= 264;
};

function distanceTravelledInFeet(start, destination) {
    let feetTravelled;
    if (start > destination) {
        return feetTravelled = (start - destination) * 264;
    } else if (start < destination) {
        return feetTravelled = (destination - start) * 264;
    };

    return feetTravelled;
};

function calculatesFarePrice(start, destination) {
    let farePrice;
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return farePrice = 0;
    } else if (distance > 400 && distance < 2000) {
        return farePrice = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return farePrice = 25;
    } else if (distance > 2500) {
        return farePrice = 'cannot travel that far';
    };

    return farePrice;
};