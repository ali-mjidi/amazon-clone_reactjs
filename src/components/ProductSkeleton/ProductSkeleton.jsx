import Skeleton from "@components/Skeleton/Skeleton";
import "./style.scss";

function ProductSkeleton() {
    return (
        <div className="product productSkeleton">
            <div className="one">
                <Skeleton type="square" width="100%" height="300px" />

                <div className="productSkeleton__otherImages">
                    <Skeleton
                        type="square"
                        width="38px"
                        height="50px"
                        count={3}
                    />
                </div>
            </div>
            <div className="lines">
                <Skeleton type="line heading" />
                <Skeleton type="line" width="30%" />
                <Skeleton type="line" width="50%" />
                <Skeleton type="line" count={10} />
            </div>
            <Skeleton type="square" />
        </div>
    );
}

export default ProductSkeleton;
