<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC_7Vb0LpGSrf9jVoRNN4w9zAZhw4H231o",
    authDomain: "mymediaapp-ed022.firebaseapp.com",
    projectId: "mymediaapp-ed022",
    storageBucket: "mymediaapp-ed022.firebasestorage.app",
    messagingSenderId: "895163131947",
    appId: "1:895163131947:web:ea4f0c621849163851626e",
    measurementId: "G-V5PCQQM5B3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>