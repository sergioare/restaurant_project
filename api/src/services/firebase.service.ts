import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();
const Timestamp = admin.firestore.FieldValue.serverTimestamp();

export { db, Timestamp };
