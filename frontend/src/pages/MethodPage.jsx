import { useState } from "react";
import UploadPanel from "../components/UploadPanel.jsx";
import ParameterPanel from "../components/ParameterPanel.jsx";

export default function MethodPage({ method, subtitle }) {
  const [continuumFile, setContinuumFile] = useState(null);
  const [lineFile, setLineFile] = useState(null);
  const [message, setMessage] = useState("");

  function handleCalculate() {
    if (!continuumFile || !lineFile) {
      setMessage("Please select both the continuum and emission-line files.");
      return;
    }
    setMessage("Both files are selected. Python backend integration will be added next.");
  }

  return <div className="page method-page">
    <div className="page-heading"><p className="eyebrow">Calculation workspace</p><h2>{method}</h2><p className="muted">{subtitle}</p></div>
    <div className="upload-grid">
      <UploadPanel title="Continuum light curve" description="Select the continuum observation data."
        inputId={`${method.toLowerCase()}-continuum`} file={continuumFile} onFileChange={setContinuumFile} />
      <UploadPanel title="Emission-line light curve" description="Select the emission-line observation data."
        inputId={`${method.toLowerCase()}-line`} file={lineFile} onFileChange={setLineFile} />
    </div>
    <ParameterPanel onSubmit={handleCalculate}>
      <div className="form-row"><label htmlFor={`${method}-lag-min`}>Minimum lag (days)</label><input id={`${method}-lag-min`} type="number" defaultValue="-100" /></div>
      <div className="form-row"><label htmlFor={`${method}-lag-max`}>Maximum lag (days)</label><input id={`${method}-lag-max`} type="number" defaultValue="100" /></div>
      <p className="muted small-note">Starter controls only. Parameter choices and limits will later depend on the method and uploaded data.</p>
    </ParameterPanel>
    {message && <p className="status-message" role="status">{message}</p>}
    <section className="panel results-panel"><h2>Results</h2><p className="muted">Calculation results and interactive plots will appear here.</p></section>
  </div>;
}
