import React from "react";
import './AnimateModalSimple.scss';

const AnimateModalSimple = (props) => {

  const {titleButton, icon, title, content} = props;
  return (
    <>
      <a className="modal-open" href="#modal" {...props}>
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