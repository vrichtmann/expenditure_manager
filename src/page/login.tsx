import { useState } from "react";
import { loginStore } from "../hooks/loginstore";

export default function Login() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const { setLogged } = loginStore();

  const login = () => {
    if (userEmail === "vrichtmann@gmail.com" && userPassword === "123456") {
      setLogged(true);
    } else {
      alert("password incorrect");
    }
  };

  return (
    <div className="flex w-screen h-screen bg-gradient-to-b md:bg-gradient-to-r from-blue-700 from-20% via-teal-600 via-40%  ">
      <div className="bg-white w-1/3 m-auto p-5 rounded-md">
        <h1 className="text-center text-md font-bold">
          Welcome to Expenditure manager
        </h1>
        <p className="text-center">Organize your expenses</p>
        <div className="w-full flex mt-4 flex-col">
          <p className="text-sm mb-2">Insert your email</p>
          <input
            className="border-solid border-black border-2 w-full text-black p-4 "
            placeholder="Email"
            id="username"
            type="email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <p className="text-sm mt-4 mb-2">Insert your password</p>
          <input
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            className="border-solid border-black border-2 w w-full p-4"
            placeholder="password"
            id="password"
            type="password"
            value={userPassword}
          />

          <div className="w-full flex mt-4">
            <button
              onClick={login}
              className="bg-sky-500 p-5 m-auto w-64 font-bold text-white text-2xl rounded-2xl"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
