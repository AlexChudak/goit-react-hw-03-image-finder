import React, { Component } from 'react';
// import PropType from 'prop-types';
import style from './Searchbar.module.css'


class Searchbar extends Component {
  state = {
    query :'',
  }

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
     
    this.props.onSubmit(this.state.query);

    this.setState({query:''})
    
  }

    render() {
        return (
        <header className={style.Searchbar}>
    <form className={style.SearchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={style.SearchForm_button}>
      <span className={style.SearchForm_button_label}>Search</span>
    </button>

    <input
      className={style.SearchForm_input}
                type="text"
                value={this.state.query}
                onChange={this.handleChange}
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}

}

export default Searchbar;