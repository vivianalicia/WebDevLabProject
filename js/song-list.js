document.querySelectorAll('.playlist-section').forEach(card => {
    console.log(card);
    card.addEventListener('click', function() {
        const songId = this.getAttribute('data-id');
        window.location.href = `../html/SongsDetail.html?id=${songId}`; // Gunakan backtick di sini
    });
});
