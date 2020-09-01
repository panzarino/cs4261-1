import React from 'react';
import {
  IonItem,
  IonList,
  IonLabel,
  IonLoading,
} from '@ionic/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useList } from 'react-firebase-hooks/database';

import firebase from '../../lib/firebase';

import './NotesList.css';

const db = firebase.database().ref('notes')

const NotesList: React.FC = () => {
  const [user] = useAuthState(firebase.auth());
  const [notes, loading] = useList(db.orderByChild('uid').equalTo(user ? user.uid : ''));

  if (loading) {
    return <IonLoading isOpen={ loading } />;
  }

  return (
    <IonList>
      {notes && notes.map(note => (
        <IonItem key={note.key} routerLink={`/notes/${note.key}`}>
          <IonLabel>
            <h2>{note.val().title}</h2>
            <p>{note.val().content}</p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default NotesList;
