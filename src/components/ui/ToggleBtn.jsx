const ToggleBtn = ({ name, active, handleToggle }) => {
  return (
    <button
      onClick={() => handleToggle(name)}
      className={`cursor-pointer w-12 h-6 rounded-full bg-customNeutral-100 dark:bg-customNeutral-700 p-1 flex transition-colors duration-300 ease-in-out
        ${active ? " bg-customRed-700 dark:bg-customRed-500" : ""}`}
    >
      <span
        className={`w-4 h-4 rounded-full bg-customNeutral-50 transform transition-transform duration-150 ${
          active ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
};

export default ToggleBtn;
