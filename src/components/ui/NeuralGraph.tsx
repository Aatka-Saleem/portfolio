"use client";

import { useState } from "react";

interface Node {
  id: string;
  x: number;
  y: number;
  label?: string;
  color: string;
}

const layers = [
  {
    name: "INPUT VECTORS",
    x: 45,
    nodes: [
      { id: "i1", y: 55 },
      { id: "i2", y: 105 },
      { id: "i3", y: 155 },
      { id: "i4", y: 205 },
    ],
  },
  {
    name: "EMBEDDINGS",
    x: 135,
    nodes: [
      { id: "e1", y: 75 },
      { id: "e2", y: 130 },
      { id: "e3", y: 185 },
    ],
  },
  {
    name: "REASONING / FFN",
    x: 225,
    nodes: [
      { id: "h1", y: 45 },
      { id: "h2", y: 95 },
      { id: "h3", y: 145 },
      { id: "h4", y: 195 },
    ],
  },
  {
    name: "INFERENCE HEAD",
    x: 315,
    nodes: [
      { id: "o1", y: 85 },
      { id: "o2", y: 155 },
    ],
  },
];

const allNodes: Node[] = layers.flatMap((layer, layerIndex) =>
  layer.nodes.map((node) => ({
    id: node.id,
    x: layer.x,
    y: node.y,
    label: node.id.toUpperCase(),
    color:
      layerIndex === 0
        ? "#38bdf8"
        : layerIndex === 1
        ? "#818cf8"
        : layerIndex === 2
        ? "#a78bfa"
        : "#c084fc",
  }))
);

const connections: { from: string; to: string }[] = [];

for (let i = 0; i < layers.length - 1; i++) {
  const currentLayer = layers[i];
  const nextLayer = layers[i + 1];

  currentLayer.nodes.forEach((fromNode) => {
    nextLayer.nodes.forEach((toNode) => {
      connections.push({
        from: fromNode.id,
        to: toNode.id,
      });
    });
  });
}

export function NeuralGraph() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const getNode = (id: string) =>
    allNodes.find((node) => node.id === id);

  const isConnectionActive = (
    from: string,
    to: string
  ) => {
    if (!activeNode) return false;

    return from === activeNode || to === activeNode;
  };

  return (
    <div className="relative w-full font-mono text-xs overflow-hidden">
      {/* Ambient Neural Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-32 h-32 rounded-full bg-[#38bdf8]/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 w-32 h-32 rounded-full bg-[#818cf8]/10 blur-3xl" />
      </div>

      {/* Neural Graph */}
      <div className="relative w-full">
        <svg
          viewBox="0 0 360 260"
          className="w-full h-auto overflow-visible"
          role="img"
          aria-label="Interactive neural computation graph"
        >
          <defs>
            {/* Node Glow */}
            <filter
              id="nodeGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="3"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Connection Glow */}
            <filter
              id="connectionGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur
                stdDeviation="1.5"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradient */}
            <linearGradient
              id="connectionGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#38bdf8"
                stopOpacity="0.15"
              />
              <stop
                offset="50%"
                stopColor="#818cf8"
                stopOpacity="0.4"
              />
              <stop
                offset="100%"
                stopColor="#c084fc"
                stopOpacity="0.15"
              />
            </linearGradient>
          </defs>

          {/* Connections */}
          <g>
            {connections.map((connection, index) => {
              const from = getNode(connection.from);
              const to = getNode(connection.to);

              if (!from || !to) return null;

              const active = isConnectionActive(
                connection.from,
                connection.to
              );

              return (
                <g key={`${connection.from}-${connection.to}`}>
                  {/* Main Connection */}
                  <line
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={
                      active
                        ? "#38bdf8"
                        : "url(#connectionGradient)"
                    }
                    strokeWidth={active ? 1.5 : 0.7}
                    strokeOpacity={active ? 0.9 : 0.35}
                    filter={
                      active
                        ? "url(#connectionGlow)"
                        : undefined
                    }
                    className="transition-all duration-300"
                  />

                  {/* Animated Signal */}
                  <circle
                    r={active ? 1.8 : 1.2}
                    fill="#38bdf8"
                    opacity={active ? 0.9 : 0.45}
                  >
                    <animateMotion
                      dur={`${2.5 + (index % 5) * 0.35}s`}
                      repeatCount="indefinite"
                      begin={`${(index % 7) * 0.25}s`}
                      path={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                    />
                  </circle>
                </g>
              );
            })}
          </g>

          {/* Nodes */}
          <g>
            {allNodes.map((node) => {
              const active = activeNode === node.id;

              return (
                <g
                  key={node.id}
                  className="cursor-pointer"
                  onClick={() =>
                    setActiveNode(
                      active ? null : node.id
                    )
                  }
                >
                  {/* Outer Pulse */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={active ? 10 : 7}
                    fill="none"
                    stroke={node.color}
                    strokeWidth="0.7"
                    opacity={active ? 0.45 : 0.12}
                  >
                    <animate
                      attributeName="r"
                      values="7;10;7"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />

                    <animate
                      attributeName="opacity"
                      values="0.08;0.25;0.08"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Node */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={active ? 5 : 4}
                    fill="#0b0f18"
                    stroke={node.color}
                    strokeWidth={active ? 1.8 : 1.2}
                    filter="url(#nodeGlow)"
                    className="transition-all duration-300"
                  />

                  {/* Node Core */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={active ? 2.1 : 1.5}
                    fill={node.color}
                    opacity={active ? 1 : 0.8}
                  />

                  {/* Node Label */}
                  {active && (
                    <text
                      x={node.x}
                      y={node.y - 12}
                      textAnchor="middle"
                      fill="#f1f5f9"
                      fontSize="7"
                      letterSpacing="0.08em"
                    >
                      {node.label}
                    </text>
                  )}
                </g>
              );
            })}
          </g>

          {/* Layer Labels */}
          {layers.map((layer) => (
            <text
              key={layer.name}
              x={layer.x}
              y="242"
              textAnchor="middle"
              fill="#64748b"
              fontSize="5.5"
              letterSpacing="0.08em"
            >
              {layer.name}
            </text>
          ))}

          {/* Forward Pass Indicator */}
          <text
            x="180"
            y="16"
            textAnchor="middle"
            fill="#64748b"
            fontSize="6"
            letterSpacing="0.15em"
          >
            FORWARD PASS
          </text>

          {/* Direction Arrow */}
          <line
            x1="55"
            y1="28"
            x2="305"
            y2="28"
            stroke="#334155"
            strokeWidth="0.7"
            strokeDasharray="2 3"
          />

          <path
            d="M 305 28 L 299 25 M 305 28 L 299 31"
            stroke="#38bdf8"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>
      </div>

      {/* Layer Legend */}
      <div className="relative flex flex-wrap justify-center gap-x-4 gap-y-2 mt-1">
        {[
          { label: "Input", color: "#38bdf8" },
          { label: "Embedding", color: "#818cf8" },
          { label: "Reasoning", color: "#a78bfa" },
          { label: "Output", color: "#c084fc" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-1.5 text-[9px] text-[#64748b]"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}