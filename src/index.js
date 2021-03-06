import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD6eg4SvHtOoiRdAwjM384NJ_4FxKldYVQ';






class App extends Component {
  
  constructor(props) {
    super(props);

    //could be written like this
    // YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
    //   this.setState({ videos: data })
    // });


    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
    });
  
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    )

  }
 
}



ReactDOM.render(<App />, document.querySelector('.container'));

