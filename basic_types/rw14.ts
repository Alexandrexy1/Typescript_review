type VerifyUserFn = (user: UserDB, sentUser: UserDB) => boolean;
type UserDB = { username: string, password: string };

export const verifyUser: VerifyUserFn = (user, sentUser) => {
    return user.username === sentUser.username && user.password === sentUser.password;
}

const userDB = { username: "Alex", password: "123456" };
const sentUser = { username: "Alex", password: "123456" };

console.log(verifyUser(userDB, sentUser)); // true 

