import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
  return <div> Song Details </div>;
};

const mapStateToProps = (state) => {
  {
    song: state.selectedSong;
  }
};

export default connect(mapStateToProps)(SongDetails);
