import "./style.scss";

function Skeleton({ type, count = 1, width = "", height = "" }) {
    const style = {
        width,
        height,
    };

    return (
        <>
            {[...Array(count)].map((_, index) => (
                <div
                    key={index}
                    style={style}
                    data-width={width}
                    data-height={height}
                    className={`skeleton ${type}`}></div>
            ))}
        </>
    );
}

export default Skeleton;
