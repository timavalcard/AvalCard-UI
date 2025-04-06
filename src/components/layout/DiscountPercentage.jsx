export default function DiscountPercentage({ per, className }) {
    return (
        <div className={`bg-blue-custom-gradient text-white  font-black text-xs rounded-full px-3 py-1.5 ${className}`}>
            %{
                per
            }
        </div>
    );
}