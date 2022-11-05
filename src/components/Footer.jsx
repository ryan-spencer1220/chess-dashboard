import { FaChess } from "react-icons/fa";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-neutral text-primary-content footer-center">
      <div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 24 24"
          className="inline-block fill-current"
        >
          <FaChess />
        </svg>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
