import api from "../service/conexao-api"
import avatar from '../img/avatar.png';
import '../Global.css';
import { IonButtons, IonCard, IonContent, IonHeader, IonItem, IonList, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonAvatar, IonIcon, IonImg } from '@ionic/react';
import React, { useState, useEffect } from 'react';



const Moradores: React.FC = () => {

  const [morador, setData] = useState([]);

  useEffect(() => {
    api.get('moradores')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })

  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Moradores</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Moradores</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem color="ion-color-primary-contrast">
          <IonLabel>
            {morador.map((morador: any) => (
              <IonCard key={morador.id}>
                <IonList>

                  <IonRow>
                    <IonCol size="2" sizeSm="1">

                      <IonAvatar>
                        <img className="img" src={avatar} />
                      </IonAvatar>
                    </IonCol>


                    <IonCol size="10" sizeSm="11">
                      <IonLabel>
                        <div className="ion-text-start">

                          <h3>{morador.nome}</h3>
                          <h3>{morador.telefone}</h3>
                          <p>{morador.email}</p>
                        </div>
                      </IonLabel>
                    </IonCol>
                  </IonRow>

                </IonList>
              </IonCard>
            ))}
          </IonLabel>
        </IonItem>

      </IonContent>





    </IonPage>
  );
};

export default Moradores;

