import { useData } from "../context/DataContext";
import Button from "./ui/Button";
import ExtensionCard from "./ui/ExtensionCard";

const Main = () => {
  const { data, loading } = useData();

  return (
    <main className="max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center mb-8 ">
        <h1 className="text-3xl font-semibold dark:text-white">
          Extension List
        </h1>
        <div className="flex gap-4 items-center">
          <Button>All</Button>
          <Button>Active</Button>
          <Button>Inactive</Button>
        </div>
      </div>
      {loading ? (
        <h2>Loading Extensions</h2>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((ext) => (
            <ExtensionCard key={ext.name} ext={ext} />
          ))}
        </section>
      )}
    </main>
  );
};

export default Main;
