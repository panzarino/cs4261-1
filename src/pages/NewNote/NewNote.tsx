import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from '../../lib/firebase';

import './NewNote.css';

const db = firebase.database().ref('notes')

const NewNote: React.FC = () => {
  const history = useHistory();
  const [user] = useAuthState(firebase.auth());
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    await db.push({
      uid: user.uid,
      title: title || 'Untitled',
      content
    });

    history.goBack();
  };

  return (
    <IonPage id="new-note-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Notes" defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <form onSubmit={create}>
          <IonItem className="new-note-input">
            <IonLabel position="floating">Title</IonLabel>
            <IonInput
              value={title}
              onIonChange={e => setTitle(e.detail.value!)}
              autofocus
            />
          </IonItem>
          <IonItem className="new-note-input">
            <IonTextarea
              placeholder="Write your note here..."
              value={content}
              onIonChange={e => setContent(e.detail.value!)}
              autoGrow
              rows={10}
            />
          </IonItem>
          <IonButton expand="block" type="submit">Create Note</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default NewNote;
