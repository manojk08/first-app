export default function Child({ message }: { message: string }) {
  return (
    <section
      aria-live="polite"
      style={{
        borderLeft: "4px solid #087f6c",
        padding: "8px 12px",
      }}
    >
      <h2>Child component</h2>
      <p>{message || "Your message will appear here."}</p>
    </section>
  );
}