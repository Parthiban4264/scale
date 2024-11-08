import wholeModel from "../../assets/images/whole-model.png";
export default function AiArchitecture() {
  return (
    <div className="">
      <div className="mx-auto pb-16 flex max-w-3xl flex-col items-center justify-center text-center md:pb-20 md:pt-12">
        <div className="mb-5 overflow-hidden rounded-full bg-opacity-5 px-4 py-2 text-xs uppercase tracking-[3px] text-[#D1AAD7] md:px-5 md:py-2 lg:mb-5 lg:text-xs">
          <span>AI for the Enterprise</span>
        </div>
        <h2 className="md:text-4.5xl text-3xl text-white lg:text-5xl lg:leading-[1.25]">
          Generative AI Architecture
        </h2>
        <p className="mt-4 leading-[1.60] text-neutral-100 lg:mt-2 lg:text-xl lg:text-gray-300">
          Whether you’re building your own models or applying foundation models
          to your business, data remains the biggest bottleneck to AI.
        </p>
        <div className="mt-8 rounded-xl text-white outline-offset-[3px] border border-pink-500 group flex h-full cursor-pointer flex-nowrap items-center justify-center px-[30px] py-[14px] text-sm font-medium leading-[150%] duration-300">
          Book a Demo
          <span className="transition-translate font-unicode ml-1 inline-block w-fit font-normal duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <div className="max-w-[510px] px-6">
          <div className="group group cursor-pointer border-b border-white/10 opacity-100 transition-all duration-300 last:border-transparent hover:border-white hover:opacity-100 hover:last:border-white">
            <p className="font-aeonik w-full pb-2 pt-6 text-left text-2xl leading-10 text-white">
              Fine-Tuning and RLHF
            </p>
            <p className="overflow-hidden pb-6 text-white transition-colors group-hover:text-white/70">
              Adapt best-in-className foundation models to your business and
              your specific data to build sustainable, successful AI programs
              and data from your enterprise.
            </p>
          </div>
          <div className="group group cursor-pointer border-b border-white/10 opacity-30 transition-all duration-300 last:border-transparent hover:border-white hover:opacity-100 hover:last:border-white">
            <p className="font-aeonik w-full pb-2 pt-6 text-left text-2xl leading-10 text-white">
              Foundation Models
            </p>
            <p className="overflow-hidden pb-6 text-white transition-colors group-hover:text-white/70">
              Scale partners or integrates with all of the leading AI models,
              from open-source to closed-source, including OpenAI, Google, Meta,
              Cohere, and more.
            </p>
          </div>
          <div className="group group cursor-pointer border-b border-white/10 opacity-30 transition-all duration-300 last:border-transparent hover:border-white hover:opacity-100 hover:last:border-white">
            <p className="font-aeonik w-full pb-2 pt-6 text-left text-2xl leading-10 text-white">
              Enterprise Data
            </p>
            <p className="overflow-hidden pb-6 text-white transition-colors group-hover:text-white/70">
              Scale's Data Engine enables you to integrate your enterprise data
              into the fold of these models, providing the base for long-term
              strategic differentiation.
            </p>
          </div>
        </div>
        <img
          src={wholeModel}
          alt="Whole-model image"
          className="w-[600px] h-auto md:ms-10"
        />
      </div>
    </div>
  );
}
