import { Input } from "./Input";

type Item = {
  name: string;
  value: string;
};

type Props = {
  items: Item[];
  groupName: string;
};

export function CheckboxGroup({ items, groupName }: Props) {
  return (
    <div>
      {items.map((item) => (
        <Input
          labelText={item.name}
          type="checkbox"
          name={groupName}
          value={item.value}
        />
      ))}
    </div>
  );
}
