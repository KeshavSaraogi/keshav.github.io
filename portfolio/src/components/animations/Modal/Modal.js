import React, { Component } from 'react';
import "./Modal.css";

class Modal extends Component {
  render() {
    const { onClick, title, description, image, url } = this.props;
    
    return (
      <div className="modal-container">
        <div className="modal-content">
          <h2>{title}</h2>
          <button className="btn align-right" onClick={onClick}>
            X
          </button>
          <img className="span2" src={image} alt={title}/>
          <p className="span2">{description}</p>
          <a href={url} target="_blank" rel="noreferrer">
            <button className="btn">Visit Site</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Modal;
