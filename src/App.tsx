import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, useIonViewWillEnter } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseAuthProvider } from '@react-firebase/auth';

import Home from './pages/Home/Home';
import ViewMessage from './pages/ViewMessage/ViewMessage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const firebaseConfig = {
  apiKey: 'AIzaSyAyUk2ke2eWT852LQ2nK9P0_Kps7M9ffJg',
  authDomain: 'cs-4261-1.firebaseapp.com',
  databaseURL: 'https://cs-4261-1.firebaseio.com',
  projectId: 'cs-4261-1',
  storageBucket: 'cs-4261-1.appspot.com',
  messagingSenderId: '441489768719',
  appId: '1:441489768719:web:f26c51e4012efa44abfe7a'
};

const App: React.FC = () => {
  useIonViewWillEnter(() => {
    firebase.auth().signInAnonymously();
  }, []);

  return (
    <IonApp>
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/message/:id" component={ViewMessage} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </FirebaseAuthProvider>
    </IonApp>
  );
};

export default App;
