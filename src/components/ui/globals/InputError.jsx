export default function InputError({ error }) {
    if(!error) return;
    return (
        <p className="text-red-500 text-xs mt-1">
            {error}
        </p>
    )
}