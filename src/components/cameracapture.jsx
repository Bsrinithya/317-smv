// src/components/CameraCapture.jsx
import React, { useRef, useState } from "react";
import "./CameraCapture.css";

export default function CameraCapture() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [streaming, setStreaming] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setStreaming(true);
    } catch (error) {
      alert("Camera access denied or unavailable!");
    }
  };

  const capturePhoto = () => {
    const canvas = photoRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 400;
    canvas.height = 300;

    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="camera-page">
      <h2 className="camera-title">Camera Capture</h2>

      <div className="camera-container">
        <video ref={videoRef} className="video-box"></video>
        <canvas ref={photoRef} className="photo-box"></canvas>
      </div>

      <div className="camera-buttons">
        <button onClick={startCamera} className="camera-btn">
          Start Camera
        </button>

        <button onClick={capturePhoto} className="camera-btn" disabled={!streaming}>
          Capture Photo
        </button>
      </div>
    </div>
  );
}
