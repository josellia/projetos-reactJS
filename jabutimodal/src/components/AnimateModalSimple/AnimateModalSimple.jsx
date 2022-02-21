import React from "react";
import './AnimateModalSimple.scss';

const AnimateModalSimple = (props) => {
 const {titleButton, icon, title, content, bgColorModalOpen, colorTextOpenModal, bgHeader} = props;

 const styles = {
     stylesModalOpen: {
         background: bgColorModalOpen || '#800080',
         color: colorTextOpenModal || '#ffa500'
     },

     stylesTitle: {
       background: bgHeader || 'rgba(2,162,239,1)'
     }
 }
  return (
    <>
    <div>

      <a style={styles.stylesModalOpen} className="modal-open" href="#modal" {...props}>
      {titleButton}
      {!!icon && (
          <span>{icon}</span>
      )}
      </a>
    </div>
      <div className="modal" id="modal">
        <div className="modal-content">
          <a href="!#" className="modal-close" title="Close Modal">
            X
          </a>
          <h3 style={styles.stylesTitle} className="title-simple-modal">{title}</h3>
          <div className="modal-section">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimateModalSimple;


