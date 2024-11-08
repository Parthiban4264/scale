import React from "react";
import DataCuration from "../../assets/images/data-curation.png";

function BuildAi() {
  return (
    <div className="w-full max-w-[1280px] mx-auto">
      {/* header */}
      <div className="relative z-10 mx-auto mb-16 flex max-w-3xl flex-col items-center justify-center text-center md:mb-20 md:mt-12">
        <div className="mb-5 overflow-hidden rounded-full bg-white bg-opacity-5 px-4 py-2 text-xs uppercase tracking-[3px] text-[#D1AAD7] md:px-5 md:py-2 lg:mb-5 lg:text-xs">
          <span>Build AI</span>
        </div>
        <h2 className=" md:text-4.5xl text-3xl leading-snug text-white lg:text-5xl lg:leading-[1.25]">
          Scale Data Engine
        </h2>
        <p className="mt-4 leading-[1.60] text-neutral-100 [text-wrap:balance] lg:mt-2 lg:text-xl lg:text-gray-300">
          For AI teams, Scale Data Engine improves your models by improving your
          data.
        </p>
      </div>
      {/* section-1 */}
      <div className="3xl:py-[95px] relative z-10 flex flex-col-reverse overflow-hidden rounded-2xl p-6 md:p-10 lg:flex-row-reverse justify-between lg:rounded-[34px] lg:py-12 xl:py-20 xl:px-24">
        <div className="w-full flex-1 flex-col justify-center lg:items-start xl:flex xl:w-auto xl:min-w-[466px] xl:max-w-[466px]">
          <p className="font-aeonik text-3.5xl mb-2 text-white xl:text-4xl">
            RLHF
          </p>
          <p className="text-zinc-400">
            Powering the next generation of Generative AI
          </p>
          <p className="my-8 text-[#F5F5F5]">
            Scale Generative AI Data Engine powers the most advanced LLMs and
            generative models in the world through world-className RLHF, data
            generation, model evaluation, safety, and&nbsp;alignment.
          </p>
          <div className="xs:gap-x-6 flex items-center gap-x-3">
            <a
              className="relative inline-block rounded-xl outline-offset-[3px] outline-[rgba(255,255,255,0.64)] focus-visible:outline"
              href="/rlhf"
            >
              <div className="new-button_button--primary__EJ4AI transition-translate new-button_button--pink__gdR3d group group flex h-full cursor-pointer flex-nowrap items-center justify-center whitespace-nowrap px-[30px] py-[14px] text-sm font-medium leading-[150%] duration-300 text-white">
                Label My Data
                <span className="transition-translate font-unicode ml-1 inline-block w-fit font-normal duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
              <span className="pointer-events-none absolute inset-0 select-none rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:absolute after:inset-0 after:inline-block after:rounded-[11px] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)] after:content-['']"></span>
            </a>
          </div>
        </div>
        <div className="xl:shadow-super relative -m-3 mb-9 aspect-[649/402] min-w-full max-w-[calc(100%+24px)] select-none overflow-hidden rounded-[10px] shadow-xl transition-transform duration-1000 ease-out md:mx-0 md:mt-0 lg:mb-0 lg:flex lg:w-1/2 lg:min-w-[50%] xl:h-[402px] xl:w-[649px] xl:min-w-[unset]">
          <div className="relative aspect-[649/402] w-full overflow-hidden rounded-[10px]">
            <div className="grid grid-cols-3 p-2 sm:p-3 md:grid-cols-3">
              <div className="flex space-x-[3px] sm:space-x-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-red-400 sm:h-3 sm:w-3"></div>
                <div className="bg-utility-yellow h-1.5 w-1.5 rounded-full sm:h-3 sm:w-3"></div>
                <div className="bg-utility-green h-1.5 w-1.5 rounded-full sm:h-3 sm:w-3"></div>
              </div>
              <div className="flex justify-center pt-2 text-[7px] font-medium text-neutral-200 sm:text-base">
                AI Text Generator
              </div>
              <div></div>
            </div>
            <div className="relative h-full space-y-1 px-6 py-3 text-xs text-neutral-200 sm:space-y-2">
              <div className="flex w-fit items-center space-x-1 rounded-[18px] border border-white border-opacity-[0.16] bg-white/5 px-1.5 py-[3px] sm:space-x-2 md:py-[4.5px] md:pl-[7px] md:pr-3">
                <img
                  className="inline-block h-2 w-2 rounded-full sm:h-[18px] sm:w-[18px]"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
                <div className="text-[7px] transition-opacity sm:text-sm">
                  Why is human feedback necessary for accurate llm responses?
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <div className="rounded-[18px] p-[0.5px] sm:p-px">
                  <div className="flex h-[19px] w-full items-center space-x-1 rounded-[18px] bg-black p-[3px] sm:space-x-2 md:h-auto">
                    <div className="w-fit px-1.5 py-[3px] transition-opacity md:py-[3px] md:pl-3 md:pr-[7px]">
                      ..
                    </div>
                    <img
                      className="inline-block h-2 w-2 rounded-full sm:h-[18px] sm:w-[18px]"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 z-10 w-full"></div>
          </div>
        </div>
      </div>
      {/* section-2 */}

      <div className="3xl:py-[95px] relative z-10 flex flex-col-reverse overflow-hidden rounded-2xl p-6 justify-between md:p-10 lg:flex-row lg:rounded-[34px] lg:py-12 xl:py-20 xl:px-24">
        <div className="w-full flex-1 flex-col justify-center lg:items-start xl:flex xl:w-auto xl:min-w-[466px] xl:max-w-[466px]">
          <p className="font-aeonik text-3.5xl mb-2 text-white xl:text-4xl">
            Data Labeling
          </p>
          <p className="text-zinc-400">
            The best quality data to fuel the best performing models
          </p>
          <div className="mt-8 lg:mt-10">
            <div>
              <div className="flex flex-col-reverse items-start lg:flex-row">
                <div className="no-scrollbar relative max-w-full overflow-visible sm:mx-0 lg:w-[47%] xl:w-auto">
                  <div className="no-scrollbar -mx-8 mb-8 overflow-x-auto px-8 lg:overflow-x-visible lg:overflow-y-visible">
                    <div
                      className="tabs_tabs__qQMp5"
                      role="tablist"
                      aria-orientation="horizontal"
                    >
                      <div className="absolute rounded-full border border-white/10 bg-white/10"></div>
                      <button
                        className="relative rounded-full px-4 py-2 text-white transition-colors duration-200 after:absolute after:right-0 after:top-1/2 after:inline-block after:h-1/2 after:w-px after:-translate-y-1/2 after:scale-y-0 after:bg-white after:bg-opacity-[0.15] after:transition-transform after:duration-100 focus:outline-none"
                        id="headlessui-tabs-tab-:R6bdnluqd6:"
                        role="tab"
                        type="button"
                        aria-selected="true"
                        tabindex="0"
                        data-headlessui-state="selected"
                        aria-controls="headlessui-tabs-panel-:Rddnluqd6:"
                        data-selected=""
                      >
                        3D
                      </button>
                      <button
                        className="relative rounded-full px-4 py-2 text-white/50 transition-colors duration-200 after:absolute after:right-0 after:top-1/2 after:inline-block after:h-1/2 after:w-px after:-translate-y-1/2 after:bg-white after:bg-opacity-[0.15] after:transition-transform after:duration-100 focus:outline-none"
                        id="headlessui-tabs-tab-:Rabdnluqd6:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabindex="-1"
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:Rldnluqd6:"
                      >
                        Image
                      </button>
                      <button
                        className="relative rounded-full px-4 py-2 text-white/50 transition-colors duration-200 after:absolute after:right-0 after:top-1/2 after:inline-block after:h-1/2 after:w-px after:-translate-y-1/2 after:bg-white after:bg-opacity-[0.15] after:transition-transform after:duration-100 focus:outline-none"
                        id="headlessui-tabs-tab-:Rebdnluqd6:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabindex="-1"
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:Rtdnluqd6:"
                      >
                        Mapping
                      </button>
                      <button
                        className="relative rounded-full px-4 py-2 text-white/50 transition-colors duration-200 after:absolute after:right-0 after:top-1/2 after:inline-block after:h-1/2 after:w-px after:-translate-y-1/2 after:bg-white after:bg-opacity-[0.15] after:transition-transform after:duration-100 focus:outline-none"
                        id="headlessui-tabs-tab-:Ribdnluqd6:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabindex="-1"
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:R15dnluqd6:"
                      >
                        Text
                      </button>
                      <button
                        className="relative rounded-full px-4 py-2 text-white/50 transition-colors duration-200 focus:outline-none"
                        id="headlessui-tabs-tab-:Rmbdnluqd6:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabindex="-1"
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:R1ddnluqd6:"
                      >
                        Audio
                      </button>
                    </div>
                  </div>
                  <p className="mb-8 text-[#F5F5F5]">
                    Scale has pioneered in the data labeling industry by
                    combining AI-based techniques with human-in-the-loop,
                    delivering labeled data at unprecedented quality,
                    scalability, and efficiency.
                  </p>
                  <div className="xs:!gap-x-6 flex items-center gap-x-6">
                    <a
                      className="relative inline-block rounded-xl outline-offset-[3px] outline-[rgba(255,255,255,0.64)] focus-visible:outline"
                      href="https://dashboard.scale.com/signup?product=rapid&amp;redirect_url=%2Frapid"
                    >
                      <div className="new-button_button--primary__EJ4AI transition-translate new-button_button--pink__gdR3d group group flex h-full cursor-pointer flex-nowrap items-center justify-center whitespace-nowrap px-[30px] py-[14px] text-sm font-medium leading-[150%] duration-300 text-white">
                        Label My Data
                        <span className="transition-translate font-unicode ml-1 inline-block w-fit font-normal duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                      <span className="pointer-events-none absolute inset-0 select-none rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:absolute after:inset-0 after:inline-block after:rounded-[11px] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)] after:content-['']"></span>
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-auto">
                  <div
                    id="headlessui-tabs-panel-:Rddnluqd6:"
                    role="tabpanel"
                    aria-labelledby="headlessui-tabs-tab-:R6bdnluqd6:"
                    tabindex="0"
                    data-headlessui-state="selected"
                    data-selected=""
                  >
                    <div className="xl:shadow-super relative mb-9 aspect-[649/402] w-full min-w-full max-w-max select-none overflow-hidden rounded-[10px] border border-[#D1AAD7]/[0.16] bg-black shadow-xl transition-transform duration-1000 ease-out lg:absolute lg:top-1/2 lg:left-1/2 lg:mb-0 lg:w-1/2 lg:min-w-[50%] lg:-translate-y-1/2  xl:h-[402px] xl:w-[600px] xl:min-w-[unset]">
                      <iframe
                        src="https://lidar-now.scale.com/scene?title=Scene%20%231"
                        className="absolute inset-0 h-full w-full bg-black"
                      ></iframe>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    id="headlessui-tabs-panel-:Rldnluqd6:"
                    role="tabpanel"
                    aria-labelledby="headlessui-tabs-tab-:Rabdnluqd6:"
                    tabindex="-1"
                  ></span>
                  <span
                    aria-hidden="true"
                    id="headlessui-tabs-panel-:Rtdnluqd6:"
                    role="tabpanel"
                    aria-labelledby="headlessui-tabs-tab-:Rebdnluqd6:"
                    tabindex="-1"
                  ></span>
                  <span
                    aria-hidden="true"
                    id="headlessui-tabs-panel-:R15dnluqd6:"
                    role="tabpanel"
                    tabindex="-1"
                    aria-labelledby="headlessui-tabs-tab-:Ribdnluqd6:"
                  ></span>
                  <span
                    aria-hidden="true"
                    id="headlessui-tabs-panel-:R1ddnluqd6:"
                    role="tabpanel"
                    tabindex="-1"
                    aria-labelledby="headlessui-tabs-tab-:Rmbdnluqd6:"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-3 */}

      <div className="3xl:py-[95px] relative z-10 flex flex-col-reverse overflow-hidden rounded-2xl p-6 justify-between md:p-10 lg:flex-row-reverse lg:rounded-[34px] lg:py-12 xl:py-20 xl:px-24">
        <div className="w-full flex-1 flex-col justify-center lg:items-start xl:flex xl:w-auto xl:min-w-[466px] xl:max-w-[466px]">
          <p className="font-aeonik text-3.5xl mb-2 text-white xl:text-4xl">
            Data Curation
          </p>
          <p className="text-zinc-400">
            Unearth the most valuable data by intelligently managing your
            dataset
          </p>
          <p className="my-8 text-[#F5F5F5]">
            Scale’s suite of dataset management, testing, model evaluation, and
            model comparison tools enable you to “label what matters.” Maximize
            the value of your labeling budget by identifying the highest value
            data to label, even without ground truth&nbsp;labels.
          </p>
          <div className="xs:gap-x-6 flex items-center gap-x-3">
            <a
              className="relative inline-block rounded-xl outline-offset-[3px] outline-[rgba(255,255,255,0.64)] focus-visible:outline"
              href="https://dashboard.scale.com/nucleus"
            >
              <div className="new-button_button--primary__EJ4AI transition-translate new-button_button--pink__gdR3d group group flex h-full cursor-pointer flex-nowrap items-center justify-center whitespace-nowrap px-[30px] py-[14px] text-sm font-medium leading-[150%] duration-300 text-white">
                Curate My Data
                <span className="transition-translate font-unicode ml-1 inline-block w-fit font-normal duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
              <span className="pointer-events-none absolute inset-0 select-none rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:absolute after:inset-0 after:inline-block after:rounded-[11px] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)] after:content-['']"></span>
            </a>
          </div>
        </div>
        <div className=" xl:shadow-super relative -m-3 mb-9 aspect-[630/420] min-w-full max-w-[calc(100%+24px)] select-none overflow-hidden rounded-[10px] shadow-xl transition-transform duration-1000 ease-out md:mx-0 md:mt-0 lg:mb-0 lg:flex lg:w-1/2 lg:min-w-[50%]  xl:h-[420px] xl:w-[540px] xl:min-w-[unset]">
          <div className="border border-[rgba(200,139,196,0.4)] relative aspect-[630/420] w-full overflow-hidden rounded-[10px]">
            <img
              alt="data-curation"
              loading="lazy"
              width="600"
              height="432"
              src={DataCuration}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildAi;
