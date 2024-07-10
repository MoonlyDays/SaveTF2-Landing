export function InputErrorMessage({ error }: { error: string | undefined }) {
    return error && <span className="text-red-500">{error}</span>;
}
