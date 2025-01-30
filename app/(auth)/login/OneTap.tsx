"use client";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: unknown) => void;
          prompt: () => void;
          renderButton: (element: HTMLElement, config: unknown) => void;
        };
      };
    };
  }
}

const OneTapComponent = () => {
  const router = useRouter();
  const supabase = createClient();
  const toast = useToast();

  const generateNonce = async (): Promise<[string, string]> => {
    const nonce = btoa(
      String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32)))
    );
    const encoder = new TextEncoder();
    const encodedNonce = encoder.encode(nonce);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encodedNonce);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedNonce = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return [nonce, hashedNonce];
  };

  useEffect(() => {
    const initializeGoogleOneTap = async () => {
      // Check if user is already signed in
      const { data } = await supabase.auth.getUser();
      if (data?.user) return;

      const [nonce, hashedNonce] = await generateNonce();

      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: async (response: { credential: string }) => {
            try {
              const { error } = await supabase.auth.signInWithIdToken({
                provider: "google",
                token: response.credential,
                nonce: nonce,
              });

              if (error) throw error;

              toast.toast({
                title: "Successfully signed in!",
                description: "Welcome back!",
              });
              requestAnimationFrame(() => window.location.reload());
            } catch (error) {
              console.error("Error signing in:", error);
              toast.toast({
                variant: "destructive",
                title: "Error signing in",
                description: "An error occurred during sign in",
              });
            }
          },
          nonce: hashedNonce,
          use_fedcm_for_prompt: true, // Enable FedCM for Chrome
        });

        window.google.accounts.id.prompt();
      }
    };

    // Load the Google Identity Services script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = initializeGoogleOneTap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [router]);

  return <div id="g_id_onload" className="fixed top-10 right-0 z-50" />;
};

export default OneTapComponent;
