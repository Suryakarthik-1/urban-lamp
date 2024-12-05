// /components/auth/LoginForm.js
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  
    // Here you can add your authentication logic (e.g., API call)

    // For now, we just redirect after form submission
    router.push("/dashboard"); // Redirect to dashboard after successful login
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm" id="ehjfbhjewbjhb">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>
<div className="buttonfrjehvs">

      <button
        type="submit"
        className=""
        >
        Login
      </button>
          </div>
    </form>
  );
}
