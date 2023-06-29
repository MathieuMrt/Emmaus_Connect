import React, { useState } from "react";
import InputList from "../Element/InputList";
import Calculatrice, { calculateNote, getCategory } from "../Element/Calculatrice";
import PopupResultat from "../Element/Popup";

const Search = () => {
  const [formData, setFormData] = useState({
    systeme_d_exploitation: "",
    ram: "",
    stockage: "",
    reseau: "",
    etat: "",
    chargeur: "",
  });
  const [note, setNote] = useState(null);
  const [category, setCategory] = useState(null);

  const handleChange = (e) => {
    setFormData((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedNote = calculateNote(formData);
    const calculatedCategory = getCategory(calculatedNote);
    setNote(calculatedNote);
    setCategory(calculatedCategory);
  };

  const closePopup = () => {
    setNote(null);
    setCategory(null);
  };
  console.log("coucou",note);

  return (
  <div className="Search">
    <form onSubmit={handleSubmit}className="input">

      <h1>Rechercher un prix</h1>
      <div >
        <InputList
          label="Systeme d'exploitation :"
          name="systeme_d_exploitation"
          inputMessage="Selectionner votre systeme d'exploitation"
          handleChange={handleChange}
          data={[
            { value: "Android", name: "Android" },
            { value: "IOS", name: "IOS" },

          ]}
        />

        <InputList
          label="RAM :"
          name="ram"
          inputMessage="Selectionner la RAM"
          handleChange={handleChange}
          data={[
            { value: "1 Go", name: "1 Go" },
            { value: "2 Go", name: "2 Go" },
            { value: "3 Go", name: "3 Go" },
            { value: "4 Go", name: "4 Go" },
            { value: "6 Go", name: "6 Go" },
            { value: "8 Go", name: "8 Go" },
            { value: "10 Go", name: "10 Go" },
            { value: "12 Go", name: "12 Go" },
            { value: "16 Go", name: "16 Go" },
            { value: "32 Go", name: "32 Go" },
          ]}
        />

        <InputList
          label="Stockage :"
          name="stockage"
          inputMessage="Selectionner le stokacge"
          handleChange={handleChange}
          data={[
            { value: "16 Go", name: "16 Go" },
            { value: "32 Go", name: "32 Go" },
            { value: "64 Go", name: "64 Go" },
            { value: "128 Go", name: "128 Go" },
            { value: "256 Go", name: "256 Go" },
            { value: "512 Go", name: "512 Go" },
            { value: "1024 Go", name: "1024 Go" },

          ]}
        />


        <InputList
          label="Réseau :"
          name="reseau"
          inputMessage="Selectionner le reseau"
          handleChange={handleChange}
          data={[
            { value: "3G", name: "3G" },
            { value: "4G", name: "4G" },
            { value: "5G", name: "5G" },
          ]}
        />

        <InputList
          label="Etat :"
          name="etat"
          inputMessage="Selectionner l'état du smartphone"
          handleChange={handleChange}
          data={[
            { value: "Iréparable", name: "Iréparable" },
            { value: "Réparable", name: "Réparable" },
            { value: "Bloqué", name: "Bloqué" },
            { value: "Reconditionnable", name: "Reconditionnable" },
            { value: "Reconditionné", name: "Reconditionné" },
          ]}
        />

        <InputList
          label="Chargeur :"
          name="chargeur"
          inputMessage="Présent ? :"
          handleChange={handleChange}
          data={[
            { value: "oui", name: "oui" },
            { value: "non", name: "non" },

          ]}
        />
          <button type="submit">Calculer la note</button>
      </div>
    </form>
    {note !== null && (
  <PopupResultat note={note} category={category} onClose={closePopup} />
  )}</div>
  
  
  );
};

export default Search;