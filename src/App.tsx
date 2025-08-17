import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LayoutCard from "./Components/LayoutCard";
import TodoApp from "./Components/Todoapp";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-app flex items-center justify-center p-4">
        <Routes>
          <Route
            path="/"
            element={
              <LayoutCard
                title="TO DO APP"
                subtitle="Stay organized, stay focused"
              >
                <div className="flex flex-col items-center gap-6 mt-6">
                  <p className="text-muted text-center">TO DO APP</p>
                  <p className="text-muted text-center">
                    Stay organized, stay focused
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Link
                      to="/todo"
                      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-center"
                    >
                      Go to Todo App
                    </Link>
                    <Link
                      to="/login"
                      className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-center"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition text-center"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </LayoutCard>
            }
          />

          <Route path="/todo" element={<TodoApp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
