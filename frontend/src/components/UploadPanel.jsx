export default function UploadPanel({ title, description, accept = ".csv,.txt,.dat", file, onFileChange, inputId }) {
  return <section className="panel upload-panel">
    <div><h3>{title}</h3>{description && <p className="muted">{description}</p>}</div>
    <label className="file-picker" htmlFor={inputId}>
      <span className="button button-secondary">Choose file</span>
      <span className="file-name">{file?.name ?? "No file selected"}</span>
    </label>
    <input className="visually-hidden" id={inputId} type="file" accept={accept}
      onChange={event => onFileChange(event.target.files?.[0] ?? null)} />
  </section>;
}
