interface StructureProps extends React.SVGProps<SVGSVGElement> {
  width: number;
  height: number;
  children: React.ReactNode;
}

export default function Structure({
  width,
  height,
  children,
  className,
  ...props
}: StructureProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}
