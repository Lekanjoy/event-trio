import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const useLoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchStatus = async () => {
      const supabase = createClient();

      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
        setUser(data.user)
      }
    };

    fetchStatus();
  }, []);

  return { isLoggedIn, user };
};

export default useLoginStatus;
