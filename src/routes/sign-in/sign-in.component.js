import { signInwithGooglePopup } from "../../utils/firebase/firebase.util"

import { createUserDocumentFormAuth } from "../../utils/firebase/firebase.util"

const SingIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInwithGooglePopup()
        createUserDocumentFormAuth(user)
    }
    return (
        <div>
        <h1>sign in</h1>
        <button onClick={logGoogleUser}>
            sing in with Googel
        </button>
        </div>
    )
}
export default SingIn