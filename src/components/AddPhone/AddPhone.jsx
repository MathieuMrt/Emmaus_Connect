import React, { useState } from "react";
import InputList from "../Element/InputList";
import InputText from "../Element/InputText";
import InputImage from "../Element/InputImage";

import WhiteButton from "../Element/WhiteButton";
import Calculatrice from "../Element/calculatrice";


function AddPhone() {

  const [formData, setFormData] = useState({
    systeme: "",
    marque: "",
    modele: "",
    ram: "",
    stockage: "",
    taille: "",
    reseau: "",
    etat: "",
    chargeur: "",
    imei: ""
  })


function AddPhone() {

  const [tumevoie, settumevoieplus] = useState(undefined);
  const handleClick = () => {
    return settumevoieplus(true);
  };



  const [result, setResult] = useState("");


  const handleSubmit = async (e) => {
  
    try {
      const response = await fetch("http://localhost:8000/add.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.text();
      setResult(data);

    } catch (error) {
      console.log("Error:", error);
      setResult("An error occurred while sending the request.");
    }

  };

  return (

    <div className="addPhone">
      <h1>Ajout d'un smartphone</h1>
      <div className="Box-whitout-header">
        <form
          action="http://localhost:8000/add.php"
          method="post"
          onSubmit={handleSubmit}>
          <InputList
            label="Systeme d'exploitation :"
            name="systeme"
            inputMessage="Selectionner votre systeme d'exploitation"
            handleChange={handleChange}
            data={[
              { value: "1", name: "Android" },
              { value: "2", name: "IOS" },

            ]}
          />
          <InputList
            label="Marque :"
            name="marque"
            inputMessage="Selectionner la marque"
            handleChange={handleChange}
            data={[
              { value: "1", name: "Samsung" },
              { value: "2", name: "Apple" },
              { value: "3", name: "LG" },
              { value: "4", name: "Xaomi" },
              { value: "5", name: "Huawei" },
              { value: "6", name: "Sony" },
              { value: "7", name: "Honor" },
              { value: "8 ", name: "Google " },

            ]}
          />

          <InputText
            type="texte"
            label="Modele du smartphone"
            name="modele"
            value={formData.modele}
            placeholder="Iphone 10, galaxy s23 , ..."
            handleChange={handleChange}

          />

          <InputList
            label="RAM :"
            name="ram"
            inputMessage="Selectionner la RAM"
            handleChange={handleChange}
            data={[
              { value: "1", name: "1 Go" },
              { value: "2", name: "2 Go" },
              { value: "3", name: "3 Go" },
              { value: "4", name: "4 Go" },
              { value: "6", name: "6 Go" },
              { value: "8", name: "8 Go" },
              { value: "10", name: "10 Go" },
              { value: "12", name: "12 Go" },
              { value: "16", name: "16 Go" },
              { value: "32", name: "32 Go" },
            ]}
          />

          <InputList
            label="Stockage :"
            name="stockage"
            inputMessage="Selectionner le stokacge"
            handleChange={handleChange}
            data={[
              { value: "16", name: "16 Go" },
              { value: "32", name: "32 Go" },
              { value: "64", name: "64 Go" },
              { value: "128", name: "128 Go" },
              { value: "256", name: "256 Go" },
              { value: "512", name: "512 Go" },
              { value: "1024", name: "1024 Go" },

            ]}
          />

          <InputList
            label="Taille écran :"
            name="taille"
            inputMessage="Selectionner la taille de l'écran"
            handleChange={handleChange}
            data={[
              { value: "3.5", name: "3.5', 8.9 cm" },
              { value: "4", name: "4', 10.2 cm" },
              { value: "5", name: "5', 12.7 cm" },
              { value: "6", name: "6', 15.2 cm" },
              { value: "7", name: "7', 17.8 cm" },
              { value: "8", name: "8', 20.3 cm" },
              { value: "9", name: "9', 22.9 cm" },
            ]}
          />

          <InputList
            label="Réseau :"
            name="reseau"
            inputMessage="Selectionner le reseau"
            handleChange={handleChange}
            data={[
              { value: "1", name: "3G" },
              { value: "2", name: "4G" },
              { value: "3", name: "5G" },
            ]}
          />

          <InputList
            label="Etat :"
            name="etat"
            inputMessage="Selectionner l'état du smartphone"
            handleChange={handleChange}
            data={[
              { value: "1", name: "Iréparable" },
              { value: "2", name: "Réparable" },
              { value: "3", name: "Bloqué" },
              { value: "4", name: "Reconditionnable" },
              { value: "5", name: "Reconditionné" },
            ]}
          />

          <InputList
            label="Chargeur :"
            name="chargeur"
            inputMessage="Présent ? :"
            handleChange={handleChange}
            data={[
              { value: "1", name: "oui" },
              { value: "0", name: "non" },

            ]}
          />

          <InputImage
            label="Photo"
            name="photo"
            type="file"

          />

          <InputText
            label="Code IMEI"
            type="texte"
            name="imei"
            value={formData.imei}
            placeholder=""
            handleChange={handleChange}

          />
          <div className="bouton">
          <input
            type="submit"
            value="Ajouter"
          />

          <Calculatrice />

        </form>
      </div>
    </div>
  );
};

export default AddPhone;
