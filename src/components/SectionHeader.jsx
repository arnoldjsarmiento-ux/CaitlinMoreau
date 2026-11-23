export default function SectionHeader({ index, eyebrow, title, subtitle }) {
  return (
    <div className="section-header reveal">
      <span className="eyebrow">
        <span className="mono">{index}.</span> {eyebrow}
      </span>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
