'use client';

export default function CustomError({ error, reset }: Readonly<{ error: Error, reset: () => void }>) {
    return (
        <>
            Error message component
            <h5>{error.message}</h5>
            <button onClick={reset} style={{ border: '1px solid black' }}>Try again</button>
        </>
    )
}