import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const nodes: { x: number; y: number; connections: number[] }[] = [];
    const numNodes = 15;

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
      });
    }

    nodes.forEach((node, i) => {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) {
          node.connections.push(j);
        }
      }
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.strokeStyle = "#64ffda33";
          ctx.stroke();
        });
      });

      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#64ffda";
        ctx.fill();
      });

      nodes.forEach((node) => {
        node.x += (Math.random() - 0.5) * 0.5;
        node.y += (Math.random() - 0.5) * 0.5;

        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      requestAnimationFrame(animate);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        opacity: 0.7,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  );
};
