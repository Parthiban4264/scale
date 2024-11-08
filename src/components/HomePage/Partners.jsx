import React from "react";
import openAi from "../../assets/images/openai.png";
import meta from "../../assets/images/meta.png";
import cohere from "../../assets/images/cohere.png";
import microsoft from "../../assets/images/microsoft.png";
import toyota from "../../assets/images/toyota.png";

function Partners() {
  return (
    <div className="my-20">
      <p className="mb-10 px-3 text-center text-xs uppercase leading-[1.70] tracking-[4px] sm:px-0 md:mb-12 md:text-sm text-white">
        GENERATIVE AI PROVIDERS WE PARTNER&nbsp;WITH:
      </p>

      <div className="hidden md:block">
        <ul className="flex items-center justify-center gap-4">
          <li className="relative flex h-28 w-[230px] items-center justify-center overflow-hidden rounded-2xl">
            <div className="absolute inset-px rounded-2xl bg-black/40"></div>
            <div className="absolute inset-0 rounded-2xl border border-white/15"></div>
            <img
              alt="openai"
              className="relative opacity-100 w-20"
              src={openAi}
            />
          </li>
          <li className="relative flex h-28 w-[230px] items-center justify-center overflow-hidden rounded-2xl">
            <div className="absolute inset-px rounded-2xl bg-black/40"></div>
            <div className="absolute inset-0 rounded-2xl border border-white/15"></div>
            <img alt="adept" className="relative opacity-100 w-20" src={meta} />
          </li>
          <li className="relative flex h-28 w-[230px] items-center justify-center overflow-hidden rounded-2xl">
            <div className="absolute inset-px rounded-2xl bg-black/40"></div>
            <div className="absolute inset-0 rounded-2xl border border-white/15"></div>
            <img
              alt="meta"
              className="relative opacity-100 w-20"
              src={cohere}
            />
          </li>
          <li className="relative flex h-28 w-[230px] items-center justify-center overflow-hidden rounded-2xl">
            <div className="absolute inset-px rounded-2xl bg-black/40"></div>
            <div className="absolute inset-0 rounded-2xl border border-white/15"></div>
            <img
              alt="cohere"
              className="relative opacity-100 w-20"
              src={toyota}
            />
          </li>
          <li className="relative flex h-28 w-[230px] items-center justify-center overflow-hidden rounded-2xl">
            <div className="absolute inset-px rounded-2xl bg-black/40"></div>
            <div className="absolute inset-0 rounded-2xl border border-white/15"></div>
            <img
              alt="anthropic"
              className="relative opacity-100 w-20"
              src={microsoft}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Partners;
