import React from 'react';
import { RouteComponentProps } from 'react-router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLoading,
  IonPage,
  IonToolbar,
  IonIcon,
} from '@ionic/react';
import { useObjectVal } from 'react-firebase-hooks/database';

import firebase from '../../lib/firebase';
import { Note } from '../../lib/types';
import { createOutline } from 'ionicons/icons';
import './ViewNote.css';

const db = firebase.database()

interface ViewNoteProps extends RouteComponentProps<{ id: string; }> { }

const ViewNote: React.FC<ViewNoteProps> = ({ match }) => {
  const [note, loading] = useObjectVal<Note>(db.ref(`notes/${match.params.id}`))

  return (
    <IonPage id="view-note-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Notes" defaultHref="/home" />
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton color="primary" routerLink={`/notes/edit/${match.params.id}`}>
              <IonIcon size="large" icon={createOutline}/>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {note && (
          <div className="ion-padding">
            <h1>{note.title}</h1>
            <p>
              {note.content}
            </p>
          </div>
        )}
        <IonLoading isOpen={ loading } />
      </IonContent>
    </IonPage>
  );
};

export default ViewNote;
