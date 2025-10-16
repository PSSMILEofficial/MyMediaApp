<script type="module">
  // Import Firebase SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
  import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
  import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

  // Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyC_7Vb0LpGSrf9jVoRNN4w9zAZhw4H231o",
    authDomain: "mymediaapp-ed022.firebaseapp.com",
    projectId: "mymediaapp-ed022",
    storageBucket: "mymediaapp-ed022.appspot.com", // ✅ FIXED (you had wrong domain)
    messagingSenderId: "895163131947",
    appId: "1:895163131947:web:ea4f0c621849163851626e",
    measurementId: "G-V5PCQQM5B3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  // ---------- SIGN UP ----------
  const signupBtn = document.getElementById("signupBtn");
  if (signupBtn) {
    signupBtn.addEventListener("click", async () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("✅ Sign Up successful!");
      } catch (err) {
        alert("❌ Error: " + err.message);
      }
    });
  }

  // ---------- LOGIN ----------
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("✅ Login successful!");
        window.location.href = "upload.html";
      } catch (err) {
        alert("❌ Error: " + err.message);
      }
    });
  }
</script>
