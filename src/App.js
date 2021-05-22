import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './components/searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';




//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

class ImageFinder extends Component {
  state = {
    hits: [],
  }

  componentDidMount() {
    axios.get('https://pixabay.com/api/?q=forest&page=1&key=21736808-2f788a7747a7b6bd840ada646&image_type=photo&orientation=horizontal&per_page=12'
    ).then(response =>
    { this.setState({ hits: response.data.hits }) });
    
    
 }



  render() {
    const { hits } = this.state;
    return (
      <div>
        <Searchbar />   
        <ImageGallery imageArray={hits}></ImageGallery>   
    </div>
    
)
 }


}


export default ImageFinder;
