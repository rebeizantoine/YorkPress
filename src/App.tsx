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
          {/* Home page */}
          <Route
            path="/"
            element={
              <LayoutCard
                title="TO DO APP"
                subtitle="Stay organized, stay focused"
              >
                <div className="w-full">
                  <p className="text-muted">
                    Step 1 complete: base theme and layout.
                  </p>
                  <p className="text-muted mt-4">
                    Next: create the Todo app inside this card.
                  </p>
                  <Link
                    to="/todo"
                    className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Go to Todo App
                  </Link>
                  <Link
                    to="/login"
                    className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Go to LOGIN
                  </Link>
                  <Link
                    to="/signup"
                    className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Go to signup
                  </Link>
                </div>
              </LayoutCard>
            }
          />

          {/* Todo page */}
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
