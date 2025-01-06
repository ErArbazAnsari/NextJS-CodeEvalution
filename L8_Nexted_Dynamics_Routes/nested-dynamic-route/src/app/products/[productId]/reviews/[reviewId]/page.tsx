import React from 'react'

const Review = async ({ params }: { params: Promise<{ reviewId: string; productId: string }> }) => {
    const { productId, reviewId } = await params;
    return (
        <div>Product = {productId} and Review {reviewId}</div>
    )
}

export default Review