export default function Error({ message }) {
  return (
    <div className="w-full flex items-center justify-center h-10  p-2 text-red-700 bg-red-100 c">
      {message}
    </div>
  );
}
