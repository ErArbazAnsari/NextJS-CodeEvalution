export const Card = ({ children }: { children: React.ReactNode }) => {
    const cardStyle = {
        padding: "10px",
        margin: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        border: "1px solid #ddd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "200px",
        overflow: "hidden",
        borderRadius: "10px",
        transition: "transform 0.2s",
    };

    const cardHoverStyle = {
        transform: "scale(1.05)",
    };

    return (
        <div style={cardStyle}>{children}</div>
    )
}