import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './components/searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import Button from './components/Button/Button'




// axios.defaults.headers.common['Authorization'] ='Bearer 21736808-2f788a7747a7b6bd840ada646';

class ImageFinder extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery:''
  }

  componentDidUpdate(prevProps,prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
   }
 }
 
  
  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage:1,hits:[] });
     
    
  }

   
  fetchImages = () => {
  const { currentPage, searchQuery} = this.state;

    axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=21736808-2f788a7747a7b6bd840ada646&image_type=photo&orientation=horizontal&per_page=12`
    ).then(response =>
    {
      this.setState(prevState=>(
        {
          hits:[...prevState.hits, ...response.data.hits],
        currentPage:prevState.currentPage+1}))
    });
  }

  render() {
    const { hits } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery}/>
        <ImageGallery imageArray={hits}></ImageGallery>
        <button type="button" onClick={this.fetchImages}>Load more!!!!!!!!!</button>
    </div>
    
)
 }


}


export default ImageFinder;
