import { Background1, Background2 } from "@/components/application/backgrounds";
import { Header } from "@/components/application/Header";
import { AdminActions } from "@/components/auth/admin-actions";
import { AuthErrors } from "@/components/auth/auth-errors";
import { DecodedToken } from "@/components/auth/decoded-token";
import { ProfileCard } from "@/components/auth/profile-card";
import { UserActions } from "@/components/auth/user-actions";

export default function ProtectedPage() {
  return (
    <div className="bg-white">
      <Header />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Background1 />
        <div className="mx-auto max-w-2xl space-y-12 py-32 pb-0 sm:pt-48 lg:pt-56">
          <AuthErrors />
          <ProfileCard />
          <AdminActions />
          <UserActions />
          <DecodedToken />
        </div>
        <Background2 />
      </div>
    </div>
  );
}
