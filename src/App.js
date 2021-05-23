import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './components/searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader'

import Modal from './components/Modal/Modal'




// axios.defaults.headers.common['Authorization'] ='Bearer 21736808-2f788a7747a7b6bd840ada646';

class ImageFinder extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal:false
  }
  
  toggleModal=()=> {
    this.setState(({showModal}) => ({
      showModal:!showModal
    }))
  }





  componentDidUpdate(prevProps,prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
   }
 }
 
  
  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage:1,hits:[], error:null });
     
    
  }

   
  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    
    this.setState({isLoading:true})

    axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=21736808-2f788a7747a7b6bd840ada646&image_type=photo&orientation=horizontal&per_page=12`
    ).then(response =>
    {
      this.setState(prevState=>(
        {
          hits:[...prevState.hits, ...response.data.hits],
        currentPage:prevState.currentPage+1}))
    }).catch(error=>this.setState({error})).finally(()=>this.setState({isLoading:false}));
  }

  render() {
    const { hits, isLoading, error, showModal } = this.state;
    const shouldRenderLoadButton = hits.length>0&&!isLoading
    return (
      <div>
        {error&&<h1>Sorry,Error.Try again</h1>}
        <Searchbar onSubmit={this.onChangeQuery} />
     
        <ImageGallery imageArray={hits}></ImageGallery>
       
        {isLoading&&<Loader/>}
        {shouldRenderLoadButton && <Button fetch={this.fetchImages} />}
        

        <button type="button" onClick={this.toggleModal}>Open Modal</button>
        {showModal&&<Modal/>}

    </div>
    
)
 }


}


export default ImageFinder;
