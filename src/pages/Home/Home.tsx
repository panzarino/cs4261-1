import React from 'react';
import {
    IonButton, IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonLoading,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { addCircle } from 'ionicons/icons';
import { useAuthState } from 'react-firebase-hooks/auth';

import NotesList from '../../components/NotesList/NotesList';

import firebase from '../../lib/firebase';

import './Home.css';

const Home: React.FC = () => {
    const [user, loading] = useAuthState(firebase.auth());

    return (
        <IonPage id="home-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Notes</IonTitle>
                    <IonButtons slot="primary">
                        <IonButton color="primary" routerLink="/notes/new"><IonIcon size="large"
                                                                                    icon={addCircle}/></IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Notes
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/*<IonButton expand="block" routerLink="/notes/new"><IonIcon icon={addOutline}/>&nbsp;New Note</IonButton>*/}

                {user && <NotesList/>}

                <IonLoading message={'Please wait...'} isOpen={loading}/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
