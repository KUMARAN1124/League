let allPlayers = [];
let remainingPlayers = [];

function startAuction() {
    const input = document.getElementById("playerInput").value.trim();
    
    if (input === "") {
        alert("Please enter player names!");
        return;
    }

    allPlayers = input.split(",").map(player => player.trim());
    remainingPlayers = [...allPlayers];

    document.getElementById("auctionArea").style.display = "block";
    document.getElementById("selectedPlayer").innerText = "Click 'Next' to pick a player";
    document.getElementById("playerImage").src = "default.jpg"; // Placeholder
}

function pickRandomPlayer() {
    if (remainingPlayers.length === 0) {
        alert("All players have been picked! Resetting...");
        resetAuction();
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingPlayers.length);
    const selectedPlayer = remainingPlayers.splice(randomIndex, 1)[0];

    document.getElementById("selectedPlayer").innerText = `🎤 Player on Bid: ${selectedPlayer}`;
    document.getElementById("playerImage").src = `players/${selectedPlayer.replace(/ /g, "_")}.jpg`;
}

function resetAuction() {
    remainingPlayers = [...allPlayers];
    document.getElementById("selectedPlayer").innerText = "Click 'Next' to pick a player";
    document.getElementById("playerImage").src = "default.jpg";
}