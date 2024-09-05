document.getElementById("searchButton").addEventListener("click", function() {
    var searchGroup = document.getElementById("searchGroup");
    searchGroup.style.display = "flex";
    this.style.display = "none";
    document.getElementById("allTracksButton").style.marginLeft = "10px";
});

document.getElementById('searchInput').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const tracksContainer = document.getElementById('tracksContainer');
    const cards = Array.from(tracksContainer.getElementsByClassName('card'));

    // Hide all cards initially
    cards.forEach(card => {
        card.classList.add('hidden');
    });

    // Show relevant cards as soon as any letter is typed
    cards.forEach(card => {
        if (card.getAttribute('data-name').toLowerCase().includes(query)) {
            card.classList.remove('hidden');
        }
    });

    // If query is empty, show all cards
    if (query === '') {
        cards.forEach(card => {
            card.classList.remove('hidden');
        });
    }
});
