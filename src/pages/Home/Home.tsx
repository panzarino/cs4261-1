import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonList,
  IonLoading,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import { useAuthState } from 'react-firebase-hooks/auth';

import MessageListItem from '../../components/MessageListItem/MessageListItem';

import firebase from '../../lib/firebase';

import { Message, getMessages } from '../../data/messages';

import './Home.css';

const Home: React.FC = () => {
  const [user, loading, error] = useAuthState(firebase.auth());

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent />
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Notes
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton expand="block"><IonIcon icon={ addOutline } />&nbsp;New Note</IonButton>

        <IonList>
          {messages.map(m => <MessageListItem key={m.id} message={m}/>)}
        </IonList>

        <IonLoading isOpen={ loading } />
      </IonContent>
    </IonPage>
  );
};

export default Home;
