import { SignUpForm } from "@/components/signup-form";

export default async function Page({
  params,
}: {
  params: Promise<{ message: string }>;
}) {
  const message = (await params)?.message;
  return (
    <div className="flex min-h-svh w-full bg-muted items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm message={message} />
      </div>
    </div>
  );
}
