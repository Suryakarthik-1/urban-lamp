import LoginForm from "../components/auth/LoginForm";  // Import the LoginForm component

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <LoginForm />  {/* Use the LoginForm component */}
    </div>
  );
}