import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Can I Live', duration: '3:21' },
    { title: 'Sigo Extrañándote', duration: '4:21' },
    { title: 'Happier', duration: '3:39' },
    { title: 'm.A.A.d city', duration: '5:40' },
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
