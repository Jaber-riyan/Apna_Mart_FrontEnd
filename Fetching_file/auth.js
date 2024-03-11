const userRegistration = (event) => {
    event.preventDefault();
    const username = getValue("username");
    const first_name = getValue("first_name");
    const last_name = getValue("last_name");
    const email = getValue("email");
    const password = getValue("password");
    const confirm_password = getValue("confirm_password");
    const info = {
        username,
        first_name,
        last_name,
        email,
        password,
        confirm_password,
    };

    if (password === confirm_password) {
        document.getElementById("error").innerText = "";
        if (
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
                password
            )
        ) {
            console.log(info);

            fetch("http://127.0.0.1:8000/user/register/", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(info),
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
            alert("Check Your Mail For Activate Account")
            window.location.href = "login.html";

        } else {
            document.getElementById("error").innerText =
                "pass must contain eight characters, at least one letter, one number and one special character:";
        }
    } else {
        document.getElementById("error").innerText =
            "password and confirm password do not match";
    }
};

const getValue = (id) => {
    const value = document.getElementById(id).value
    return value
}


const userLogin = (event) => {
    event.preventDefault();
    const username = getValue("login-username");
    const password = getValue("login-password");
    console.log(username, password);
    if ((username, password)) {
        console.log(username, password);
        fetch("http://127.0.0.1:8000/user/login/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.token && data.user_id) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user_id", data.user_id);
                    alert("Login Successfully")
                    window.location.href = "index.html";
                }
                else {
                    document.getElementById("error").innerText = data.error
                }
            });
    }
};


const userlogOut = () => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:8000/user/logout/", {
        method: "POST",
        headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            // console.log(PI);
            alert("Logout Successfully")
            window.location.href = "index.html";
        });
};


const userProfile = () => {
    const user_id = localStorage.getItem("user_id");
    const parent = document.getElementById('user_profile')
    fetch(`http://127.0.0.1:8000/user/list/${user_id}/`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            parent.innerHTML = `
            <div class="login-container" style="margin-right:470px; margin-bottom:100px">
                <div class="col-md-12">
                    <form action="" onsubmit="userRegistration(event)">
                        <p id="error" style="color: red; background-color:aqua; font-weight:bold; font-size:20px"></p>
                        <input
                            id="username"
                            type="text"
                            class="input"
                            value="${data.username}"
                            placeholder="username"
                            required
                        />
                        <input
                            id="first_name"
                            type="text"
                            class="input"
                            value="${data.first_name}"
                            placeholder="First Name"
                            required
                        />
                        <input
                            id="last_name"
                            type="text"
                            class="input"
                            value="${data.last_name}"
                            placeholder="last Name"
                            required
                        />

                        <input
                            id="email"
                            type="email"
                            class="input"
                            value="${data.email}"
                            placeholder="Email"
                            required
                        />
                    </form>
                </div>
            </div>
            `
        })
    // .catch(err=>console.log(err))

}


userProfile()

