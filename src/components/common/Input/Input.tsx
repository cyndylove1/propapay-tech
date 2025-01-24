export default function Input() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-semibold leading-[19.6px] text-neutral-800"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="rounded-xl border border-neutral-200 px-4 py-[17px]"
        />
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 transform">
            icon
          </span>
          <input
            type="text"
            id="name"
            placeholder="Search"
            className="rounded-xl border border-neutral-200 px-4 py-[17px] pl-12 text-base font-normal leading-[22.4px] placeholder:text-neutral-500"
          />
        </div>
      </div>
    </>
  );
}
