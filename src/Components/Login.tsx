import React, { useState, ChangeEvent } from "react";
import LayoutCard from "./LayoutCard";
import { Link } from "react-router-dom";
import "../App.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Temporary: For now just log the input
    console.log("Email:", email, "Password:", password);
    alert("Login clicked! (Functionality not implemented yet)");
  };

  return (
    <LayoutCard
      title="TO DO APP"
      subtitle="Stop Procrastinating, Start Organizing"
    >
      <div
        className="ml-0 auto mt-6 border border-[#F4F6FA] opacity-10"
        style={{ width: "1120px" }}
      ></div>
      <div className="flex flex-col gap-4 w-full max-w-[500px] mx-auto mt-6">
        <h2 className="w-full text-center text-[32px] font-normal text-light opacity-50">
          Login
        </h2>
        <div className="w-[500px] h-[200px] flex flex-col gap-[50px] mb-3 mt-8">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="pl-[30px]  text-light placeholder:text-muted focus:outline-none w-[500px] h-[70px] bg-[#2E3239] rounded-[10px]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            className="pl-[30px]  text-light placeholder:text-muted focus:outline-none w-[500px] h-[70px] bg-[#2E3239] rounded-[10px]"
          />
        </div>
        <p className=" text-muted opacity-50 text-[16px] tracking-[0%] font-normal mb-4  ">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="text-muted opacity-50 text-[16px] tracking-[0%] font-normal underline "
          >
            Signup
          </Link>
        </p>
        <div className="w-full flex justify-center">
          <button
            onClick={handleLogin}
            className="mt-2 w-[300px] rounded-[9px] bg-[#F4F6FA] text-[#2E3239] py-3  hover:bg-gray-200 transition"
          >
            Login
          </button>
        </div>
      </div>
    </LayoutCard>
  );
};

export default Login;
