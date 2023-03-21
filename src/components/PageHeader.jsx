import React from 'react'

export default function PageHeader({ text, cssDiv, cssH1 }) {
  return (
    <div className={`s-wrapper px-4 pt-[5rem] pb-[4rem] md:px-0 ${cssDiv}`}>
      <h1
        className={`w-full font-figtree font-semibold text-4xl text-gray-100 text-center md:text-left ${cssH1}`}
      >
        {text}
      </h1>
    </div>
  );
}
