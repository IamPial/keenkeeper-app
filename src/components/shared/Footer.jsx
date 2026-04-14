import React from "react";
import footerLogo from "../../assets/logo-xl.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] pt-20">
      <div className="container mx-auto px-2">
        <div className="text-center pb-10">
          <img className="mx-auto mb-4" src={footerLogo} alt="Footer" />
          <p className="text-[16px] leading-6 text-white/70">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <div className="mt-6 space-y-4">
            <h2 className="text-xl font-medium text-white">Social Links</h2>
            <ul className="flex justify-center items-center gap-3">
              <li>
                <img src={instagram} alt="Instagram" />
              </li>
              <li>
                <img src={facebook} alt="Facebook" />
              </li>
              <li>
                <img src={twitter} alt="Twitter" />
              </li>
            </ul>
          </div>
        </div>
        <div className="divider h-0.5 bg-white/20 my-0"></div>
        <div className="flex flex-col-reverse gap-8 justify-center items-center  md:gap-0 md:flex-row md:justify-between md:items-start  py-8">
          <p className="text-white/70">
            &copy; 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="flex gap-5">
            <span className="text-white/70">Privacy Policy</span>
            <span className="text-white/70">Terms of Service</span>
            <span className="text-white/70">Cookies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
