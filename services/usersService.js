
const { auth, db } = require("../config/firebase");

// Function to save the user object to Firestore in the "users" collection
const saveUserToFirestore = async (user) => {
  try {
    const userDocRef = db.collection("users").doc(user.uid);
    await userDocRef.set(user); // Save the user object to Firestore
  } catch (error) {
    throw new Error("Error saving user to Firestore: " + error.message);
  }
};

const createFirestoreUser = async (userId, userData) => {
    try {
      await db.collection("users").doc(userId).set(userData);
      return { success: true };
    } catch (error) {
      throw new Error("Error creating user in Firestore: " + error.message);
    }
  };
  

module.exports = { saveUserToFirestore, createFirestoreUser };