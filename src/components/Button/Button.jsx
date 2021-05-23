import React from 'react';


const Button = ({ fetch }) => {
     window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    return (
        <button type="button" onClick={fetch}>Load more!!!!!!!!!</button>
    )
}

export default Button;