import React from 'react'

const DetailsPage = async ({ params }: { params: { productId: string } }) => {
    const productId = params.productId;
    return (
        <div>DetailsPage {productId}</div>
    )
}

export default DetailsPage