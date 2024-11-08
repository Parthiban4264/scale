import React from "react";
import Donovan from "../../assets/images/donovan.png";
import GenAi from "../../assets/images/gen-ai.png";

function ApplyAi() {
  return (
    <div className="w-full lg:max-w-[1280px] mx-auto">
      <div className="z-10 mx-auto mb-10 flex max-w-3xl flex-col items-center justify-center text-center md:mb-20 md:mt-12">
        <div className="mb-5 overflow-hidden rounded-full bg-white bg-opacity-5 px-4 py-2 text-xs uppercase tracking-[3px] text-[#7B8FDD] md:px-5 md:py-2 lg:mb-5 lg:text-xs">
          <span>Apply AI</span>
        </div>
        <h2 className="font-aeonik md:text-4.5xl text-3xl leading-snug [text-wrap:balance] lg:text-5xl lg:leading-[1.25] text-white">
          Generative AI Applications
        </h2>
        <p className="mt-4 leading-[1.60] text-neutral-100 [text-wrap:balance] lg:mt-2 lg:text-xl lg:text-gray-300">
          Easily Apply AI to your most challenging use cases with pre‑built
          applications that harness the power of customized LLMs.
        </p>
      </div>

      <div className="flex items-center w-full justify-center pb-20 opacity-100">
        <div className="3xl:py-[95px] relative z-10 max-h-[436px] min-h-[450px] overflow-hidden rounded-2xl p-6 pb-0 pt-9 md:overflow-visible md:p-10 md:!pt-12 lg:h-[540px] lg:!min-h-[540px] lg:items-center lg:py-12 xl:py-20">
          <p className="relative z-10 mb-4 text-xs uppercase leading-4 tracking-[4px] lg:mb-6 text-white">
            Scale Donovan
          </p>
          <p className="text-3.5xl font-aeonik relative z-10 mb-2 leading-tight md:text-[1.625rem] md:leading-8 text-white">
            AI-Powered Decision-Making for Defense
          </p>
          <p className="md:mb-18 z-10 mb-8 leading-6 text-zinc-400">
            AI-powered decision-making support: plan, analyze, and act in
            minutes.
          </p>
          <img alt="Scale Donovan" src={Donovan} width="616" height="333" />
        </div>

        <div className="3xl:py-[95px] relative z-10 max-h-[436px] min-h-[450px] overflow-hidden rounded-2xl p-6 pb-0 pt-9 md:overflow-visible md:p-10 md:!pt-12 lg:h-[540px] lg:!min-h-[540px] lg:items-center lg:py-12 xl:py-20">
          <p className="relative z-10 mb-4 text-xs uppercase leading-4 tracking-[4px] lg:mb-6 text-white">
            Scale GenAI Platform
          </p>
          <p className="text-3.5xl font-aeonik relative z-10 mb-2 leading-tight md:text-[1.625rem] md:leading-8 text-white">
            AI for the Enterprise
          </p>
          <p className="md:mb-18 z-10 mb-8 leading-6 text-zinc-400">
            Transform your data into customized enterprise-ready Generative AI
            applications.
          </p>
          <img alt="Gen AI" src={GenAi} width="575" height="383" />
        </div>
      </div>
    </div>
  );
}

export default ApplyAi;
