"use client";

import { useRouter } from 'next/navigation';

const getRandom = () => (
    Math.floor(Math.random() * 10)
)

export default function ProductReview({
    params: { reviewId, productId }
}: {
    params: { reviewId: string, productId: string }
}) {
    const router = useRouter();

    const onClick = () => {
        router.push('/');
    }

    // if (getRandom() > 6) {
    //     throw new Error('error message')
    // }

    return (
        <div>
            <button className="bg-cyan-700 rounded-md p-2" onClick={onClick}>Place Order</button>
            <h3>Showing {reviewId}th review for product with id {productId}</h3>
        </div>
    );
}