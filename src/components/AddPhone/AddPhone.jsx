import React from "react";
import InputList from "../Element/InputList";
import InputText from "../Element/InputText";
import WhiteButton from "../Element/WhiteButton";
const handleValidation = () => {}
const AddPhone = () => {
  return (
    <div className="addPhone">
      <h1>Ajout d'un smartphone</h1>
      <div className="Box-whitout-header">
        <InputList
          label="Systeme d'exploitation :"
          inputMessage="Selectionner votre systeme d'exploitation"
          data={[
            { value: "Android", name: "Android" },
            { value: "IOS", name: "IOS" },

          ]}
        />
        <InputList
          label="Marque :"
          inputMessage="Selectionner la marque"
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
          label="Modele du smartphone"
          inputMessage="Iphone 10, galaxy s23 , ..." type="text"
        />

        <InputList
          label="RAM :"
          inputMessage="Selectionner la RAM"
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
          inputMessage="Selectionner le stokacge"
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
          inputMessage="Selectionner la taille de l'écran"
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
          inputMessage="Selectionner le reseau"
          data={[
            { value: "3G", name: "3G" },
            { value: "4G", name: "4G" },
            { value: "5G", name: "5G" },
          ]}
        />

        <InputList
          label="Etat :"
          inputMessage="Selectionner l'état du smartphone"
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
          inputMessage="Présent ? :"
          data={[
            { value: "oui", name: "oui" },
            { value: "non", name: "non" },
          ]}
        />
        <InputText
          label="Code IMEI"
          inputMessage="CODE IMEI" type="text"
        />

        <WhiteButton 
                    buttonName="Ajouter"
                    buttonFunction={handleValidation}
         />

      </div>
    </div>
  );
};

export default AddPhone;
