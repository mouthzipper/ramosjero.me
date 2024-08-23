export default function Footer({ year }: { year: number }) {
  return (
    <footer style={{ padding: "2rem", color: "#4B4B4B" }}>
      <p style={{ fontSize: "18px" }}>© {year}</p>
    </footer>
  );
}
