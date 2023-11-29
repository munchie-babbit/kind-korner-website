export default function Card({
  children = null,
  hasPadding = true,
}: {
  children?: any;
  hasPadding?: boolean;
}) {
  return (
    <div
      className={
        "border border-customDarkGreen bg-background rounded-lg overflow-hidden " +
        (hasPadding ? "p-8" : "")
      }
    >
      {children}
    </div>
  );
}
