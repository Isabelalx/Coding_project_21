import React, { useState } from "react";

const TourCard = ({ id, name, info, image, price, onRemove }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="tour-card" style={styles.card}>
            <img src={image} alt={name} style={styles.image} />
            <div style={styles.content}>
                <h2 style={styles.title}>{name}</h2>
                <h4 style={styles.price}>${price}</h4>
                <p style={styles.info}>
                    {readMore ? info : `${info.substring(0, 100)}...`}
                    <button
                        onClick={() => setReadMore(!readMore)}
                        style={styles.readMoreBtn}
                    >
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                </p>
                <button onClick={() => onRemove(id)} style={styles.removeBtn}>
                    Not Interested
                </button>
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        marginBottom: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    image: {
        width: "100%",
        height: "200px",
        objectFit: "cover",
    },
    content: {
        padding: "16px",
    },
    title: {
        fontSize: "1.5rem",
        margin: "0 0 10px",
    },
    price: {
        color: "#2a9d8f",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    info: {
        fontSize: "1rem",
        marginBottom: "10px",
    },
    readMoreBtn: {
        background: "none",
        border: "none",
        color: "#007BFF",
        cursor: "pointer",
        padding: "0",
        fontSize: "1rem",
    },
    removeBtn: {
        backgroundColor: "#e63946",
        color: "#fff",
        border: "none",
        padding: "10px 15px",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default TourCard;