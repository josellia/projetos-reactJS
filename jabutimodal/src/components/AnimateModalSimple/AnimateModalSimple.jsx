import React from "react";
import './AnimateModalSimple.scss';

const AnimateModalSimple = (props) => {
 const {titleButton, icon, title, content, bgColorModalOpen, colorTextOpenModal} = props;

 const styles = {
     stylesModalOpen: {
         background: bgColorModalOpen || '#800080',
         color: colorTextOpenModal || '#ffa500'
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
          <h3>{title}</h3>
          <div className="modal-section">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimateModalSimple;


const modalOpen = (bgColor) => {
    const styles = {
        backgroundColor: bgColor | 'tomato',
        display: 'block',
        padding: '20px',
        color: 'orange',
        fontWeight: 'bold',
        margin: '50px auto',
        width: '200px',
        borderRadius: '2px',
        textAlign: 'center',
        textDecoration: 'none',
    }

    return styles;
}