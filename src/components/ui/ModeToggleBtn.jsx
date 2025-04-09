import { useDarkMode } from "../../context/ThemeContext";
import { CiCloudMoon } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";

const ModeToggleBtn = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="w-12 h-12 bg-customNeutral-100 dark:bg-customNeutral-700 rounded-xl flex justify-center items-center cursor-pointer"
    >
      {darkMode ? (
        <CiCloudMoon className="w-8 h-8" />
      ) : (
        <IoSunnyOutline className="w-8 h-8" />
      )}
    </button>
  );
};

export default ModeToggleBtn;
