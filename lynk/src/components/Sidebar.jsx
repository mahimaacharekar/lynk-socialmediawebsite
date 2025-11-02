import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { name: "Home", icon: "🏠", to: "/" },
    { name: "Explore", icon: "🔍", to: "/explore" },
    { name: "Reels", icon: "🎞️", to: "/reels" },
    { name: "Messages", icon: "💬", to: "/messages" },
    { name: "Notifications", icon: "❤️", to: "/notifications" },
    { name: "Create", icon: "➕", to: "/create" },
    { name: "Profile", icon: "👤", to: "/profile" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-56 bg-[#3B2E2A] border-r border-gray-200 flex flex-col justify-between p-4">
    
      <div>
        <h1 className="text-2xl font-bold text-[#f3f4f6] mb-8 ml-3">Lynk</h1>

        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition text-lg ${
                  isActive
                    ? "bg-[#EADDD0] text-[#f3f4f6] font-semibold"
                    : "text-[#f3f4f6] hover:bg-[#EADDD0] hover:text-[#3B2E2A]"
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
