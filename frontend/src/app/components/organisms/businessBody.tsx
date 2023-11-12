"use client";

import { Store } from "../../../../types";
import { usePathname } from "next/navigation";

export default function BusinessBody({
  allBusinesses,
}: {
  allBusinesses: Store[];
}) {
  const pathname = usePathname();
  const businessId = pathname.split("/")[2];
  const business = allBusinesses.find(
    (business) => business.store_id === businessId
  );

  return (
    <div>
      <h1>{businessId}</h1>
      <p>{business?.store_name}</p>
    </div>
  );
  // }
  return <h1>{pathname}</h1>;
}
