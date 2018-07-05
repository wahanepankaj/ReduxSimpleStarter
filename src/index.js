import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAHRf90NvRb47Txs9D0HQ9u_bFHupZCZEA';

YTSearch({key:API_KEY,term:'surfboard'}, function(data){
  console.log(data);
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos:[]};

    YTSearch({key:API_KEY,term:'surfboard'}, (videos) => {
      this.setState({videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
