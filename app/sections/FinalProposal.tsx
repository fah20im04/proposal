"use client";

import { useState } from "react";
import ProposalBox from "../components/ProposalBox";

const FinalProposal = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-10">
        <ProposalBox accepted={accepted} setAccepted={setAccepted} />
        <button
          onClick={() => setAccepted(true)}
          className="px-8 py-4 rounded-full bg-pink-500 text-white"
        >
          YES 💖
        </button>
      </div>
    </section>
  );
};

export default FinalProposal;
