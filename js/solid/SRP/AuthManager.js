// Handles login functionality
class LoginManager {
    login(name, password) {}
}

// Handles logout functionality
class LogoutManager {
    logout() {}
}

// Manages user authentication
class AuthManager {
    constructor() {
        this.loginManager = new LoginManager();
        this.logoutManager = new LogoutManager();
        this.getLoggedInUsername = new GetLoggedInUsername()
    }

    logIn(name, password) {
        this.loginManager.login(name, password);
    }

    logOut() {
        this.logoutManager.logout();
    }
    getLoggedInUsername() {}
    
    // privet 
    hashPassword(passwod){}
    userEntryExistsInDB(name, hash){}
}
 
// Example usage
const authManager = new AuthManager();
authManager.logIn('JohnDoe', 'password');
authManager.logOut();