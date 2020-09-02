import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel, IonLoading,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {useObjectVal} from 'react-firebase-hooks/database';

import firebase from '../../lib/firebase';
import { Note } from '../../lib/types';

const db = firebase.database()

interface EditNoteProps extends RouteComponentProps<{ id: string; }> { }

const EditNote: React.FC<EditNoteProps> = ({ match }) => {
  const history = useHistory();
  const [note, loading] = useObjectVal<Note>(db.ref(`notes/${match.params.id}`))
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!note) {
      return;
    }

    await db.ref(`notes/${match.params.id}`).update({
      uid: note.uid,
      title: title || 'Untitled',
      content
    });

    history.goBack();
  };

  return (
    <IonPage id="edit-note-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text={ note ? note.title : 'Note' } defaultHref={`/notes/${match.params.id}`} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        { note && (
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
            <IonButton expand="block" type="submit">Update Note</IonButton>
          </form>
        )}

        <IonLoading isOpen={ loading } />
      </IonContent>
    </IonPage>
  );
};

export default EditNote;
