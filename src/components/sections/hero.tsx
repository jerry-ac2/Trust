import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="z-50 w-full flex h-screen flex-col p-10 gap-8 items-center justify-center bg-cover">
      <h1 className="text-6xl font-bold font-sans">
        The safest way to fund a cause
      </h1>
      <h5 className="text-xl w-6/12 text-center">
        Fund campaigns with confidence using our escrow protected wallet and
        secure OTP voting system
      </h5>
      <Button className="text-xl p-6 rounded-2xl bg-blue-400">
        Get started for free
      </Button>
      <span className="w-full flex items-center justify-center gap-25">
        <img
          src={"/hero-svg/undraw_savings_uwjn.svg"}
          className="w-30 h-30"
          alt=""
        />
        <img
          src={"/hero-svg/undraw_vault_tyfh.svg"}
          className="w-40 h-30"
          alt=""
        />
        <img
          src={"/hero-svg/undraw_wallet_diag (2).svg"}
          className="w-30 h-30"
          alt=""
        />
      </span>
    </div>
  );
}
