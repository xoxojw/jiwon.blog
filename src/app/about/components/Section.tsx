import React, { ReactNode } from "react";

type SectionProps = {
  index: number;
  sectionTitle?: string;
  sectionSubTitle?: string;
  children: ReactNode;
};

const Section = ({ index, sectionTitle, sectionSubTitle, children }: SectionProps) => {
  return (
    <section className="animate-in w-full flex flex-col gap-6" style={{ "--index": index } as React.CSSProperties}>
      <div className="flex flex-col gap-1">
        {sectionTitle ? <h2 className="heading-second font-mono">{sectionTitle}</h2> : null}
        {sectionSubTitle ? (
          <h3 className="text-lg text-gray-700 dark:text-gray-500 italic">{sectionSubTitle}</h3>
        ) : null}
      </div>
      {children}
    </section>
  );
};

export default Section;
