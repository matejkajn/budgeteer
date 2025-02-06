"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signout } from "@/lib/auth-actions";
import { createClient } from "@/utils/supabase/client";
import { TbLogin, TbLogout } from "react-icons/tb";

const LogInLogOutButton = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);
  if (user) {
    return (
      <Button
        className="font-bold"
        onClick={() => {
          signout();
          setUser(null);
        }}
      >
        Logout
        <TbLogout />
      </Button>
    );
  }
  return (
    <Button
      className="font-bold"
      onClick={() => {
        router.push("/login");
      }}
    >
      Login <TbLogin />
    </Button>
  );
};
export default LogInLogOutButton;
