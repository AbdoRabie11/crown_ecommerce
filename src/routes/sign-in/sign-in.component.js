import { signInwithGooglePopup } from "../../utils/firebase/firebase.util"

import { createUserDocumentFormAuth , signInwithGoogleRedirect } from "../../utils/firebase/firebase.util"

import Singup from "../../components/signUp/sign-up"
const SingIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInwithGooglePopup()
        createUserDocumentFormAuth(user)
    }
    const GoogleRedirect  = async () => {
        const {user} = await signInwithGoogleRedirect()
        console.log({user});
    }
    return (
        <div>
        <h1>sign in</h1>
        <button onClick={logGoogleUser}>
            sing in with Googel
        </button>
        <Singup />
        {/* <button onClick={GoogleRedirect}>
            sing in with Googel Redirect 
        </button> */}
        </div>
    )
}
export default SingIn