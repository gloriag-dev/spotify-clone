import { Button } from "@/components/ui/button";
import Apple from "@/icons/Apple";
import Facebook from "@/icons/Facebook";
import Google from "@/icons/Google";

const SocialLoginGroup = () => {
  return (
    <>
      <Button variant="outline" className="w-[324px] flex justify-evenly">
        <div className="flex items-center gap-8">
          <Google />
          <span className="w-32 text-center">Continue with Google</span>
        </div>
      </Button>
      <Button variant="outline" className="w-[324px] flex justify-evenly">
        <div className="flex items-center gap-8">
          <Facebook />
          <span className="w-32 text-center">Continue with Facebook</span>
        </div>
      </Button>
      <Button variant="outline" className="w-[324px] flex justify-evenly">
        <div className="flex items-center gap-8">
          <Apple />
          <span className="w-32 text-center">Continue with Apple</span>
        </div>
      </Button>
    </>
  );
};
export default SocialLoginGroup;
