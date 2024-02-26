export default function Review({ params: { productId } }: { params: { productId: string } }) {
    return (
        <div>
            <h3>Showing reviews for {productId}th product</h3>
        </div>
    )
}