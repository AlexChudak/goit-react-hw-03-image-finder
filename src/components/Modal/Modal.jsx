import React, { Component } from 'react';
import style from "./Modal.module.css"


class Modal extends Component {
 
    
    render() {
        return (
            <div className={style.Modal__backdrop}>
  <div className={style.Modal__content}>
    <img src="" alt="" />
  </div>
</div> 

        )
    }
}



export default Modal;