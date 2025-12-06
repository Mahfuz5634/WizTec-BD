import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-12 ">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-t-3xl bg-gradient-to-b from-[#3b1543] via-[#2b1235] to-[#13091d] text-white">
        <div className="relative px-6 pt-10 pb-6 md:px-10">
         
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            {/* About */}
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">
                About Us
              </h3>
              <ul className="space-y-1 text-sm text-gray-200/80">
                <li>Resources</li>
                <li>Company</li>
                <li>Property</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">
                Contact Us
              </h3>
              <p className="text-sm text-gray-200/80">hello.abc@gmail.com</p>
              <p className="mt-1 text-sm text-gray-200/80">+0122345567</p>
            </div>

            {/* Follow */}
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="flex items-center gap-3 text-gray-200/90">
                {[FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaTiktok].map(
                  (Icon, i) => (
                    <span
                      key={i}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/35 text-sm transition hover:bg-white hover:text-[#2b1235]"
                    >
                      <Icon />
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* copyright */}
          <div className="mt-8 text-right text-xs text-gray-300/80">
            © 2025 WiztecBD. All rights reserved.
          </div>

         
          <div className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden">
            <h1 className="whitespace-nowrap text-center px-6 pb-4 text-[11vw] font-extrabold tracking-tight text-white/15 md:text-[7vw]">
              WiztecBD
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
