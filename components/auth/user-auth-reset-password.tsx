"use client";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import * as z from "zod";
import { userAuthRestPasswordSchema } from "@/lib/validations/auth";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";

interface UserAuthResetPasswordProps
  extends React.HTMLAttributes<HTMLDivElement> {
}

type FormData = z.infer<typeof userAuthRestPasswordSchema>;
const UserAuthResetPassword = ({
                                 className,
                                 ...props
                               }: UserAuthResetPasswordProps) => {
  const router = useRouter();

  const {
    handleSubmit,
  } = useForm<FormData>({
  });

  function onSubmit(data: FormData) {
    router.push("/")
  }

  return (
    <div
      className={cn(
        "mt-6 sm:mx-auto sm:w-full sm:max-w-[480px] xl:max-w-[580px]",
        className
      )}
      {...props}
    >
      <div className="px-6 py-12 shadow-xl mx-2 md:mx-0 sm:rounded-lg sm:px-12 border">
        <div className="mb-3 space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight">
            Forgot your password?
          </h1>
          <p className="text-sm text-muted-foreground">
            Please enter your phone number
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <Label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6"
            >
              Phone number
            </Label>
            <div className="mt-2">
              <Input
                variant="ny"
                type="tel"
                placeholder="Phone number"
                id="phone"
                autoComplete="tel"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={cn(
                buttonVariants({variant: "default"}),
                className
              )}
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAuthResetPassword;