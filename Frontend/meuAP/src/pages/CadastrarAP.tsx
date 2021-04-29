import React, { useState, useEffect } from 'react';
import { IonAvatar, IonButtons, IonCard, IonCol, IonContent, IonFab, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonFabButton, IonInput, IonButton} from '@ionic/react';
import api from "../service/conexao-api";
import moradores from "./Moradores"
import avatar from '../img/business.png';
import { add } from 'ionicons/icons';
import '../Global.css';
import Apartamentos from './Apartamentos';
import { NOMEM } from 'node:dns';

class CadastrarAp extends React.Component {


state = {
      numero: 0,
      bloco: '',
      moradores: ''
    };


  async handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    if(event)
    console.log(this.state)
    api.post(`apartamentos`, this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    // const response = await api.post("posts", event);       
    // alert('Um nome foi enviado: ' + this.state);
  }

  render() {
    return (
      <IonPage >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Cadastrar Apartamentos</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large" placeholder="06">Cadastrar Apartamentos</IonTitle>
            </IonToolbar>
          </IonHeader>
            <form onSubmit={this.handleSubmit}>
              <IonRow>
                <IonCol size="6">
                  <IonItem>
                    <IonLabel position="floating" placeholder="123">Número do Apatamento</IonLabel>
                    <IonInput type="number" value={this.state.numero} name="name"></IonInput>
                  </IonItem>
                </IonCol>
                <IonCol size="6">
                  <IonItem>
                    <IonLabel position="floating" placeholder="02">Número do Bloco</IonLabel>
                    <IonInput type="text"  value={this.state.bloco} ></IonInput>
                  </IonItem>
                </IonCol>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating" placeholder="1, 2, 3">Moradores</IonLabel>
                    <IonInput type="text"  value={this.state.moradores} ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton color="primary" type="submit" ><b>Salvar</b></IonButton>
                </IonCol>
              </IonRow>
            </form>
        </IonContent>
      </IonPage >
    );
  };
}

// const Apartamentos: React.FC = () => {

//   const [apartamentos, setData] = useState([]);
//   useEffect(() => {
//     api.get('apartamentos')
//       .then(res => {
//         setData(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       })

//   }, []);



//   return (

//     <IonPage >
//       <IonHeader>
//         <IonToolbar>
//           <IonButtons slot="start">
//             <IonMenuButton />
//           </IonButtons>
//           <IonTitle>Cadastrar Apartamentos</IonTitle>
//         </IonToolbar>
//       </IonHeader>

//       <IonContent fullscreen>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large" placeholder="06">Cadastrar Apartamentos</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <div className="container">
//           <IonRow>
//             <IonCol size="6">
//               <IonItem>
//                 <IonLabel position="floating" placeholder="123">Número do Apatamento</IonLabel>
//                 <IonInput value=""></IonInput>
//               </IonItem>
//             </IonCol>
//             <IonCol size="6">
//               <IonItem>
//                 <IonLabel position="floating" placeholder="02">Número do Bloco</IonLabel>
//                 <IonInput value=""></IonInput>
//               </IonItem>
//             </IonCol>
//             <IonCol size="12">
//               <IonItem>
//                 <IonLabel position="floating" placeholder="1, 2, 3">Moradores</IonLabel>
//                 <IonInput value=""></IonInput>
//               </IonItem>
//             </IonCol>
//           </IonRow>
//           <IonRow>
//             <IonCol>
//               <IonButton color="primary" ><b>Salvar</b></IonButton>
//             </IonCol>
//           </IonRow>
//         </div>
//       </IonContent>
//     </IonPage >

//   );
// };

export default CadastrarAp;
