"use client";

import { useState } from "react";
import ProposalBox from "../components/ProposalBox";

const FinalProposal = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <section
      id="proposal"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="flex w-full max-w-3xl flex-col items-center gap-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-200">
            The moment we've been waiting for
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Will you say yes to forever?
          </h2>
        </div>

        <ProposalBox accepted={accepted} setAccepted={setAccepted} />
      </div>
    </section>
  );
};

export default FinalProposal;
