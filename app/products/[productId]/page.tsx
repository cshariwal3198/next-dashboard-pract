export default function ProductDetails({ params: { productId } }: { params: { productId: string } }) {
    return (
        <div>
            <h3> Showing the details for the product with id {productId} </h3>
        </div>
    )
}