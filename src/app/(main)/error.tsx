"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        className="link-base text-2xl text-foreground hover:text-primary"
        onClick={() => reset()}
      >
        Reset and try again
      </button>
    </div>
  );
}
