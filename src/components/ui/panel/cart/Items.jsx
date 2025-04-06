import Item from "./Item";

export default function Items({ items, onRemove, onQuantityChange }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Item
          key={item.id}
          {...item}
          onRemove={onRemove}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </div>
  );
}
