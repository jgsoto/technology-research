import { Link } from "react-router-dom";
import { LoginFormFormik } from "../../components/organisms/LoginFormFormik/LoginFormFormik";

export const LoginFormikPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 gap-4">
      <Link to="/" className="self-start text-sm text-blue-600 hover:underline">
        ← Back to Home
      </Link>
      <LoginFormFormik />
    </div>
  );
};
