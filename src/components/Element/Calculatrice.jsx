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
    case "32 Go":
      note += 300;
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
      note = 0;
      break;
    case "Réparable":
      note *= 0.5; 
      break;
    case "Bloqué":
      note *= 0.7; 
      break;
    case "Reconditionnable":
      note *= 0.9; 
      break;
    case "Reconditionné":
      note *= 1.5;
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
  if (note < 0) {
    note = 0;
  }
  return note;
};

export const getCategory = (note) => {
  if (note >= 1075) {
    return "5-Premium";
  } else if (note >= 900) {
    return "4-A";
  } else if (note >= 600) {
    return "3-B";
  } else if (note >= 300) {
    return "2-C";
  } else {
    return "1-HC";
  }
};

const Calculatrice = ({ formData }) => {
  const note = calculateNote(formData);
  const category = getCategory(note);

  console.log("Score du smartphone : " + note);
  console.log("Catégorie du smartphone : " + category);

  return (
    <div>
      <h2>Résultat de la calculatrice</h2>
      <p>Score du smartphone : {note}</p>
      <p>Catégorie du smartphone : {category}</p>

    </div>
  );
};

export default Calculatrice;
