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
document.querySelectorAll('.carousel-section').forEach(card => {
    console.log(card);
    card.addEventListener('click', function() {
        const songId = this.getAttribute('data-id');
        window.location.href = `../html/SongsDetail.html?id=${songId}`; // Gunakan backtick di sini
    });
});
document.querySelectorAll('.sold-song').forEach(card => {
    console.log(card);
    card.addEventListener('click', function() {
        const songId = this.getAttribute('data-id');
        window.location.href = `../html/SongsDetail.html?id=${songId}`; // Gunakan backtick di sini
    });
});
document.querySelectorAll('.recently-list').forEach(card => {
    console.log(card);
    card.addEventListener('click', function() {
        const songId = this.getAttribute('data-id');
        window.location.href = `../html/SongsDetail.html?id=${songId}`; // Gunakan backtick di sini
    });
});
document.querySelectorAll('.release-song').forEach(card => {
    console.log(card);
    card.addEventListener('click', function() {
        const songId = this.getAttribute('data-id');
        window.location.href = `../html/SongsDetail.html?id=${songId}`; // Gunakan backtick di sini
    });
});
