export type ButtonProps = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>, itemId: number) => void
}

export type InputProps = {
    value: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}