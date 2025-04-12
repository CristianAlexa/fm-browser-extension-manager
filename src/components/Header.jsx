import logo from "../assets/images/logo.svg";
import ThemeToggleBtn from "./ui/ThemeToggleBtn";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 max-w-[1200px] mx-auto my-6  rounded-xl bg-customNeutral-50 dark:bg-customNeutral-800 border border-customNeutral-200 dark:border-none shadow-sm">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-10" />
        <span className="text-2xl font-semibold dark:text-white">
          Extensions
        </span>
      </div>
      <ThemeToggleBtn />
    </header>
  );
};

export default Header;
