import Link from "next/link";
import React from "react";

const links = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Contact Us" },
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Terms of Service" },
  { href: "#", text: "Help" },
  { href: "#", text: "Support" },
];

function FooterLinks() {
  return (
    <div className="flex flex-wrap items-center gap-1 text-[10px] text-gray-500 font-normal">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <Link href={link.href} className="hover:text-blue-700">
            {link.text}
          </Link>
          {index < links.length - 1 && <span className="mx-1">|</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default FooterLinks;
