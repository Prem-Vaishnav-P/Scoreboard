let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("away-el")
homeEl.textContent = 0
guestEl.textContent = 0
let homePoints = 0
let guestPoints = 0

function increment1PointHome() {
    homePoints += 1
    homeEl.textContent = homePoints
}

function increment2PointHome() {
    homePoints += 2
    homeEl.textContent = homePoints
}

function increment3PointHome() {
    homePoints += 3
    homeEl.textContent = homePoints
}

function increment1PointGuest() {
    guestPoints += 1
    guestEl.textContent = guestPoints
}

function increment2PointGuest() {
    guestPoints += 2
    guestEl.textContent = guestPoints
}

function increment3PointGuest() {
    guestPoints += 3
    guestEl.textContent = guestPoints
}

function reset() {
    homePoints = 0
    guestPoints = 0
    homeEl.textContent = 0
    guestEl.textContent = 0
}