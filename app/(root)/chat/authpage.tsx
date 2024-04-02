import axios from "axios"; import { useState } from "react";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";

// async function getInUserInfo() {
//   const user = await currentUser();
//   if (!user) return null;

//   const userInfo = await fetchUser(user.id);
//   if (!userInfo?.onboarded) redirect("/onboarding");

//   const userData = {
//     secret: userInfo?._id,
//     username: userInfo ? userInfo?.username : user.username,
//   };
//   return userData;
// }
const AuthPage = (props: any) => {
  const [username, setUsername] = useState<string>("");
  const [secret, setSecret] = useState<string>("");
  const onLogin = (e:any) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      // .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e:any) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signupChat", {
        username,
        secret,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      // .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="login-page bg-black min-h-screen max-w-4xl mx-auto flex items-center justify-center">
      <div className="card grid grid-cols-2 gap-10">
        Login Form
        <div className="grid w-full sm:w-auto">
          {" "}
          <form onSubmit={onLogin} className="">
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
              className="text-black bg-white w-full rounded-10px px-3 py-2"
            >
              LOG IN
            </button>
          </form>
        </div>
        <div className="grid w-full sm:w-auto">
          {" "}
          <form onSubmit={onSignup}>
            <div className="title">or Sign Up</div>
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
              className="text-black bg-white w-full rounded-10px px-3 py-2"
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
