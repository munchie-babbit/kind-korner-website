import { ActionButton } from "./actionButton";

export default function Card({
  title,
  description,
  actionText = "",
  actionLink = "",
  form = null,
  key = 1,
  children = null,
}: {
  title: string;
  description?: string;
  actionText?: string;
  actionLink?: string;
  form?: any;
  key?: number;
  children: any;
}) {
  return (
    <div
      key={key}
      className="overflow-hidden my-4 border border-customDarkGreen rounded-lg "
    >
      {/* <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-customDarkGreen dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-customDarkGreen ">{description}</p>
      {!form ? <ActionButton link={actionLink} text={actionText} /> : form} */}
      {children}
    </div>
  );
}
