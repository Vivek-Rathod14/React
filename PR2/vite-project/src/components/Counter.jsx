import { useState } from "react";

function Counter({ name }) {

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    };

    const Dicrement = () => {
        if (count > 0) {

            setCount(count - 1);
        }
        else (
            alert("value is 0")
        )
    }
    const Reset = () => {
        setCount(0)
    }
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div style={{
                backgroundColor: "#ffffff",
                padding: "35px 30px",
                borderRadius: "16px",
                width: "360px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
            }}>

                <h1 style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "6px"
                }}>
                    Counter
                </h1>

                <div style={{
                    width: "60px",
                    height: "4px",
                    backgroundColor: "black",
                    margin: "0 auto 20px",
                    borderRadius: "2px"
                }}></div>

                <h1 style={{
                    fontSize: "52px",
                    fontWeight: "800",
                    margin: "10px 0",
                    color: "#000"
                }}>
                    {count}
                </h1>

                <div style={{ display: "flex", gap: "12px", marginBottom: "15px" }}>
                    <button
                        onClick={Increment}
                        style={{
                            flex: 1,
                            padding: "10px",
                            backgroundColor: "black",
                            color: "white",
                            border: "none",
                            borderRadius: "25px",
                            cursor: "pointer",
                            fontWeight: "600"
                        }}
                    >
                        + Increment
                    </button>

                    <button
                        onClick={Dicrement}
                        style={{
                            flex: 1,
                            padding: "10px",
                            backgroundColor: "white",
                            color: "black",
                            border: "1px solid black",
                            borderRadius: "25px",
                            cursor: "pointer",
                            fontWeight: "600"
                        }}
                    >
                        − Decrement
                    </button>
                </div>

                <button
                    onClick={Reset}
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#f1f1f1",
                        border: "none",
                        borderRadius: "25px",
                        cursor: "pointer",
                        fontWeight: "600"
                    }}
                >
                    Reset
                </button>

            </div>
        </div>

    )
}
export default Counter;