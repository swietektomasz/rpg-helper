import { database } from "./firebase";

export const getThings = async () => {
  const things = [];
  const thingsRef = database.collection("things");

  await thingsRef.get().then(querySnapshot =>
    querySnapshot.forEach(doc => {
      things.push({ id: doc.id, imageUrl: doc.data().imageUrl });
    })
  );

  return things;
};
