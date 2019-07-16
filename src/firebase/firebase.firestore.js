import { firestore } from './firebase.utils';

const firestoreController = {
    createUser: async (userAuth, data) => {
        if (!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapshot = await userRef.get();

        if (!snapshot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();
            try {
                await userRef.set({ displayName, email, createdAt, ...data });
            } catch (err) {
                console.log('Error creating user', err.message);
            }
        }
        return userRef;
    }
}

export default firestoreController;