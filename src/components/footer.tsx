import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full py-6 flex items-center justify-center">
      <div className="flex w-8/12 items-center justify-between p-4">
        <div>2025. Trust. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <span>Home</span>
          <span>About</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
        <div className="flex gap-3">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}
