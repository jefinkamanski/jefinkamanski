import React, { useState, useEffect } from 'react';
import { IonAvatar, IonButtons, IonCard, IonCol, IonContent, IonFab, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonFabButton } from '@ionic/react';
import api from "../service/conexao-api";
import CadastrarAP from './CadastrarAP'
import avatar from '../img/business.png';
import { add } from 'ionicons/icons';
import '../Global.css';

const Apartamentos: React.FC = () => {

  const [apartamentos, setData] = useState([]);
  useEffect(() => {
    api.get('apartamentos')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })

  }, []);

  const cadastrar = () => {
    console.log('this is:', this);

  }
  

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Apartamentos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Apartamentos</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem color="ligth" >
          <IonLabel>
            {apartamentos.map((apartamentos: any) => (
              <IonCard key={apartamentos.id}>
                <IonRow>
                  <IonCol size="2" sizeSm="1">
                 
                    <IonAvatar>
                    <img className="img" src={avatar} />
                    </IonAvatar>
                  </IonCol>

                 
                  <IonCol  size="10" sizeSm="11">
                    <IonLabel>
                      <div>
                        <h2>Bloco: {apartamentos.bloco}</h2>
                        <h2>Apartamento: {apartamentos.numero}</h2>
                        <p>Moradores: {apartamentos.moradores}</p>
                      </div>
                    </IonLabel>
                  </IonCol>
                </IonRow>
              </IonCard>
            ))}
          </IonLabel>
        </IonItem>
        
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton  routerLink="/cadastrarAP" color="primary">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Apartamentos;
