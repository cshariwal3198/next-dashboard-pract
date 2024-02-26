export default function ProductReview({
    params: { reviewId, productId }
}: { params: { reviewId: string, productId: string } }) {
    return (
        <div>
            <h3>Showing {reviewId}th review for product with id {productId}</h3>
        </div>
    );
}