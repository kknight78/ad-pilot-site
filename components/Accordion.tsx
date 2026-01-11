"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-black/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-start justify-between gap-4 text-left hover:bg-black/[0.02] transition-colors -mx-1 px-1 rounded"
      >
        <span className="text-sm font-semibold text-ink">{question}</span>
        <ChevronDown
          className={`h-4 w-4 text-black/40 shrink-0 mt-0.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-40 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-black/65 pr-8">{answer}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { q: string; a: string }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split items into two columns
  const midpoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midpoint);
  const rightItems = items.slice(midpoint);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="card p-5">
        {leftItems.map((item, index) => (
          <AccordionItem
            key={item.q}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
      <div className="card p-5">
        {rightItems.map((item, index) => (
          <AccordionItem
            key={item.q}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === index + midpoint}
            onToggle={() => handleToggle(index + midpoint)}
          />
        ))}
      </div>
    </div>
  );
}
