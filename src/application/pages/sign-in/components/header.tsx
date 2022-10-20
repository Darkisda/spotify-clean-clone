export function Header() {
  return (
    <header className="w-full bg-white top-0 border-b border-gray-200 py-6">
      <div className="w-1/2 flex items-center content-center gap-2 justify-center mx-auto">
        <div className="w-14 h-14 rounded-full bg-black"></div>
        <div className="text-left">
          <h1 className="text-3xl font-semibold">Spotify</h1>
          <h3 className="text-xl font-medium leading-3">Clone</h3>
        </div>
      </div>
    </header>
  );
}
