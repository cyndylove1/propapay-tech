interface PropertyBadgeProps {
  label: string;
}

export default function PropertyBadge({ label }: PropertyBadgeProps) {
  return (
    <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold leading-[14px] text-brand-base">
      {label}
    </span>
  );
}
