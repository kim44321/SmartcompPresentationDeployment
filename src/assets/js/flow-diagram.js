function createFlowConnections() {
  const diagram = document.querySelector(".call-flow-diagram");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Configure canvas
  canvas.width = diagram.offsetWidth;
  canvas.height = diagram.offsetHeight;
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "1";
  diagram.insertBefore(canvas, diagram.firstChild);

  // Update node positions for better flow
  const nodePositions = {
    "flow-node-1": { top: "40px", left: "50%", transform: "translateX(-50%)" },
    "flow-node-2": { top: "140px", left: "25%", transform: "translateX(-50%)" },
    "flow-node-3": { top: "140px", left: "75%", transform: "translateX(-50%)" },
    "flow-node-4": { top: "240px", left: "25%", transform: "translateX(-50%)" },
    "flow-node-5": { top: "240px", left: "75%", transform: "translateX(-50%)" },
    "flow-node-6": { top: "340px", left: "50%", transform: "translateX(-50%)" },
  };

  // Apply new positions
  Object.entries(nodePositions).forEach(([nodeClass, position]) => {
    const node = document.querySelector(`.${nodeClass}`);
    Object.entries(position).forEach(([prop, value]) => {
      node.style[prop] = value;
    });
  });

  // Draw arrow function
  function drawArrow(fromNode, toNode, color) {
    const from = document.querySelector(`.${fromNode}`);
    const to = document.querySelector(`.${toNode}`);

    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();
    const diagramRect = diagram.getBoundingClientRect();

    const fromX = fromRect.left + fromRect.width / 2 - diagramRect.left;
    const fromY = fromRect.top + fromRect.height / 2 - diagramRect.top;
    const toX = toRect.left + toRect.width / 2 - diagramRect.left;
    const toY = toRect.top + toRect.height / 2 - diagramRect.top;

    // Draw curved path
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.bezierCurveTo(fromX, (fromY + toY) / 2, toX, (fromY + toY) / 2, toX, toY);

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw arrow head
    const angle = Math.atan2(toY - fromY, toX - fromX);
    const headLength = 10;

    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
  }

  // Clear and draw all connections
  function drawConnections() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Support Request to Ticket Creation
    drawArrow("flow-node-1", "flow-node-2", "#0062cc");

    // Support Request to Priority Assignment
    drawArrow("flow-node-1", "flow-node-3", "#0062cc");

    // Ticket Creation to Remote Support
    drawArrow("flow-node-2", "flow-node-4", "#ff6b35");

    // Priority Assignment to On-site Support
    drawArrow("flow-node-3", "flow-node-5", "#ff6b35");

    // Remote Support to Resolution
    drawArrow("flow-node-4", "flow-node-6", "#10b981");

    // On-site Support to Resolution
    drawArrow("flow-node-5", "flow-node-6", "#10b981");
  }

  // Initial draw
  drawConnections();

  // Redraw on window resize
  window.addEventListener("resize", () => {
    canvas.width = diagram.offsetWidth;
    canvas.height = diagram.offsetHeight;
    drawConnections();
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", createFlowConnections);
