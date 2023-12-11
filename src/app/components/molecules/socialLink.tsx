export default function SocialLink({
  link,
  icon,
  isLink = true,
  alternativeText,
}: {
  link: string;
  icon: any;
  isLink?: boolean;
  alternativeText?: string;
}) {
  return link ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      {icon}
      <p style={{ wordBreak: "break-all" }}>
        {isLink ? (
          <a target="_blank" href={link}>
            {alternativeText ?? link}
          </a>
        ) : (
          alternativeText ?? link
        )}
      </p>
    </div>
  ) : null;
}
