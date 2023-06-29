import React from 'react';

export const calculateNote = (formData) => {
  let note = 0;

  const { systeme_d_exploitation, ram, stockage, reseau, etat, chargeur } = formData;

  switch (systeme_d_exploitation) {
    case "IOS":
      note += 100;
      break;
    case "Android":
      note += 80;
      break;
    default:
      console.log("Système d'exploitation non valide.");
      break;
  }

  switch (ram) {
    case "1 Go":
      note += 30;
      break;
    case "2 Go":
      note += 40;
      break;
    case "3 Go":
      note += 50;
      break;
    case "4 Go":
      note += 60;
      break;
    case "6 Go":
      note += 80;
      break;
    case "8 Go":
      note += 100;
      break;
    case "12 Go":
      note += 150;
      break;
    case "16 Go":
      note += 200;
      break;
    default:
      console.log("Quantité de RAM non valide.");
      break;
  }

  switch (stockage) {
    case "16 Go":
      note += 30;
      break;
    case "32 Go":
      note += 40;
      break;
    case "64 Go":
      note += 50;
      break;
    case "128 Go":
      note += 60;
      break;
    case "256 Go":
      note += 80;
      break;
    case "512 Go":
      note += 100;
      break;
    case "1024 Go":
      note += 150;
      break;
    default:
      console.log("Capacité de stockage non valide.");
      break;
  }

  switch (reseau) {
    case "3G":
      note += 50;
      break;
    case "4G":
      note += 75;
      break;
    case "5G":
      note += 100;
      break;
    default:
      console.log("Type de réseau non valide.");
      break;
  }

  switch (etat) {
    case "Iréparable":
      note *= -1;
      break;
    case "Réparable":
      note *= -0.5;
      break;
    case "Bloqué":
      note *= -0.1;
      break;
    case "Reconditionnable":
      note *= -0.05;
      break;
    case "Reconditionné":
      break;
    default:
      console.log("État non valide.");
      break;
  }

  switch (chargeur) {
    case "oui":
      note += 100;
      break;
    case "non":
      break;
    default:
      console.log("Option de chargeur non valide.");
      break;
  }

  return note;
};

const Calculatrice = ({ formData }) => {
  const note = calculateNote(formData);

  console.log("Score du smartphone : " + note);

  return (
    <div>
      <h2>Résultat de la calculatrice</h2>
      <p>Score du smartphone : {note}</p>
      {note > 0 ? (
        <p>Le smartphone est de bonne qualité.</p>
      ) : (
        <p>Le smartphone n'est pas de bonne qualité.</p>
      )}
    </div>
  );
};

export default Calculatrice
