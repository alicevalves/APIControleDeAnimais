const firebase = require('firebase');

const firebaseConfig  = require('../config/database');
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

class Animais {
  static async setanimais(data) {
    await db.collection('animais').add(data);
  }

  static async getanimais() {
    const snapshot = await db.collection('animais').get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  static async deleteanimais(id) {
    await db.collection('animais').doc(id).delete();
  }

  static async putanimais(id, data) {
    await db.collection('animais').doc(id).update(data);
  }
}

module.exports = Animais;