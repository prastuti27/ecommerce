import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../service/Api/Login/LoginApiSlice";
import Typography from "../../components/Typography";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage("Both fields are required.");
      return;
    }
    try {
      const response = await login({ username, password }).unwrap();
      console.log("Login successful:", response);
      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (err) {
      console.error("Failed to login:", err);
      setErrorMessage("Failed to login. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-lg">
        <Typography variant="h2" content="Login" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          {errorMessage && (
            <div className="p-2 text-red-400 bg-gray-700 rounded-md">
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 disabled:bg-gray-400"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        {isSuccess && (
          <div className="p-4 mt-4 text-green-400 bg-gray-700 rounded-md">
            Login successful!
          </div>
        )}
        {isError && (
          <div className="p-4 mt-4 text-red-400 bg-gray-700 rounded-md">
            Error: {(error as Error).message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
