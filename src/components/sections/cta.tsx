import { Button } from "../ui/button";

export default function CTA() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-10">
      <div className="flex flex-col gap-4 items-center justify-center bg-blue-500 rounded-3xl p-6">
        <div className="text-white font-bold text-4xl w-8/12 text-center">
          Ready to Start a Secure Contribution?
        </div>
        <div className="text-gray-300 w-9/12 text-center font-semibold">
          Join thousands of others who are funding causes with confidence and
          transparency. Create account today
        </div>
        <Button className="bg-white px-8 text-blue-600">Sign Up Now</Button>
      </div>
    </div>
  );
}
