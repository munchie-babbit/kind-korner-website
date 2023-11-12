import TypeformEmbed from "../organisms/typeformEmbed";
import ShopperForm from "../organisms/shopperForm";
import { ActionButton } from "../atoms/actionButton";
export default function JoinUs() {
  const cardData = [
    {
      title: "Join as a vendor",
      description:
        "Are you a small business located in Toronto? Fill out our application form to join our marketplace today.",
      actionText: "",
      actionLink: "",
      form: <TypeformEmbed />,
    },
    {
      title: "Join as a shopper",
      description:
        "Want to stay up to date with upcoming events and updates at KindKorner? Join our mailing list to find out more!",
      actionText: "",
      actionLink: "",
      form: <ShopperForm />,
    },
    {
      title: "Support us in other ways",
      description:
        "Interested in joining our team or do you represent an in-person market looking to go online? Send us a message to get in touch!",
      actionText: "Contact us",
      actionLink: "mailto:kindkorner0@gmail.com",
    },
  ];
  return (
    <div
      id="join-us"
      className="flex sm:m-auto sm:w-full justify-center md:space-x-4 mx-20 grid grid-cols-1 md:grid-cols-3 "
    >
      {cardData.map((card, key) => (
        <Card
          title={card.title}
          description={card.description}
          actionText={card.actionText}
          actionLink={card.actionLink}
          form={card.form}
          key={key}
        ></Card>
      ))}
    </div>
  );
}

function Card({
  title,
  description,
  actionText,
  actionLink,
  form,
  key,
}: {
  title: string;
  description: string;
  actionText: string;
  actionLink: string;
  form: any;
  key: number;
}) {
  return (
    <div
      key={key}
      className=" p-8 my-4 border border-customDarkGreen rounded-lg "
    >
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-customDarkGreen dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-customDarkGreen ">{description}</p>
      {!form ? <ActionButton link={actionLink} text={actionText} /> : form}
    </div>
  );
}
