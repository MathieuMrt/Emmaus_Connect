import React from 'react';

const PopupResultat = ({ note, onClose, category }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Résultat de la recherche</h2>
        <p>Note du smartphone : {note}</p>
        <p>Catégorie : {category}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default PopupResultat;
