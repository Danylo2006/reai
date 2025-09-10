import { useState } from "react";
import { scenarios } from "../data/scenarios";
import { Button } from "@/components/ui/button";

export default function ScenarioCard() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const currentScenario = scenarios[scenarioIndex]!;

  return (
    <div className="flex flex-col gap-6 rounded-md p-4 shadow">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{currentScenario.title}</h2>
          <Button variant="outline">Next</Button>
        </div>
        <p className="text-sm text-gray-500">{currentScenario.description}</p>
      </div>
    </div>
  );
}
