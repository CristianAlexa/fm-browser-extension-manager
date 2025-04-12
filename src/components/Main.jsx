import { useEffect, useState } from "react";
import Button from "./ui/Button";
import ExtensionCard from "./ui/ExtensionCard";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [extensions, setExtensions] = useState(null);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setExtensions(result);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFilter = (name) => {
    setFilter(name);
  };

  const handleRemove = (name) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));
  };

  const handleToggle = (name) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const filteredExtensions = extensions?.filter((ext) => {
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return true;
  });

  return (
    <main className="max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center mb-8 ">
        <h1 className="text-3xl font-semibold dark:text-white">
          Extension List
        </h1>
        <div className="flex gap-4 items-center">
          <Button id={"all"} handleFilter={handleFilter}>
            All
          </Button>
          <Button id={"active"} handleFilter={handleFilter}>
            Active
          </Button>
          <Button id={"inactive"} handleFilter={handleFilter}>
            Inactive
          </Button>
        </div>
      </div>
      {loading ? (
        <h2>Loading Extensions</h2>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredExtensions &&
            filteredExtensions.map((ext) => (
              <ExtensionCard
                key={ext.name}
                handleRemove={handleRemove}
                handleToggle={handleToggle}
                {...ext}
              />
            ))}
        </section>
      )}
    </main>
  );
};

export default Main;
