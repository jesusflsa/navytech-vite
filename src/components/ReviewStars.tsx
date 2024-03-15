function ReviewStars({ score }: { score: number }) {
  let scoreValue = [];
  for (let i = 0; i < 5; i++) {
    scoreValue.push(
      score > i ? Star({ filled: true }) : Star({ filled: false })
    );
  }
  return <div className="flex gap-1">{scoreValue}</div>;
}

function Star({ filled }: { filled: boolean }) {
  return filled ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none">
      <path
        fill="#003BA4"
        d="M8.5 1a1 1 0 0 1 2 0L12 5.5c.1.4.5.7 1 .7h4.8a1 1 0 0 1 .6 1.8l-4 2.9a1 1 0 0 0-.3 1.1l1.5 4.7a1 1 0 0 1-1.5 1.1L10 15a1 1 0 0 0-1.2 0L5 18a1 1 0 0 1-1.5-1.1L4.9 12a1 1 0 0 0-.3-1.1L.6 8a1 1 0 0 1 .6-1.8H6a1 1 0 0 0 1-.7L8.4.9Z"
      />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="none">
      <path
        fill="#D9D9D9"
        d="M9 1a1 1 0 0 1 2 0l1.5 4.6c.1.4.5.7 1 .7h4.8A1 1 0 0 1 19 8L15 11a1 1 0 0 0-.3 1.1l1.5 4.7a1 1 0 0 1-1.5 1.1l-4-2.9a1 1 0 0 0-1.2 0l-4 2.9A1 1 0 0 1 4 16.8L5.4 12a1 1 0 0 0-.3-1.1L1 8a1 1 0 0 1 .6-1.8h4.9a1 1 0 0 0 1-.7L9 .9Z"
      />
    </svg>
  );
}

export default ReviewStars;
