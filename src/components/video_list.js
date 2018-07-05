import React, {Component} from 'react';

class VideoList extends Component {

  render() {
    return (
      <ul className="">
        {this.props.videos.length}
      </ul>
    );
  }
}

export default VideoList;
