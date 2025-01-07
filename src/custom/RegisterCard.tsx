import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Logo from "@/icons/Logo";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import SocialLoginGroup from "./SocialLoginGroup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
type Props = {
  className?: string;
};

type RegisterFormValues = {
  email: string;
};
const RegisterCard = ({ className }: Props) => {
  const form = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(
      z.object({
        email: z.string().email().trim(),
      })
    ),
  });
  const mutation = useMutation({
    mutationFn: (values: RegisterFormValues) => {
      return axios.post("/signup", values);
    },
  });

  const onSubmit = async (values: any) => {
    await mutation.mutateAsync(values);
    form.reset();
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DevTool control={form.control} /> {/* set up the dev tool */}
          <Card className={className}>
            <CardHeader>
              <div className="flex justify-center flex-col items-center text-center">
                <Logo />
                <CardTitle className="text-white text-5xl">
                  Sign up to <br></br>start listening
                </CardTitle>
              </div>
            </CardHeader>
            <CardDescription className="flex items-center flex-col gap-4 mt-4 mb-8">
              <div className=" mt-4 flex flex-col items-center gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ fieldState, field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary ml-2">
                        Email address
                      </FormLabel>
                      <FormControl>
                        <>
                          <Input
                            placeholder="name@domain.com"
                            className="w-[324px]"
                            type="email"
                            {...field}
                          />
                          {fieldState.error && (
                            <FormMessage>
                              Provide a valid email address
                            </FormMessage>
                          )}
                        </>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  variant="default"
                  className="w-[324px]"
                  type="submit"
                  disabled={!form.formState.isValid}
                >
                  Next
                </Button>
              </div>
            </CardDescription>

            <CardContent className="flex items-center flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className=" bg-custom w-[100px] h-px"></div>
                <p className="text-secondary">or</p>
                <div className=" bg-custom w-[100px] h-px"></div>
              </div>
              <SocialLoginGroup />
            </CardContent>
            <CardFooter className="flex items-center flex-col gap-4">
              <div className="flex items-center gap-2 ">
                <span className="text-secondary ">
                  Already have an account?
                </span>
                <span className="text-secondary underline">
                  <a className="hover:text-tertiary">Log in here.</a>
                </span>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
};
RegisterCard.displayName = "RegisterCard";
export default RegisterCard;
