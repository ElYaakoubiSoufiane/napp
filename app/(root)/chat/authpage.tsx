// "use server"
import axios from "axios";
import { useEffect, useState } from "react";
import { currentUser } from "@clerk/nextjs";

const AuthPage = (props: any) => {
  const [username, setUsername] = useState<string>("");
  const [secret, setSecret] = useState<string>("");

  const onLogin = (e: any) => {
    e.preventDefault();
    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "Project-ID": "8e31bff0-d614-490e-a48a-7c649755ff83",
          "User-Name": username,
          "User-Secret": secret,
        },
      })
      .then((r) => props.onAuth({ ...r.data, secret }));
  };

  const onSignup = (e: any) => {
    e.preventDefault();
    axios
      .post(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "655b2459-6f5c-4a0f-894a-91c7c093444c" } }
      )
      .then((r) => props.onAuth({ ...r.data, secret }));
    setUsername("");
  };

  return (
    <div className="login-page bg-black w-[50%] max-h-screen max-w-screen mx-auto p-4 sm:p-0">
      <div className="card mx-auto max-w-screen-sm  space-y-[20px] ">
        <div>
          <form
            onSubmit={onLogin}
            className="mx-auto p-auto flex-row  h-[300px]"
          >
            <div className="title">Login</div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="chat_style"
            />
            <input
              type="password"
              name="secret"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value)}
              className="chat_style"
            />
            <button
              type="submit"
              className="text-white bg-black box-shadow border-[2px]  w-[100px] font-bold rounded-[20px] px-3 py-2"
            >
              LOG IN
            </button>
          </form>
        </div>
        <div>
          <form onSubmit={onSignup}>
            <div className="title">or Sign Up</div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="chat_style"
              value={username}
            />
            <input
              type="password"
              name="secret"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value)}
              className="chat_style"
            />
            <button
              type="submit"
              className="text-black bg-white w-[100px] font-bold rounded-[20px] px-3 py-2"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
