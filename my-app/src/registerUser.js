import { auth } from './firebase';

const registerUser = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    // Registration successful
  } catch (error) {
    // Handle registration error
    console.log(error.message);
  }
};

export default registerUser;
