
interface InputSchema {
    inputPlaceholder: string
    inputType?: string
}

export function Input ({inputPlaceholder, inputType="text"}: InputSchema){

    return (
        <input 
        placeholder={inputPlaceholder} 
        type={inputType}
        className="h-12 py-2 px-1 border-gray-500 border rounded-md"
        />
    )
}