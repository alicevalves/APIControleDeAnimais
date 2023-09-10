const firebase = require('firebase');
const firebaseConfig  = require('../config/database');

const db = firebase.firestore();


class Ongs {
  static async adicionarOng(data) {
    await db.collection('ongs').add(data);
  }

  static async listarOngs() {
    const snapshot = await db.collection('ongs').get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  static async excluirOng(id) {
    await db.collection('ongs').doc(id).delete();
  }

  static async atualizarOng(id, data) {
    await db.collection('ongs').doc(id).update(data);
  }
}

module.exports = Ongs;