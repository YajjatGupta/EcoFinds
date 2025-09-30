import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow w-96">
        <h1 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <form className="flex flex-col gap-4">
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="border px-3 py-2 rounded" />
          )}
          <input type="email" placeholder="Email" className="border px-3 py-2 rounded" />
          <input type="password" placeholder="Password" className="border px-3 py-2 rounded" />
          <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-4">
          {isLogin ? "New user?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-green-600 font-bold">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
