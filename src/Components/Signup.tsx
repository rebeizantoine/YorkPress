import React, { useState, ChangeEvent } from "react";
import LayoutCard from "./LayoutCard";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Save to localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Signup successful! You can now login.");
    navigate("/login");
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
          Sign Up
        </h2>

        <div className="w-[500px] flex flex-col gap-[50px] mb-3 mt-8">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="pl-[30px] text-light placeholder:text-muted focus:outline-none w-[500px] h-[70px] bg-[#2E3239] rounded-[10px]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            className="pl-[30px] text-light placeholder:text-muted focus:outline-none w-[500px] h-[70px] bg-[#2E3239] rounded-[10px]"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
            className="pl-[30px] text-light placeholder:text-muted focus:outline-none w-[500px] h-[70px] bg-[#2E3239] rounded-[10px]"
          />
        </div>

        <p className="text-muted opacity-50 text-[16px] tracking-[0%] font-normal mb-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-muted opacity-50 text-[16px] tracking-[0%] font-normal underline"
          >
            Login
          </Link>
        </p>

        <div className="w-full flex justify-center">
          <button
            onClick={handleSignup}
            className="mt-2 w-[300px] rounded-[9px] bg-[#F4F6FA] text-[#2E3239] py-3 hover:bg-gray-200 transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </LayoutCard>
  );
};

export default Signup;
