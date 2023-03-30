const loginHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector("#user-name").value.trim();
    const password = document.querySelector("#user-password").value.trim();
    if (username && password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        }
    }
}

const signupHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    if (username && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector("#login-form").addEventListener("click", loginHandler);
document.querySelector("#signup-form").addEventListener("click", signupHandler);

