import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const useLoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      const supabase = createClient();

      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };

    fetchStatus();
  }, []);

  return { isLoggedIn };
};

export default useLoginStatus;
