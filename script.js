function showAlbum(albumId) {
    // Hide all albums
    const albums = document.querySelectorAll('.photo-gallery');
    albums.forEach(album => {
        album.style.display='';
    });

    // Show the clicked album
    const selectedAlbum = document.getElementById(albumId);
    selectedAlbum.style.display = 'block';
}


function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.main-content').classList.toggle('active');
    document.querySelector('.overlay-bg').classList.toggle('active');
}

document.addEventListener('click', function(event) {
    let sidebar = document.querySelector('.sidebar');
    let button = document.querySelector('.btn');
    let overlay = document.querySelector('.overlay-bg');
    if (!sidebar.contains(event.target) && !button.contains(event.target)) {
        sidebar.classList.remove('active');
        document.querySelector('.main-content').classList.remove('active');
        overlay.classList.remove('active');
    }
});
