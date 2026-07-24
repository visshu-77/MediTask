import ProfileCard from "../components/ProfileCard";
import { bricolage } from "../src/font";

export default function DashboardLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <div className={` ${bricolage.className} bg-sideBackground p-4 `}>
      <div className={` ${bricolage.className} flex gap-10 `}>
        <aside className="w-[15%] h-[100vh]">
          <ProfileCard />
        </aside>

        <main className="w-[85%] text-black">
          {children}
        </main>
      </div>
    </div>
  );
}
