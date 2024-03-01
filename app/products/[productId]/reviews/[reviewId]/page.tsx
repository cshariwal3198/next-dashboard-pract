"use client";

import { useRouter } from 'next/navigation';

export default function ProductReview({
    params: { reviewId, productId }
}: {
    params: { reviewId: string, productId: string }
}) {
    const router = useRouter();

    const onClick = () => {
        router.push('/');
    }

    return (
        <div>
            <button className="bg-cyan-700 rounded-md p-2" onClick={onClick}>Place Order</button>
            <h3>Showing {reviewId}th review for product with id {productId}</h3>
        </div>
    );
}