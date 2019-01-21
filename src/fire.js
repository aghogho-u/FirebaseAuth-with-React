import firebase from 'firebase';
import {secrets} from './secrets';

const fire = firebase.initializeApp(secrets);

export default fire;
