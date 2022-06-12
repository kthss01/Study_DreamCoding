// bad
// UI 담당한 로직에는 UI 관련 로직만 있어야 함
class LoginView {
    constructor(userPresenter) {
        this.userPresenter = userPresenter;
    }

    display() {
        // display view...
    }
}

class userPresenter {
    userService;
    login() {
        this.userService
            .login() //
            .then((result) => {
                if (result.success) {
                    localStorage.setItem("TOKEN", result.token);
                    return {
                        displayMessage: result.message,
                        buttonText: "Go Home",
                    };
                } else {
                    return {
                        displayMessage: "Unable to login",
                        buttonText: "OK",
                    };
                }
            })
            .catch((error) => {
                // sSomething really went wrong
            });
    }
}
