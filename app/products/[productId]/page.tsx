interface IProps {
    params: {
        productId: string
    }
}

export default function ProductDetails({ params: { productId } }: IProps) {
    return (
        <div>
            <h3>Namaste</h3>
            <h3> Showing the details for the product with id {productId} </h3>
        </div>
    )
}