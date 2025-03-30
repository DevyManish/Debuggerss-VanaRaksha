// firebase.js
import { initializeApp, cert } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import serviceAccount from './serviceAccountKey.js'

const app = initializeApp({
    credential: cert(serviceAccount),
    storageBucket: 'your-storage-bucket'
});

export const db = getFirestore(app);
export { FieldValue };

const bucket = getStorage(app).bucket();

export { bucket }; 