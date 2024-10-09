import {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  useNodesState,
} from "@xyflow/react";
import { useEffect } from "react";

import "@xyflow/react/dist/style.css";

interface INode {
  id: string;
  position: { x: number; y: number };
  data: { label: string };
}

export default function SchemePanel({ items }: any) {
  let currentNodes: INode[] = items.map((item: any, idx: any): any => {
    return {
      id: `${idx} + 1`,
      position: { x: idx * 100, y: idx * 100 },
      data: { label: JSON.parse(item).articleId.toString() },
    };
  });

  const [nodes, setNodes, onNodesChange] = useNodesState(currentNodes);

  useEffect(() => {
    setNodes(currentNodes);
  }, [items]);

  return (
    <div className="container mx-auto max-w-7xl h-80 shadow-inner rounded-md border-gray-400 bg-gray-300 py-6 sm:px-6 lg:px-8">
      <ReactFlow nodes={nodes} onNodesChange={onNodesChange}>
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
