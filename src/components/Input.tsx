type Props = {
  children: string;
  [key: string]: any;
};

export function Input({ children, ...props }: Props) {
  return (
    <label>
      {children}
      <input {...props} />
    </label>
  );
}
