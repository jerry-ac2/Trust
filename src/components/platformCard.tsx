export default function PlatformCard({
  icon,
  heading,
  description,
}: {
  icon: React.ReactNode;
  heading: string;
  description: string;
}) {
  return (
    <div className="border p-9 w-80 h-77 rounded-3xl flex flex-col gap-6">
      <span className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
        {icon}
      </span>
      <h1 className="text-xl font-bold">{heading}</h1>
      <p className="text-md text-gray-500 text-left leading-7 w-full">
        {description}
      </p>
    </div>
  );
}
