export function ActionButton({
  link = "",
  text,
  type = undefined,
  onClick = undefined,
  ...props
}: {
  link?: string;
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick?: any;
}) {
  return (
    <button
      type={type}
      onClick={
        onClick ??
        (() => {
          window.location.href = link;
        })
      }
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-customDarkGreen rounded-lg hover:bg-customGreen "
      {...props}
    >
      {text}
      <svg
        className="w-3.5 h-3.5 ml-2"
        aria-hidden="true"
        xmlns=""
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
    </button>
  );
}
