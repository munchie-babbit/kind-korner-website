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
    <Card hasPadding={false}>
      <Image
        className="object-cover w-full"
        src={image}
        alt="Product image"
        width={200}
        height={300}
      />
      <p className="font-medium pt-4">{title}</p>
      <p className="pb-4">{price}</p>
    </Card>
  );
}
