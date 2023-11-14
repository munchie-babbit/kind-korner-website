export default function Card({
  children = null,
  hasPadding = true,
}: {
  children?: any;
  hasPadding?: boolean;
}) {
  return hasPadding ? (
    <div className=" my-4 p-4 border border-customDarkGreen rounded-lg overflow-hidden">
      {children}
    </div>
  ) : (
    <div className=" my-4 border border-customDarkGreen rounded-lg overflow-hidden">
      {children}
    </div>
  );
}
