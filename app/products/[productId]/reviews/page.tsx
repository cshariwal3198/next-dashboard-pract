import { Metadata } from "next"

interface IProps {
    params: {
        productId: string;
    }
}

export const generateMetadata = ({ params: { productId } }: IProps): Metadata => ({
    title: `product ${productId}`
})

export default function Review({ params: { productId } }: IProps) {
    return (
        <div>
            <h3>Showing reviews for {productId}th product</h3>
        </div>
    )
}