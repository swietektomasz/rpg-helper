import { database } from "./firebase";

const avatarsRef = database.collection("avatars");

export const getAvatars = async () => {
  return await avatarsRef.get().then(querySnapshot =>
    querySnapshot.docs.reduce((acc, doc) => {
      acc.push({ id: doc.id, imageUrl: doc.data().imageUrl });
      return acc;
    }, [])
  );
};

export const addAvatar = async avatar => {
  return avatarsRef
    .add({
      imageUrl: avatar.imageUrl
    })
    .then(docRef => {
      return docRef
        .get()
        .then(doc => ({ id: doc.id, imageUrl: doc.data().imageUrl }));
    });
};
