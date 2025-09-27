import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="w-11/12 mx-auto flex flex-col sm:flex-row sm:justify-between gap-8 text-white">
        <nav>
          <h1 className="text-2xl font-bold my-7  ">CS — Ticket System</h1>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. <br /> Lorem Ipsum has been the industry's
            standard dummy <br /> text ever since the 1500s, when an <br />{" "}
            unknown printer took a galley of type and <br /> scrambled it to
            make a type specimen book.
          </p>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav className="flex flex-col">
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">GitHub</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
