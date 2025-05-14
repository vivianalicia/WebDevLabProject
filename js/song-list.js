document.querySelectorAll('.playlist-section').forEach(card => {
    console.log(card);
    card.addEventListener('click', function() {
        const songId = this.getAttribute('data-id');
        window.location.href = `../html/SongsDetail.html?id=${songId}`; // Gunakan backtick di sini
    });
});

document.querySelectorAll('#play-icon').forEach(card => {
    console.log(card);
    card.addEventListener('click', function() {
        const songId = this.getAttribute('data-id');
        window.location.href = `../html/SongsDetail.html?id=${songId}`; // Gunakan backtick di sini
    });
});

document.querySelectorAll('#other-play-icon').forEach(card => {
    console.log(card);
    card.addEventListener('click', function() {
        const songId = this.getAttribute('data-id');
        window.location.href = `../html/SongsDetail.html?id=${songId}`; // Gunakan backtick di sini
    });
});

