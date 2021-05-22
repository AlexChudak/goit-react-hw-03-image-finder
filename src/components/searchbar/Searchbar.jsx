import React, { Component } from 'react';
// import PropType from 'prop-types';
import style from './Searchbar.module.css'


class Searchbar extends Component {


    render() {
        return (
        <header className={style.Searchbar}>
    <form className={style.SearchForm}>
    <button type="submit" className={style.SearchForm_button}>
      <span className={style.SearchForm_button_label}>Search</span>
    </button>

    <input
      className={style.SearchForm_input}
      type="text"
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