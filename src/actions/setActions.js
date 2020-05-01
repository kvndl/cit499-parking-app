export const checkChange = (value) => {
    return {
        type: "CHECK_CHANGE"
    }
}

export const checkSignIn = (sign)=>{
    return {
        type:"CHECK_SIGN_IN",
        check:sign
    }
}

export const currentUser = (user)=>{
    return {
        type:"CURRENT_USER",
        user:user
    }
}