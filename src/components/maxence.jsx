import React, { useState } from 'react';

const BoutonCliquable = () => {
  const [texteBouton, setTexteBouton] = useState("Cliquez-moi !");

  const handleClick = () => {
    setTexteBouton("Merci d'avoir cliqué !");
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '100px',
        left: '100px',
      }}
    >
      <button
        style={{
          width: '100px', // Largeur du carré
          height: '100px', // Hauteur du carré
          backgroundColor: 'blue', // Couleur de fond du carré
          color: 'white', // Couleur du texte du bouton
          borderRadius: '10px', // Bordure arrondie pour donner l'apparence d'un carré
        }}
        onClick={handleClick}
      >
        {texteBouton}
      </button>
    </div>
  );
};

export default BoutonCliquable;