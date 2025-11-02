import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EADDD0]">
      <div className="bg-[#B89F8A] p-8 rounded-2xl shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center mb-6 font-serif text-[#3B2E2A]">
          Log In
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-[#3B2E2A]">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[#3B2E2A] placeholder-[#3B2E2A] focus:outline-none focus:ring-2 focus:ring-[#3B2E2A] focus:border-[#3B2E2A]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-[#3B2E2A]">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[#3B2E2A] placeholder-[#3B2E2A] focus:outline-none focus:ring-2 focus:ring-[#3B2E2A] focus:border-[#3B2E2A]"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3B2E2A] text-white py-2 rounded-lg font-medium hover:bg-[#D2C1B6] transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#3B2E2A] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
