import React, { ReactNode } from 'react'

type Props = {
  heading: string
  content?: ReactNode
}

export default function SectionHeading({ heading, content }: Props) {
  return (
    <div className="mb-10 text-center">
      <h2
        style={{
          fontSize: "clamp(2rem, 1.804rem + 0.87vw, 2.5rem)",
        }}
        className="font-heading font-bold"
      >
        {heading}
      </h2>
      {content && (
        <p
          style={{
            fontSize: "clamp(1rem, 0.951rem + 0.22vw, 1.125rem)",
          }}
          className="text-muted-foreground mt-3 text-sm max-w-[580px] mx-auto"
        >
          {content}
        </p>
      )}
    </div>
  );
}
