export default function Events() {
  const eventData = {
    title: "Our first pop up experience",
    description: "",
    image: "",
    buttonText: "Sign up",
    buttonLink: "",
  };
  return (
    <div className="max-w-sm border border-customOrange rounded-lg ">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-customOrange dark:text-white">
            {eventData.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-orange-700 dark:text-orange-400">
          {eventData.description}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-customOrange rounded-lg hover:bg-customOrange focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
