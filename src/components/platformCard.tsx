export default function PlatformCard({
  icon,
  heading,
  description,
  welcome,
}: {
  icon: React.ReactNode;
  heading: string;
  description: string;
  welcome?: boolean;
}) {
  return (
    <div
      className={
        welcome
          ? "bg-gray-100 border border-gray-200 p-6 w-70 h-52 rounded-3xl flex flex-col items-center gap-3"
          : "border p-9 w-80 h-77 rounded-3xl flex flex-col gap-6"
      }
    >
      <span
        className={
          welcome
            ? "w-15 h-15 flex items-center justify-center"
            : "w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center"
        }
      >
        {icon}
      </span>
      <h1
        className={
          welcome ? "text-xl font-bold text-center" : "text-xl font-bold"
        }
      >
        {heading}
      </h1>
      <p
        className={
          welcome
            ? "text-md text-gray-500 text-center leading-7 w-full"
            : "text-md text-gray-500 text-left leading-7 w-full"
        }
      >
        {description}
      </p>
    </div>
  );
}
