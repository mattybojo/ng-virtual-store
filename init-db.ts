import * as faker from 'faker';
import * as admin from 'firebase-admin';

const serviceAccount = require('./src/app/config/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();

for (let i = 0; i < 100; i++) {
  firestore
    .collection('products')
    .add({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      department: faker.commerce.department(),
      image: 'https://fakeimg.pl/200/',
    })
    .then((docRef: FirebaseFirestore.DocumentReference) => {
      console.log(`Document written: ${docRef.id}`);
    })
    .catch((error: any) => {
      console.error('Error adding document', error);
    });
}
