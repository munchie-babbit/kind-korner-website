export default function JoinUs() {
  const cardData = [
    {
      title: "Join as a vendor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ",
      actionText: "",
      actionLink: "",
    },
    {
      title: "Join as a shopper",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ",
      actionText: "",
      actionLink: "",
    },
    {
      title: "Support us in other ways",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. ",
      actionText: "",
      actionLink: "",
    },
  ];
  return (
    <div className="flex justify-center space-x-4 mx-20">
      {cardData.map((card) => (
        <Card
          title={card.title}
          description={card.description}
          actionText={card.actionText}
          actionLink={card.actionLink}
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
}: {
  title: string;
  description: string;
  actionText: string;
  actionLink: string;
}) {
  return (
    <div className=" p-6 border border-customOrange rounded-lg ">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-customOrange dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-customOrange dark:text-gray-400">
        {description}
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-customOrange rounded-lg hover:bg-customGreen "
      >
        {actionText}
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns={actionLink}
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}
