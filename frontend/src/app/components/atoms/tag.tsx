export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-customDarkGreen bg-background rounded-2xl">
      <p className="py-[0.25em] px-[0.5em]">{children}</p>
    </div>
  );
}
