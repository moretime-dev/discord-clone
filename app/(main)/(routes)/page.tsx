import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
export default function Home() {
  return (
    <section>
      <div className="bg-slate-100 w-12 p-2">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="w-12 p-2">
        <ModeToggle />
      </div>
    </section>
  );
}
