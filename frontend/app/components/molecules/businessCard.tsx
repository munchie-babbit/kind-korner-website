import Card from "../atoms/card";
import Image from "next/image";

export default function BusinessCard({
  image,
  name,
  url,
  size,
}: {
  image: string;
  name: string;
  url: string;
  size: string;
}) {
  return size == "small" ? (
    <Card title={name}>
      <Image src={image} width={500} height={300} alt="Business image" />
    </Card>
  ) : size == "large" ? (
    <Card title={name}>
      <Image src={image} width={500} height={300} alt="Business image" />
    </Card>
  ) : null;
}
