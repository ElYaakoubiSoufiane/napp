"use client";
import React from "react";
import { useState } from "react";

import AuthPage from "./authpage";
import ChatsPage from "./Chatpage";

function Page() {
  const [user, setUser] = useState<string>("");

  if (!user) {
    return <AuthPage onAuth={(user: any) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}
export default Page;
