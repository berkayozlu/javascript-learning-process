let restaurant = {
    name: 'Nusret',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return seatsLeft >= partySize
    },
    seatParty: function(addGuest){
        this.guestCount += addGuest
    },
    removeParty: function(removeGuest){
        this.guestCount -= removeGuest
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
