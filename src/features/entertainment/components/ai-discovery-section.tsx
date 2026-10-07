"use client";

import { type FormEvent, useMemo, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import {
  aiCapabilities,
  aiResults,
} from "@/features/entertainment/data/content";

const defaultAiQuery =
  "Find positive energy content for a summer launch campaign.";

const ignoredSearchTerms = new Set([
  "about",
  "content",
  "find",
  "for",
  "the",
  "with",
]);

function getSearchTerms(query: string) {
  return query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((term) => term.length > 2 && !ignoredSearchTerms.has(term));
}

export function AiDiscoverySection() {
  const [query, setQuery] = useState(defaultAiQuery);
  const [assistantQuery, setAssistantQuery] = useState("");

  const matchingResults = useMemo(() => {
    const searchTerms = getSearchTerms(query);

    if (searchTerms.length === 0) {
      return aiResults;
    }

    return aiResults.filter((result) => {
      const searchableContent = [
        result.title,
        result.detail,
        ...result.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return searchTerms.some((term) => searchableContent.includes(term));
    });
  }, [query]);

  function updateAssistantQuery(nextQuery: string) {
    setAssistantQuery(nextQuery);
    setQuery(nextQuery.trim() === "" ? defaultAiQuery : nextQuery);
  }

  function handleAssistantSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setQuery(assistantQuery.trim() === "" ? defaultAiQuery : assistantQuery);
  }

  return (
    <section
      id="ai"
      data-node-id="10:2"
      aria-labelledby="ai-title"
      className="bg-[#110d19] xl:h-[640px]"
    >
      <PageContainer className="flex h-full flex-col gap-14 py-16 xl:flex-row xl:items-center xl:gap-20 xl:py-16">
        <div
          data-node-id="10:3"
          className="flex flex-col items-start gap-[22px] overflow-hidden xl:w-[510px] xl:shrink-0"
        >
          <p className="text-vibe-purple text-[11px] leading-[13px] font-semibold">
            VIBE AI / CONTENT INTELLIGENCE
          </p>
          <h2
            id="ai-title"
            className="font-display text-4xl leading-tight font-bold text-[#f7f3fa] sm:text-5xl xl:w-[510px] xl:text-[52px] xl:leading-[56px]"
          >
            Find the right signal
            <br />
            in a sea of content.
          </h2>
          <p className="max-w-[480px] text-[17px] leading-[27px] text-[#aaa1b5]">
            AI understands mood, context and audience behavior to connect works
            with the right people — at the right moment.
          </p>

          <ol className="flex flex-col gap-[14px] xl:w-[480px]">
            {aiCapabilities.map((capability, index) => (
              <li
                key={capability}
                className="flex min-h-[46px] items-center gap-4"
              >
                <span
                  className={`flex size-[34px] shrink-0 items-center justify-center rounded-[10px] text-[11px] leading-[13px] font-semibold ${
                    index === 0
                      ? "bg-vibe-lime text-[#11150b]"
                      : "bg-[#282131] text-[#c1b5cb]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] leading-[17px] font-medium text-[#eee9f2]">
                  {capability}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <article
          data-node-id="10:20"
          className="rounded-panel-lg flex w-full flex-col items-start gap-[18px] overflow-hidden border border-[#4f3b5c] bg-gradient-to-r from-[#251534] to-[#102329] px-5 py-[26px] sm:pr-[26px] sm:pl-7 xl:h-[500px] xl:w-[720px] xl:shrink-0"
        >
          <div
            data-node-id="10:21"
            className="flex h-9 w-full items-center justify-between"
          >
            <h3 className="font-display text-[16px] leading-[17px] font-semibold text-white">
              ✦&nbsp; VIBE AI
            </h3>
            <span className="text-vibe-lime rounded-full bg-[#1e3524] px-[11px] py-[7px] text-[10px] leading-3 font-semibold">
              ONLINE
            </span>
          </div>

          <div
            data-node-id="10:25"
            className="w-full rounded-[18px] bg-[#332840] px-[18px] py-[15px] xl:w-[636px]"
          >
            <label className="sr-only" htmlFor="ai-content-search">
              Search content with VIBE AI
            </label>
            <div className="flex items-start text-[14px] leading-[17px] text-[#f4eff8]">
              <span aria-hidden="true">“</span>
              <input
                id="ai-content-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="min-w-0 flex-1 bg-transparent text-[14px] leading-[17px] text-[#f4eff8] outline-none placeholder:text-[#9c8dac]"
                placeholder="Search music, mood, campaign or rights"
              />
              <span aria-hidden="true">”</span>
            </div>
          </div>

          <div
            data-node-id="10:27"
            className="flex w-full flex-col items-start gap-[13px] rounded-[18px] bg-[#13111b] px-[18px] py-4 xl:h-[225px] xl:w-[636px]"
          >
            <p className="text-[13px] leading-4 text-[#bdb4c5]">
              Analyzed 2,438 pieces of content and found{" "}
              {matchingResults.length} matching clusters:
            </p>
            <ol className="flex w-full flex-col gap-[13px] xl:w-[594px]">
              {matchingResults.map((result, index) => (
                <li
                  key={result.title}
                  className="flex h-[46px] w-full items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[11px] leading-[13px] font-semibold ${
                        index === 0 ? "text-vibe-lime" : "text-[#8d8297]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col items-start gap-[3px]">
                      <p className="text-[13px] leading-4 font-semibold text-[#f8f5fa]">
                        {result.title}
                      </p>
                      <p className="text-[11px] leading-[13px] text-[#918798]">
                        {result.detail}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-vibe-purple text-[16px] leading-[19px] font-semibold"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </li>
              ))}
            </ol>
            {matchingResults.length === 0 ? (
              <p className="text-[12px] leading-[15px] text-[#918798]">
                No matching clusters yet.
              </p>
            ) : null}
          </div>

          <form
            data-node-id="10:50"
            onSubmit={handleAssistantSubmit}
            className="flex h-12 w-full items-center justify-between rounded-full border border-[#3d3347] bg-[#0c0b11] pr-2 pl-4"
          >
            <label className="sr-only" htmlFor="ai-assistant-search">
              Ask VIBE AI about content, trends or rights
            </label>
            <input
              id="ai-assistant-search"
              type="search"
              value={assistantQuery}
              onChange={(event) => updateAssistantQuery(event.target.value)}
              className="min-w-0 flex-1 bg-transparent text-[12px] leading-[15px] text-[#f4eff8] outline-none placeholder:text-[#756c7e]"
              placeholder="Ask VIBE AI about content, trends or rights..."
            />
            <button
              type="submit"
              aria-label="Search VIBE AI content"
              className="bg-vibe-lime flex size-[34px] shrink-0 items-center justify-center rounded-full text-[16px] leading-[19px] font-semibold text-[#10130a]"
            >
              ↑
            </button>
          </form>
        </article>
      </PageContainer>
    </section>
  );
}
