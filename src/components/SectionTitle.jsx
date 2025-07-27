const SectionTitle = ({text, stroke}) => {
  return (
      <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
        {`${text} `}
        <span
          className="font-extrabold"
          style={{
            WebkitTextStroke: "1px var(--foreground)",
            WebkitTextFillColor: "transparent",
            color: "var(--foreground)", // fallback if stroke not supported
          }}
        >
          {stroke}
        </span>
      </h1>
  );
};

export default SectionTitle;
