import React from "react";
import { Steps } from "./Steps";
const MethodPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Our Methods and Processes</h1>

          <Steps />
        </div>
      </main>
    </div>
  );
};

export default MethodPage;
