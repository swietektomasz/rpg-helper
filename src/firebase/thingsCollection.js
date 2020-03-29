import { database } from "./firebase";

const thingsRef = database.collection("things");

export const getThings = async () => {
  return await thingsRef.get().then(querySnapshot =>
    querySnapshot.docs.reduce((acc, doc) => {
      acc.push({ id: doc.id, imageUrl: doc.data().imageUrl });
      return acc;
    }, [])
  );
};

export const addThing = async thing => {
  return thingsRef
    .add({
      imageUrl: thing.imageUrl
    })
    .then(docRef => {
      return docRef
        .get()
        .then(doc => ({ id: doc.id, imageUrl: doc.data().imageUrl }));
    });
};
