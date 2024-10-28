import React from "react";

export const AnimatedBlobs = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-blobMove rounded-full bg-orange-200 opacity-30 mix-blend-multiply blur-xl filter dark:bg-orange-800 dark:opacity-20"></div>
    <div className="animation-delay-2000 absolute right-1/3 top-1/3 h-72 w-72 animate-blobMove rounded-full bg-orange-300 opacity-30 mix-blend-multiply blur-xl filter dark:bg-orange-700 dark:opacity-20"></div>
    <div className="animation-delay-4000 absolute bottom-1/4 left-1/2 h-72 w-72 animate-blobMove rounded-full bg-orange-100 opacity-30 mix-blend-multiply blur-xl filter dark:bg-orange-900 dark:opacity-20"></div>
  </div>
);
