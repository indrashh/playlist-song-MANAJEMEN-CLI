const { Pop, Rock } = require("./Song");
const fs = require("fs");

class Playlist {
  constructor(id, album, songs) {
    this.id = id;
    this.album = album;
    this.songs = songs || [];
  }

  static getPlaylist() {
    let datas = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    let playlists = datas.map((playlist) => {
      let { id, album, songs } = playlist;
      songs = songs.map((song) => {
        let { id, name, duration, genre } = song;
        if (genre === "Rock") {
          return new Rock(id, name, duration);
        } else if (genre === "Pop") {
          return new Pop(id, name, duration);
        }
      });

      return new Playlist(id, album, songs);
    });
    return playlists;
  }

  static showPlaylist() {
    console.log(this.getPlaylist());
  }

  static createPlaylist(params) {
    let playlists = this.getPlaylist();
    let id = playlists[playlists.length - 1].id + 1;
    let album = params[0];

    playlists.push(new Playlist(id, album));
    this.save(playlists);
    console.log(`Album ${album} succesfully added`);
  }

  static updatePlaylist(params) {
    let playlists = this.getPlaylist();
    let [id, newAlbum] = params;
    let isUpdate = false;

    playlists.forEach((playlist) => {
      if (playlist.id === +id) {
        playlist.album = newAlbum;
        isUpdate = true;
      }
    });
    if (isUpdate) {
      this.save(playlists);
      console.log(`id ${id} succesfully updated`);
    } else {
      console.log(`id ${id} is not found update failed`);
    }
  }

  static deletePlaylist(params) {
    let playlists = this.getPlaylist();
    let id = +params[0];

    playlists = playlists.filter((playlist) => playlist.id !== id);
    this.save(playlists);
  }

  //   song parts

  static showSong() {
    let playlists = this.getPlaylist();

    playlists.forEach((playlist) => {
      console.log(`Album: ${playlist.album}`);
      playlist.songs.forEach((song, index) => {
        console.log(`  ${index + 1}. ${song.name}`);
      });
      console.log("");
    });
  }

  static addSong(params) {
    let playlists = this.getPlaylist();
    let [songName, duration, genre, albumName] = params;

    playlists.forEach((playlist) => {
      if (playlist.album === albumName) {
        let id;
        if (playlist.songs.length === 0) {
          id = 1;
        } else {
          id = playlist.songs[playlist.songs.length - 1].id + 1;
        }

        if (genre === "Rock") {
          playlist.songs.push(new Rock(id, songName, duration));
        } else {
          playlist.songs.push(new Push(id, songName, duration));
        }
      }
    });
    this.save(playlists);
  }

  static updateSong(params) {
    let [oldSong, newSong, albumName] = params;
    let playlists = this.getPlaylist();

    playlists.forEach((playlist) => {
      if (playlist.album === albumName) {
        let song = playlist.songs.find((song) => song.name === oldSong);
        if (song) {
          song.name = newSong;
          console.log("berhasil");
        } else {
          console.log("lagu tidak ditemukan");
        }
      }
    });
    this.save(playlists);
  }

  static deleteSong(params) {
    let playlists = this.getPlaylist();
    let songName = params[0];
    let albumName = params[1];
    playlists.forEach((playlist) => {
      if (playlist.album === albumName) {
        playlist.songs = playlist.songs.filter(
          (song) => song.name !== songName
        );
      }
    });

    this.save(playlists);
  }

  static save(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));
  }
}

module.exports = Playlist;
