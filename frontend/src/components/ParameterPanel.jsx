export default function ParameterPanel({ title = "Method parameters", children, onSubmit, submitLabel = "Calculate" }) {
  return <section className="panel parameter-panel">
    <h2>{title}</h2>
    <div className="parameter-content">{children ?? <p className="muted">Method-specific parameters will appear here.</p>}</div>
    {onSubmit && <div className="panel-actions"><button className="button button-primary" type="button" onClick={onSubmit}>{submitLabel}</button></div>}
  </section>;
}
