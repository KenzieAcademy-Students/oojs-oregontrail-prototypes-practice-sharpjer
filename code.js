/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

// Create your Objects here.

function Traveler (name, food = 1, isHealthy = true) {
    this.name = name;
    this.food = food;
    this.isHealthy = isHealthy;
}

Traveler.prototype.hunt = function () {
    return this.food += 2;
}

Traveler.prototype.eat = function () {
    this.food -= 1;
    if (this.food <= 0) {
        this.isHealthy = false;
    }
}

function Wagon (capacity, passengers = []) {
    this.capacity = capacity;
    this.passengers = passengers;
}

Wagon.prototype.getAvailableSeatCount = function () {
    return this.capacity - this.passengers.length;
}

Wagon.prototype.join = function (traveler) {
    if (this.getAvailableSeatCount() > 0) {
        this.passengers.push(traveler);
    }
}

Wagon.prototype.shouldQuarantine = function () {
    if (this.passengers.filter(traveler => traveler.isHealthy === false).length > 0) {
        return true;
    } else {
        return false;
    }
}

Wagon.prototype.totalFood = function () {
    let totalFood = 1;
    this.passengers.forEach(passenger => totalFood += passenger.food);
    return totalFood;
}

