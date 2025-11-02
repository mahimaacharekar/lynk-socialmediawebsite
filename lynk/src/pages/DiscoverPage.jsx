// src/pages/DiscoverPage.jsx
import users from "../data/users";

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-[#EADDD0] py-12 px-6 font-serif">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#3B2E2A]">
        Discover People
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-[#B89F8A] p-6 rounded-2xl shadow-md flex flex-col items-center transition transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#EADDD0]"
            />
            <h3 className="text-lg font-semibold text-[#3B2E2A]">{user.name}</h3>
            <p className="text-[#5C5048] mb-4">@{user.username}</p>
            <button className="bg-[#3B2E2A] text-white px-4 py-2 rounded-lg hover:bg-[#D2C1B6] transition">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
