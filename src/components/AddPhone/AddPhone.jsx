import React, { useState } from "react";
import InputList from "../Element/InputList";
import InputText from "../Element/InputText";
import InputImage from "../Element/InputImage";
import WhiteButton from "../Element/WhiteButton";




function AddPhone() {

  const [tumevoie, settumevoieplus] = useState(undefined);
  const handleClick = () => {
    return settumevoieplus(true);
  };



  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("http://localhost:8000/add.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);

    } catch (error) {
      console.log("Error:", error);
      setResult("An error occurred while sending the request.");
    }
  };
  const [formData, setFormData] = useState({
    systeme_d_exploitation: "",
    marque: "",
    modele_du_smartphone: "",
    ram: "",
    stockage: "",
    taille_ecran: "",
    reseau: "",
    etat: "",
    chargeur: "",
    photo: "",
    imei: ""
  })

  const handleChange = (e) => {
    setFormData((preiousValue) => ({
      ...preiousValue, [e.target.name]: e.target.value
    }))
    console.log(formData);
  }
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
            name="systeme_d_exploitation"
            inputMessage="Selectionner votre systeme d'exploitation"
            handleChange={handleChange}
            data={[
              { value: "Android", name: "Android" },
              { value: "IOS", name: "IOS" },

            ]}
          />
          <InputList
            label="Marque :"
            name="marque"
            inputMessage="Selectionner la marque"
            handleChange={handleChange}
            data={[
              { value: "Samsung", name: "Samsung" },
              { value: "Apple", name: "Apple" },
              { value: "LG", name: "LG" },
              { value: "Xaomi", name: "Xaomi" },
              { value: "Huawei", name: "Huawei" },
              { value: "Sony", name: "Sony" },
              { value: "Honor", name: "Honor" },
              { value: "Google ", name: "Google " },

            ]}
          />

          <InputText
            type="texte"
            label="Modele du smartphone"
            name="modele_du_smartphone"
            value={formData.modele_du_smartphone}
            placeholder="Iphone 10, galaxy s23 , ..."
            handleChange={handleChange}

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
            label="Taille écran :"
            name="taille_ecran"
            inputMessage="Selectionner la taille de l'écran"
            handleChange={handleChange}
            data={[
              { value: "3.5', 8.9 cm", name: "3.5', 8.9 cm" },
              { value: "4', 10.2 cm", name: "4', 10.2 cm" },
              { value: "5', 12.7 cm", name: "5', 12.7 cm" },
              { value: "6', 15.2 cm", name: "6', 15.2 cm" },
              { value: "7', 17.8 cm", name: "7', 17.8 cm" },
              { value: "8', 20.3 cm", name: "8', 20.3 cm" },
              { value: "9', 22.9 cm", name: "9', 22.9 cm" },
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

          <InputImage
            label="Photo"
            name="photo"
            handleChange={handleChange}
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

<button type="submit">Ajouter</button>
        
        </form>
      </div>
    </div>
  );
};

export default AddPhone;
