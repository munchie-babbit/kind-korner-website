import Card from "../atoms/card";
import Image from "next/image";
import { ActionButton } from "../atoms/actionButton";

export default function BusinessCard({
  image,
  name,
  url = "",
  id = "",
}: {
  image?: string;
  name: string;
  url?: string;
  id?: string;
}) {
  return (
    <Card title={name}>
      <div>
        <h1>{name}</h1>
        {image ? (
          <Image src={image} alt="Business image" width={500} height={300} />
        ) : null}
        <ActionButton text="View Business" href={`/business/${id}`} />
      </div>
    </Card>
  );
}
