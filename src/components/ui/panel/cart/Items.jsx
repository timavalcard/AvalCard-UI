import Item from "./Item";

export default function Items({setCart,setItems, items, onRemove, onQuantityChange }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Item
            setCart={setCart}
          key={item.id}
            setItems={setItems}
          {...item}
          onRemove={onRemove}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </div>
  );
}
