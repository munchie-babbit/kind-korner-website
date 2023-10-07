export default function Events() {
  const eventData = {
    title: "Our first pop up experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    image: "",
    buttonText: "Sign up",
    buttonLink: "",
  };
  return (
    <div className="mx-20 border border-customDarkGreen rounded-lg mb-10">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-customDarkGreen">
            {eventData.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-customDarkGreen ">
          {eventData.description}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-customDarkGreen rounded-lg hover:bg-customGreen  focus:outline-none focus:bg-customGreen "
        >
          {eventData.buttonText}
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns={eventData.buttonLink}
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
    </div>
  );
}
