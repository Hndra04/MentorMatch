import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // insert config
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);