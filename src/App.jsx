import { useState, useEffect, useCallback } from 'react';
import LoaderOverlay from 'loader-overlay';

const DEMOS = [
  {
    id: 'spinner-dark',
    title: 'Spinner · Dark',
    description: 'Classic spinner animation with a dark glassmorphism backdrop.',
    tags: [
      { label: 'spinner', color: 'purple' },
      { label: 'dark', color: 'blue' },
    ],
    props: { type: 'spinner', variant: 'dark', color: '#a78bfa', message: 'Loading...', fullScreen: true },
    btnClass: 'btn-primary',
  },
  {
    id: 'dots-gradient',
    title: 'Dots · Gradient',
    description: 'Bouncing dots with a gradient background overlay.',
    tags: [
      { label: 'dots', color: 'green' },
      { label: 'gradient', color: 'pink' },
    ],
    props: { type: 'dots', variant: 'gradient', color: '#60d394', message: 'Fetching data...', fullScreen: true },
    btnClass: 'btn-success',
  },
  {
    id: 'pulse-blur',
    title: 'Pulse · Blur',
    description: 'Pulsing animation with frosted glass blur effect.',
    tags: [
      { label: 'pulse', color: 'blue' },
      { label: 'blur', color: 'amber' },
    ],
    props: { type: 'pulse', variant: 'blur', color: '#60a5fa', message: 'Processing...', blur: 12, fullScreen: true },
    btnClass: 'btn-info',
  },
  {
    id: 'ring-light',
    title: 'Ring · Light',
    description: 'Rotating ring loader with a light theme overlay.',
    tags: [
      { label: 'ring', color: 'amber' },
      { label: 'light', color: 'green' },
    ],
    props: { type: 'ring', variant: 'light', color: '#f59e0b', message: 'Syncing...', fullScreen: true },
    btnClass: 'btn-warning',
  },
  {
    id: 'bar-progress',
    title: 'Bar · Progress',
    description: 'Linear bar loader with animated shimmer progress tracking.',
    tags: [
      { label: 'bar', color: 'pink' },
      { label: 'progress', color: 'purple' },
    ],
    props: { type: 'bar', variant: 'dark', color: '#f472b6', message: 'Uploading file...', showProgress: true, fullScreen: true },
    btnClass: 'btn-danger',
    hasProgress: true,
  },
  {
    id: 'closable-outside',
    title: 'Closable · Outside Click',
    description: 'Dismiss the loader by clicking outside or the ✕ button.',
    tags: [
      { label: 'closable', color: 'green' },
      { label: 'outside-click', color: 'blue' },
    ],
    props: {
      type: 'spinner',
      variant: 'dark',
      color: '#34d399',
      message: 'Click outside to dismiss',
      submessage: 'Or click the ✕ button',
      closable: true,
      closeOnOutsideClick: true,
      fullScreen: true,
    },
    btnClass: 'btn-outline',
  },
];

const PROPS_DATA = [
  { name: 'show', type: 'boolean', default: 'true', desc: 'Controls overlay visibility' },
  { name: 'type', type: "'spinner' | 'dots' | 'pulse' | 'ring' | 'bar'", default: "'spinner'", desc: 'Loader animation type' },
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", desc: 'Size of the loader' },
  { name: 'variant', type: "'dark' | 'light' | 'blur' | 'transparent' | 'gradient'", default: "'dark'", desc: 'Overlay background style' },
  { name: 'color', type: 'string', default: "'#a78bfa'", desc: 'Accent color (hex/rgb/css var)' },
  { name: 'message', type: 'string', default: "'Loading...'", desc: 'Primary status text' },
  { name: 'submessage', type: 'string', default: "''", desc: 'Secondary info text' },
  { name: 'fullScreen', type: 'boolean', default: 'false', desc: 'Fixed to viewport vs parent' },
  { name: 'zIndex', type: 'number', default: '999', desc: 'CSS z-index value' },
  { name: 'blur', type: 'number', default: '8', desc: 'Backdrop blur in px' },
  { name: 'showProgress', type: 'boolean', default: 'false', desc: 'Show progress bar' },
  { name: 'progress', type: 'number', default: '0', desc: 'Progress value 0–100' },
  { name: 'closable', type: 'boolean', default: 'false', desc: 'Show dismiss ✕ button' },
  { name: 'timeout', type: 'number', default: '0', desc: 'Auto-dismiss after ms' },
  { name: 'closeOnOutsideClick', type: 'boolean', default: 'false', desc: 'Click backdrop to dismiss' },
  { name: 'animateIn', type: 'boolean', default: 'true', desc: 'Fade-in animation on mount' },
  { name: 'children', type: 'ReactNode', default: 'null', desc: 'Custom content replacing icons' },
];

function DemoCard({ demo, onActivate }) {
  return (
    <div className={`demo-card fade-in fade-in-delay-${DEMOS.indexOf(demo) % 6 + 1}`}>
      <div className="demo-card-preview">
        <div className="preview-content">
          <div style={{ fontSize: 32, marginBottom: 8, opacity: 0.4 }}>
            {demo.props.type === 'spinner' && '⟳'}
            {demo.props.type === 'dots' && '⬤⬤⬤'}
            {demo.props.type === 'pulse' && '◉'}
            {demo.props.type === 'ring' && '◎'}
            {demo.props.type === 'bar' && '▬▬▬'}
          </div>
          <span>Click button to preview</span>
        </div>
      </div>
      <div className="demo-card-body">
        <h3>{demo.title}</h3>
        <p>{demo.description}</p>
        <div className="demo-card-tags">
          {demo.tags.map((t) => (
            <span key={t.label} className={`tag tag-${t.color}`}>{t.label}</span>
          ))}
        </div>
        <button className={`btn ${demo.btnClass}`} onClick={() => onActivate(demo)}>
          ▶ Launch Demo
        </button>
      </div>
    </div>
  );
}

function Playground() {
  const [config, setConfig] = useState({
    show: false,
    type: 'spinner',
    size: 'md',
    variant: 'dark',
    color: '#a78bfa',
    message: 'Loading...',
    submessage: '',
    blur: 8,
    fullScreen: false,
    showProgress: false,
    progress: 50,
    closable: false,
    closeOnOutsideClick: false,
    animateIn: true,
  });

  const update = (k, v) => setConfig((p) => ({ ...p, [k]: v }));

  return (
    <div className="playground fade-in">
      <div className="playground-controls">
        <h3 style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.04em' }}>⚙ Controls</h3>

        <div className="control-row">
          <div className="control-group">
            <label>Type</label>
            <select value={config.type} onChange={(e) => update('type', e.target.value)}>
              {['spinner', 'dots', 'pulse', 'ring', 'bar'].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="control-group">
            <label>Variant</label>
            <select value={config.variant} onChange={(e) => update('variant', e.target.value)}>
              {['dark', 'light', 'blur', 'transparent', 'gradient'].map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="control-row">
          <div className="control-group">
            <label>Size</label>
            <select value={config.size} onChange={(e) => update('size', e.target.value)}>
              {['sm', 'md', 'lg', 'xl'].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="control-group">
            <label>Color</label>
            <input type="text" value={config.color} onChange={(e) => update('color', e.target.value)} />
          </div>
        </div>

        <div className="control-group">
          <label>Message</label>
          <input type="text" value={config.message} onChange={(e) => update('message', e.target.value)} />
        </div>

        <div className="control-group">
          <label>Sub Message</label>
          <input type="text" value={config.submessage} onChange={(e) => update('submessage', e.target.value)} />
        </div>

        <div className="control-group">
          <label>Blur (px): {config.blur}</label>
          <input type="range" min="0" max="30" value={config.blur} onChange={(e) => update('blur', Number(e.target.value))} />
        </div>

        <div className="toggle-group">
          <label>Show Progress</label>
          <input className="toggle" type="checkbox" checked={config.showProgress} onChange={(e) => update('showProgress', e.target.checked)} />
        </div>

        {config.showProgress && (
          <div className="control-group">
            <label>Progress: {config.progress}%</label>
            <input type="range" min="0" max="100" value={config.progress} onChange={(e) => update('progress', Number(e.target.value))} />
          </div>
        )}

        <div className="toggle-group">
          <label>Closable</label>
          <input className="toggle" type="checkbox" checked={config.closable} onChange={(e) => update('closable', e.target.checked)} />
        </div>

        <div className="toggle-group">
          <label>Close on Outside Click</label>
          <input className="toggle" type="checkbox" checked={config.closeOnOutsideClick} onChange={(e) => update('closeOnOutsideClick', e.target.checked)} />
        </div>

        <div className="toggle-group">
          <label>Animate In</label>
          <input className="toggle" type="checkbox" checked={config.animateIn} onChange={(e) => update('animateIn', e.target.checked)} />
        </div>

        <button
          className="btn btn-primary"
          onClick={() => update('show', !config.show)}
        >
          {config.show ? '⏹ Hide Overlay' : '▶ Show Overlay'}
        </button>
      </div>

      <div className="playground-preview">
        <LoaderOverlay
          {...config}
          onClose={() => update('show', false)}
          onOutsideClick={() => {}}
        />
        {!config.show && (
          <div className="placeholder-text">
            <div style={{ fontSize: 40, marginBottom: 12, opacity: 0.3 }}>🎮</div>
            <p>Configure options and click <strong>"Show Overlay"</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [activeDemo, setActiveDemo] = useState(null);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Auto progress for bar demo
  useEffect(() => {
    if (!activeDemo?.hasProgress) return;
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setActiveDemo(null), 400);
          return 100;
        }
        return p + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [activeDemo]);

  // Auto dismiss non-progress demos after 3s
  useEffect(() => {
    if (!activeDemo || activeDemo.hasProgress) return;
    if (activeDemo.props.closable) return; // let user close
    const t = setTimeout(() => setActiveDemo(null), 3000);
    return () => clearTimeout(t);
  }, [activeDemo]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText('npm i loader-overlay').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <>
      {/* Active Demo Overlay */}
      {activeDemo && (
        <LoaderOverlay
          show={true}
          {...activeDemo.props}
          progress={activeDemo.hasProgress ? progress : undefined}
          onClose={() => setActiveDemo(null)}
        />
      )}

      {/* ─── HERO ─── */}
      <header className="hero">
        <div className="hero-badge fade-in">📦 npm package demo</div>
        <h1 className="fade-in fade-in-delay-1">loader-overlay</h1>
        <p className="fade-in fade-in-delay-2">
          A fully-featured React loader overlay — 5 animation types, full theme control,
          progress tracking, and <strong>zero dependencies</strong>.
        </p>
        <div
          className="hero-install fade-in fade-in-delay-3"
          onClick={handleCopy}
          title="Click to copy"
        >
          <span>$</span>
          <code>npm i loader-overlay</code>
          <span className="copy-hint">{copied ? '✓ Copied!' : '⧉ Copy'}</span>
        </div>
      </header>

      {/* ─── DEMO CARDS ─── */}
      <section className="section">
        <p className="section-title">Demos</p>
        <h2 className="section-heading">See it in action</h2>
        <div className="demo-grid">
          {DEMOS.map((d) => (
            <DemoCard key={d.id} demo={d} onActivate={setActiveDemo} />
          ))}
        </div>
      </section>

      {/* ─── PLAYGROUND ─── */}
      <section className="section" style={{ paddingTop: 20 }}>
        <p className="section-title">Playground</p>
        <h2 className="section-heading">Interactive configuration</h2>
        <Playground />
      </section>

      {/* ─── PROPS TABLE ─── */}
      <section className="section">
        <p className="section-title">API Reference</p>
        <h2 className="section-heading">Props</h2>
        <div className="props-table-wrapper fade-in">
          <table className="props-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {PROPS_DATA.map((p) => (
                <tr key={p.name}>
                  <td className="prop-name">{p.name}</td>
                  <td className="prop-type">{p.type}</td>
                  <td className="prop-default">{p.default}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{p.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── QUICK START ─── */}
      <section className="section">
        <p className="section-title">Quick Start</p>
        <h2 className="section-heading">Get started in seconds</h2>
        <div className="fade-in" style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius)',
          padding: 24,
          fontFamily: "'SF Mono', 'Fira Code', monospace",
          fontSize: 13,
          lineHeight: 1.8,
          color: 'var(--text-secondary)',
          overflowX: 'auto',
        }}>
          <div><span style={{ color: '#636c76' }}>{'// 1. Install'}</span></div>
          <div><span style={{ color: '#fbbf24' }}>$</span> npm i loader-overlay</div>
          <br />
          <div><span style={{ color: '#636c76' }}>{'// 2. Import & use'}</span></div>
          <div><span style={{ color: '#c084fc' }}>import</span> LoaderOverlay <span style={{ color: '#c084fc' }}>from</span> <span style={{ color: '#60d394' }}>'loader-overlay'</span>;</div>
          <br />
          <div><span style={{ color: '#c084fc' }}>{'<'}</span><span style={{ color: '#60a5fa' }}>LoaderOverlay</span></div>
          <div style={{ paddingLeft: 24 }}><span style={{ color: '#a78bfa' }}>show</span>=<span style={{ color: '#60d394' }}>{'{loading}'}</span></div>
          <div style={{ paddingLeft: 24 }}><span style={{ color: '#a78bfa' }}>type</span>=<span style={{ color: '#60d394' }}>"spinner"</span></div>
          <div style={{ paddingLeft: 24 }}><span style={{ color: '#a78bfa' }}>variant</span>=<span style={{ color: '#60d394' }}>"dark"</span></div>
          <div style={{ paddingLeft: 24 }}><span style={{ color: '#a78bfa' }}>fullScreen</span></div>
          <div><span style={{ color: '#c084fc' }}>{'/>'}</span></div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <p>
          Built with <span style={{ color: 'var(--danger)' }}>♥</span> by{' '}
          <a href="https://github.com/swapnilhpatil" target="_blank" rel="noopener noreferrer">
            Swapnil Patil
          </a>
        </p>
        <p style={{ marginTop: 4 }}>
          <a href="https://www.npmjs.com/package/loader-overlay" target="_blank" rel="noopener noreferrer">
            npm
          </a>
          {' · '}
          <a href="https://github.com/swapnilhpatil/loader-overlay" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </>
  );
}
