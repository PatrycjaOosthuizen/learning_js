let playlist = [];

function addSong(song) {
  playlist.push(song);
}

function removeSong() {
  return playlist.pop();
}

function showPlaylist() {
  console.log("Playlist:", playlist.join(", "));
}

// Testing the playlist manager
addSong("Song A");
addSong("Song B");
showPlaylist(); // Playlist: Song A, Song B
console.log("Removed:", removeSong()); // Removed: Song B
showPlaylist(); // Playlist: Song A
