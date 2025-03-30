const Playlist = require("../models/Playlist");

class SongContorller {
  static showSong(params) {
    Playlist.showSong(params);
  }
  static addSong(params) {
    Playlist.addSong(params);
  }
  static updateSong(params) {
    Playlist.updateSong(params);
  }
  static deleteSong(params) {
    Playlist.deleteSong(params);
  }
}

module.exports = SongContorller;
