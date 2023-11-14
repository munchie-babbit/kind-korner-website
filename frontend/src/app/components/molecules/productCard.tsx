import Card from "../atoms/card";
import Image from "next/image";

export default function ProductCard({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: string;
}) {
  return (
    <Card>
      <Image src={image} alt="Product image" width={200} height={300} />
      <p>{title}</p>
      <p>{price}</p>
    </Card>
  );
}
