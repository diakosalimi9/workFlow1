export const fakeLogin = async (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user) {
                if (user.email === "TimCooktimcook@force.com" && user.password === "12345678") {
                    resolve({ token: "admintoken", role: "admin" })
                } else {
                    resolve({ token: Date.now(), role: "user" })
                }
            }else{
                reject({ message: "error" })
            }
        }, 1000);
    })
}