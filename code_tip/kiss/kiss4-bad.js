// bad
// UI 담당한 로직에는 UI 관련 로직만 있어야 함
class LoginView {
    display() {
        // display view...
    }

    onLoginButtonClick() {
        fetch("https://server.com")
            .then((data) => data.json())
            .then((data) => {
                if (data.token) {
                    localStorage.setItem("TOKEN", data.token);
                    // update UI elements
                } else {
                    // ...
                }
            })
            .catch((error) => {
                if (error.statusCode === 300) {
                    // retry fetch?
                } else if (error.statusCode === 400) {
                    // ...
                }
            })
            .catch((error) => {
                if (error.statucCode === 500) {
                    // retry fetch?
                } else if (error.statusCode === 400) {
                    // handle an error
                }
                // show error message
            });
    }
}
