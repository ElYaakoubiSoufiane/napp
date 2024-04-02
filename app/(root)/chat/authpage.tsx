// "use server"
import axios from "axios";
import { useEffect, useState } from "react";
import { currentUser } from "@clerk/nextjs";

const AuthPage = (props: any) => {
  const [username, setUsername] = useState<string>("");
  const [secret, setSecret] = useState<string>("");
  const [isLogged, setisLogged] = useState<boolean>(false);

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
      .then((r) => props.onAuth({ ...r.data, secret })).then(()=>localStorage.setItem("isLogged",true));
  };

  const onSignup = (e: any) => {
    e.preventDefault();
    axios
      .post(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "655b2459-6f5c-4a0f-894a-91c7c093444c" } }
      )
      .then((r) => props.onAuth({ ...r.data, secret }))
    setUsername("");
  };
  

  return (
    <div className="login-page bg-black w-fll max-h-screen  mx-auto p-1 sm:p-0">
      <div className="card mx-auto max-w-screen-sm  ">
       
        <div>
          {" "}
          <div className="title font-extralight">Sign Up</div>
          <form onSubmit={onSignup} className="mx-auto flex flex-col mx-auto items-center    h-[200px]">
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
              className="text-white px-auto bg-black box-shadow mx-auto border-[2px]  w-[100px] font-bold rounded-[20px] px-3 py-2"
            >
              SIGN UP
            </button>
          </form>
        </div> <div>
          <form onSubmit={onLogin} className="mx-auto flex flex-col mx-auto items-center    h-[300px]">
            <div className="title  font-extralight">Or Login</div>
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
            <div className="flex text-center  items-center justify-center ">
              {" "}
              <button
                type="submit"
                className="text-white px-auto bg-black box-shadow mx-auto border-[2px]  w-[100px] font-bold rounded-[20px] px-3 py-2"
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
