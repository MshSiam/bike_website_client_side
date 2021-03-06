import { useEffect, useState } from "react"
import initializeFirebase from "../firebase/firebase.init"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
  getIdToken
} from "firebase/auth"

initializeFirebase()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState("")
  const [admin, setAdmin] = useState(false)
  const [token, setToken] = useState("")

  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()

  // register
  const registerUser = (email, password, name, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("")
        const newUser = { email, displayName: name }
        setUser(newUser)
        // save user to the database
        saveUser(email, name, "POST")
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        })
          .then(() => {})
          .catch((error) => {})
        history.replace("/")
      })
      .catch((error) => {
        setAuthError(error.message)
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }

  // // observing user // //
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        getIdToken(user).then((idToken) => {
          setToken(idToken)
        })
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unsubscribe
  }, [])

  // logout
  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  //  login user
  const loginUser = (email, password, location, history) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/"
        history.replace(destination)
        setAuthError("")
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  // handleGoogleSignIn
  const signInWithGoogle = (location, history) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user
        setAuthError("")
        saveUser(user.email, user.displayName, "PUT")
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  // save user to dab
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName }
    fetch(`https://fast-brushlands-19287.herokuapp.com/users`, {
      method: method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
  }

  // admin matching
  useEffect(() => {
    fetch(`https://fast-brushlands-19287.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin))
  }, [user?.email])

  return {
    user,
    admin,
    registerUser,
    loginUser,
    logOut,
    token,
    isLoading,
    authError,
    signInWithGoogle
  }
}

export default useFirebase
