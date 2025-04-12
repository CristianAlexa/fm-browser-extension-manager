import logoM from "../../assets/images/logo.svg";
import ToggleBtn from "./ToggleBtn";
const ExtensionCard = ({ ext }) => {
  const { name, description, logo, isActive } = ext;
  console.log(logo);

  return (
    <article className="flex flex-col gap-6 bg-customNeutral-50 dark:bg-customNeutral-800 p-4 rounded-2xl shadow-md border border-customNeutral-200 dark:border-customNeutral-600">
      <div className="flex gap-4 items-start">
        <img src={logo} alt={name} className="w-12 h-12 rounded-md" />
        <div>
          <h2 className="text-customNeutral-900 dark:text-customNeutral-100 font-semibold text-lg mb-2">
            {name}
          </h2>
          <p className="text-customNeutral-600 dark:text-customNeutral-300 text-sm">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="cursor-pointer text-sm py-1.5 px-5 text-black dark:text-white border border-customNeutral-200 dark:border-customNeutral-700 rounded-full hover:bg-customRed-700 hover:text-white dark:hover:bg-customRed-700 dark:hover:text-white transition-colors duration-300 ease-in-out">
          Remove
        </button>
        <ToggleBtn />
      </div>
    </article>
  );
};

export default ExtensionCard;
