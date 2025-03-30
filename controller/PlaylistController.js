const Playlist = require("../models/Playlist");

class PlaylistContorller {
  static showPlaylist() {
    Playlist.showPlaylist();
  }
  static createPlaylist(params) {
    Playlist.createPlaylist(params);
  }
  static updatePlaylist(params) {
    Playlist.updatePlaylist(params);
  }
  static deletePlaylist(params) {
    Playlist.deletePlaylist(params);
  }
}

module.exports = PlaylistContorller;
