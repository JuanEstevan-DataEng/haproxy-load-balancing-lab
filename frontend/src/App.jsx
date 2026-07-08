import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({ message: "Cargando...", hostname: "", pod_name: "" });

  const fetchData = () => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setData({ message: "Fallo en la llamada a la API", hostname: "-", pod_name: "-" }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      color: "white",
      fontFamily: '"Inter", sans-serif',
      textAlign: "center",
      padding: "2rem",
    },
    heading: {
      fontSize: "3rem",
      marginBottom: "1rem",
      letterSpacing: "1px",
    },
    card: {
      background: "rgba(255,255,255,0.1)",
      padding: "2rem",
      borderRadius: "16px",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      maxWidth: "400px",
      width: "100%",
    },
    message: {
      fontSize: "1.5rem",
      marginBottom: "1rem",
      fontWeight: "bold",
    },
    detail: {
      fontSize: "1rem",
      marginBottom: "0.5rem",
      opacity: 0.8,
    },
    button: {
      marginTop: "1.5rem",
      padding: "0.8rem 1.5rem",
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#1e3c72",
      background: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
    }
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>🚀 React + FastAPI + HAProxy</h1>
      <div style={styles.card}>
        <p style={styles.message}>{data.message}</p>
        <p style={styles.detail}>📍 Hostname: {data.hostname}</p>
        <p style={styles.detail}>📦 Pod Name: {data.pod_name}</p>
        <button 
          style={styles.button} 
          onClick={fetchData}
          onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          🔄 Refetch API
        </button>
      </div>
    </div>
  );
}

export default App;
