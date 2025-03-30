const command = process.argv[2];
const params = process.argv.slice(3);
const PlaylistContorller = require("./controller/PlaylistController");
const SongContorller = require("./controller/SongController");

switch (command) {
  case "show playlist":
    PlaylistContorller.showPlaylist();
    break;
  case "create playlist":
    PlaylistContorller.createPlaylist(params);
    break;
  case "update playlist":
    PlaylistContorller.updatePlaylist(params);
    break;
  case "delete playlist":
    PlaylistContorller.deletePlaylist(params);
    break;
  case "show song":
    SongContorller.showSong();
    break;
  case "add song":
    SongContorller.addSong(params);
    break;
  case "update song":
    SongContorller.updateSong(params);
    break;
  case "delete song":
    SongContorller.deleteSong(params);
    break;
  default:
    console.log("makan bang");
    break;
}
