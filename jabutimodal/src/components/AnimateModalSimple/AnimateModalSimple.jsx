import React from "react";
import './AnimateModalSimple.scss';

const AnimateModalSimple = (props) => {
 const {titleButton, icon, title, content, bgColorModalOpen, colorTextOpenModal} = props;

 const styles = {
     stylesModalOpen: {
         background: bgColorModalOpen || '#800080',
         color: colorTextOpenModal || '#ffa500'
     },

 }
  return (
    <>
      <a style={styles.stylesModalOpen} className="modal-open" href="#modal">
      {titleButton}
      {!!icon && (
          <span>{icon}</span>
      )}
      </a>
    
      <div className="modal" id="modal">
        <div className="modal-content">
          <a href="!#" className="modal-close" title="Close Modal">
            X
          </a>
          {/* TODO: fazer a classe dinâmica */}
          <h3  className="title-simple-modal bg-primary">{title}</h3>
          <div className="modal-section">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimateModalSimple;


