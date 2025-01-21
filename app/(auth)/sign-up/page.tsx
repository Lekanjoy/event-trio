import { SignUpForm } from "@/components/signup-form"

export default function Page({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const message = searchParams?.message
  return (
    <div className="flex min-h-svh w-full bg-muted items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm message={message}/>
      </div>
    </div>
  )
}
