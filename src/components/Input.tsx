type Props = {
  labelText: string;
  [key: string]: any;
};

export function Input({ labelText, ...props }: Props) {
  return (
    <label>
      {labelText}
      <input {...props} />
    </label>
  );
}
