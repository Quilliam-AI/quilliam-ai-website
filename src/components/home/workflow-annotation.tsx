// Hand-drawn marginalia. Sits in the gap beside the workflow card with
// a wobbly arrow extending to the outer card frame. Container is
// anchored to the card so tip-to-card distance stays constant.
//
// The H1-to-card gap measures ~202px at 1280, ~262px at 1440+. At
// 2xl+ (1536+) we have ~262px to play with so we use a wider, larger
// callout. Between xl and 2xl we shrink the container so the text
// never overlaps the H1.
//
// Mobile responsiveness: `hidden xl:block` — at lg/md/sm the gutter
// beside the card collapses or the card stacks below hero text, so
// the marginalia disappears entirely.

interface WorkflowAnnotationProps {
  side?: "left" | "right";
}

export function WorkflowAnnotation({ side = "left" }: WorkflowAnnotationProps) {
  const isRight = side === "right";

  return (
    <div
      className={`hidden 2xl:block absolute top-[180px] w-[250px] z-20 pointer-events-none select-none ${
        isRight ? "left-full" : "right-full"
      }`}
      aria-hidden
    >
      <p
        className={`text-emerald-300/90 text-[24px] leading-[1.1] w-[160px] -rotate-[3deg] ${
          isRight ? "ml-10" : "ml-1"
        }`}
        style={{
          fontFamily: "var(--font-caveat), cursive",
          fontWeight: 600,
        }}
      >
        this could be
        <br />
        running in your
        <br />
        business
      </p>
      {/* Arrow lives BELOW the text so it doesn't overlap the
          letterforms vertically. */}
      <svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        fill="none"
        className={`absolute top-[92px] ${isRight ? "-left-[6px]" : "-right-[6px]"}`}
        aria-hidden
      >
        {isRight ? (
          <>
            <path
              d="M 116 50
                 C 96 44, 72 36, 48 26
                 S 20 14, 8 8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
              className="text-emerald-300/80"
            />
            <path
              d="M 8 8 L 18 8 M 8 8 L 12 16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
              className="text-emerald-300/80"
            />
          </>
        ) : (
          <>
            <path
              d="M 4 50
                 C 24 44, 48 36, 72 26
                 S 100 14, 112 8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
              className="text-emerald-300/80"
            />
            <path
              d="M 112 8 L 102 8 M 112 8 L 108 16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
              className="text-emerald-300/80"
            />
          </>
        )}
      </svg>
    </div>
  );
}
