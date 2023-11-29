"use client";
import Dropdown from "../molecules/dropdown";
import BusinessCard from "../molecules/businessCard";
import { Store } from "../../../../types";
import { useSearchParams, useRouter } from "next/navigation";
import CloseBadge from "../atoms/closeBadge";
import { useEffect, useState } from "react";

export default function DirectoryBody({
  businesses,
  categories,
  neighbourhoods,
}: {
  businesses: Store[];
  categories: string[];
  neighbourhoods: string[];
}) {
  const router = useRouter();
  const searchText = useSearchParams().get("search") || "";
  const categoryText = useSearchParams().get("category") || "";
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedNeighbourhood, setSelectedNeighbourhood] =
    useState("All Neighbourhoods");
  const [randomizedBusinesses, setRandomizedBusinesses] = useState<Store[]>([]);

  const filteredBusinesses = businesses.filter((business) => {
    const categoryMatches =
      selectedCategory == "All Categories" ||
      business.store_category === selectedCategory;
    const locationMatches =
      selectedNeighbourhood == "All Neighbourhoods" ||
      business.location === selectedNeighbourhood;
    const nameIncludesSearchText =
      !searchText ||
      business.store_name.toLowerCase().includes(searchText.toLowerCase());

    return categoryMatches && locationMatches && nameIncludesSearchText;
  });

  useEffect(() => {
    if (categoryText) {
      setSelectedCategory(categoryText);
    }

    setRandomizedBusinesses(filteredBusinesses.sort(() => Math.random() - 0.5));
  }, [businesses, selectedCategory, selectedNeighbourhood, searchText]);

  return (
    <div className="pt-24 grid grid-cols-12 min-h-[100vh]">
      <div className="col-start-2 col-end-12">
        <div className="flex flex row justify-between items-center">
          <div className=" flex flex-col sm:flex-row gap-2">
            <Dropdown
              name="Neighbourhood"
              options={neighbourhoods}
              selectedValue={selectedNeighbourhood}
              setSelectedValue={setSelectedNeighbourhood}
            />
            <Dropdown
              name="Category"
              options={categories}
              selectedValue={selectedCategory}
              setSelectedValue={setSelectedCategory}
            />
            {searchText ? (
              <div className="flex flex-row gap-2 items-center">
                <h1>Searching for: {searchText}</h1>
                <CloseBadge
                  onClickClose={() => {
                    router.replace("/directory");
                  }}
                />
              </div>
            ) : null}
          </div>

          <h1 className="font-medium">
            Results: {randomizedBusinesses.length}
          </h1>
        </div>
        <div className="mb-16">
          {randomizedBusinesses.map((business) => (
            <BusinessCard
              name={business.store_name}
              image={business.img_main}
              id={business.store_id}
              owner={business.owner_name}
              location={business.location}
              category={business.store_category}
              short_summary={business.short_summary}
              extended_summary={business.extended_summary}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
