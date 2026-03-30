import { useCallback, useEffect, useState } from "react";
import './Home.css';
import LoaderOverlay from 'loader-overlay';
import {
    ILoaderDemoConfig,
    DEFAULT_STRING,
    TIMING,
    NUMERIC_DEFAULT,
    UI_TEXT,
    UI_ICON,
    HERO_TEXT,
    SECTION_TITLE,
    SECTION_HEADING,
    PROPS_TABLE_HEADER,
    QUICK_START,
    UI_SNIPPET,
    PROP_NAME
} from '../../types/loader';
import DemoCard from "../DemoCard/index";
import Playground from "../Playground/index";
import {
    DEMOS,
    PROPS_DATA,
} from '../../constants/loader';

/**
 * Main landing page component for the loader-overlay demo application.
 * Renders the hero section, demo card grid, interactive playground,
 * API reference props table, quick start guide, and footer.
 *
 * @returns {JSX.Element} The full Home page layout
 */
function Home() {
    const [activeDemo, setActiveDemo] = useState<ILoaderDemoConfig | null>(null);
    const [progress, setProgress] = useState(0);
    const [copied, setCopied] = useState(false);

    /**
     * Auto-increments the progress bar for demos that have `hasProgress` enabled.
     * Dismisses the demo overlay after a short delay once progress reaches MAX_PROGRESS.
     */
    useEffect(() => {
        if (!activeDemo?.hasProgress) return;
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((p) => {
                if (p >= NUMERIC_DEFAULT.MAX_PROGRESS) {
                    clearInterval(interval);
                    setTimeout(() => setActiveDemo(null), TIMING.PROGRESS_COMPLETE_DELAY);
                    return NUMERIC_DEFAULT.MAX_PROGRESS;
                }
                return p + NUMERIC_DEFAULT.PROGRESS_INCREMENT;
            });
        }, TIMING.PROGRESS_INTERVAL);
        return () => clearInterval(interval);
    }, [activeDemo]);

    /**
     * Auto-dismisses non-progress, non-closable demos after TIMING.AUTO_DISMISS.
     */
    useEffect(() => {
        if (!activeDemo || activeDemo.hasProgress) return;
        if (activeDemo.props.closable) return; // let user close manually
        const t = setTimeout(() => setActiveDemo(null), TIMING.AUTO_DISMISS);
        return () => clearTimeout(t);
    }, [activeDemo]);

    /**
     * Copies the install command to the clipboard and shows brief "Copied!" feedback.
     *
     * @type {() => void}
     */
    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(DEFAULT_STRING.INSTALL_COMMAND).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), TIMING.COPY_FEEDBACK);
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
                <div className="hero-badge fade-in">{UI_TEXT.NPM_PACKAGE_DEMO}</div>
                <h1 className="fade-in fade-in-delay-1">{HERO_TEXT.TITLE}</h1>
                <p className="fade-in fade-in-delay-2">
                    {HERO_TEXT.DESCRIPTION}
                </p>
                <div
                    className="hero-install fade-in fade-in-delay-3"
                    onClick={handleCopy}
                    title={UI_TEXT.CLICK_TO_COPY}
                >
                    <span>{HERO_TEXT.INSTALL_SYMBOL}</span>
                    <code>{DEFAULT_STRING.INSTALL_COMMAND}</code>
                    <span className="copy-hint">{copied ? `${UI_ICON.CHECK} ${UI_TEXT.COPIED}` : `${UI_ICON.CLIPBOARD} ${UI_TEXT.COPY}`}</span>
                </div>
            </header>

            {/* ─── DEMO CARDS ─── */}
            <section className="section">
                <p className="section-title">{SECTION_TITLE.DEMOS}</p>
                <h2 className="section-heading">{SECTION_HEADING.DEMOS}</h2>
                <div className="demo-grid">
                    {DEMOS.map((d) => (
                        <DemoCard key={d.id} demo={d} onActivate={setActiveDemo} />
                    ))}
                </div>
            </section>

            {/* ─── PLAYGROUND ─── */}
            <section className="section" style={{ paddingTop: 20 }}>
                <p className="section-title">{SECTION_TITLE.PLAYGROUND}</p>
                <h2 className="section-heading">{SECTION_HEADING.PLAYGROUND}</h2>
                <Playground />
            </section>

            {/* ─── PROPS TABLE ─── */}
            <section className="section">
                <p className="section-title">{SECTION_TITLE.API_REFERENCE}</p>
                <h2 className="section-heading">{SECTION_HEADING.API_REFERENCE}</h2>
                <div className="props-table-wrapper fade-in">
                    <table className="props-table">
                        <thead>
                            <tr>
                                <th>{PROPS_TABLE_HEADER.PROP}</th>
                                <th>{PROPS_TABLE_HEADER.TYPE}</th>
                                <th>{PROPS_TABLE_HEADER.DEFAULT}</th>
                                <th>{PROPS_TABLE_HEADER.DESC}</th>
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
                <p className="section-title">{SECTION_TITLE.QUICK_START}</p>
                <h2 className="section-heading">{SECTION_HEADING.QUICK_START}</h2>
                <div className="fade-in" style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius)',
                    padding: 24,
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    lineHeight: 1.8,
                    color: 'var(--text-secondary)',
                    overflowX: 'auto',
                }}>
                    <div><span style={{ color: 'var(--code-comment)' }}>{QUICK_START.INSTALL}</span></div>
                    <div><span style={{ color: 'var(--code-symbol)' }}>{HERO_TEXT.INSTALL_SYMBOL}</span> {DEFAULT_STRING.INSTALL_COMMAND}</div>
                    <br />
                    <div><span style={{ color: 'var(--code-comment)' }}>{QUICK_START.IMPORT}</span></div>
                    <div><span style={{ color: 'var(--code-keyword)' }}>{UI_SNIPPET.IMPORT}</span> {UI_SNIPPET.COMPONENT} <span style={{ color: 'var(--code-keyword)' }}>{UI_SNIPPET.FROM}</span> <span style={{ color: 'var(--code-string)' }}>{UI_SNIPPET.PACKAGE}</span>;</div>
                    <br />
                    <div><span style={{ color: 'var(--code-keyword)' }}>{UI_SNIPPET.TAG_OPEN}</span><span style={{ color: 'var(--code-tag)' }}>{UI_SNIPPET.COMPONENT}</span></div>
                    <div style={{ paddingLeft: 24 }}><span style={{ color: 'var(--code-attr)' }}>{PROP_NAME.SHOW}</span>=<span style={{ color: 'var(--code-string)' }}>{UI_SNIPPET.LOADING_VAR}</span></div>
                    <div style={{ paddingLeft: 24 }}><span style={{ color: 'var(--code-attr)' }}>{PROP_NAME.TYPE}</span>=<span style={{ color: 'var(--code-string)' }}>{UI_SNIPPET.SPINNER_VAL}</span></div>
                    <div style={{ paddingLeft: 24 }}><span style={{ color: 'var(--code-attr)' }}>{PROP_NAME.VARIANT}</span>=<span style={{ color: 'var(--code-string)' }}>{UI_SNIPPET.DARK_VAL}</span></div>
                    <div style={{ paddingLeft: 24 }}><span style={{ color: 'var(--code-attr)' }}>{PROP_NAME.FULL_SCREEN}</span></div>
                    <div><span style={{ color: 'var(--code-keyword)' }}>{UI_SNIPPET.TAG_CLOSE}</span></div>
                </div>
            </section>

            {/* ─── FOOTER ─── */}
            <footer className="footer">
                <p>
                    {UI_TEXT.BUILT_WITH} <span style={{ color: 'var(--danger)' }}>{UI_ICON.HEART}</span> {UI_TEXT.BY}{' '}
                    <a href={UI_TEXT.AUTHOR_URL} target="_blank" rel="noopener noreferrer">
                        {UI_TEXT.AUTHOR_NAME}
                    </a>
                </p>
                <p style={{ marginTop: 4 }}>
                    <a href={UI_TEXT.NPM_URL} target="_blank" rel="noopener noreferrer">
                        {UI_TEXT.NPM_LABEL}
                    </a>
                    {' · '}
                    <a href={UI_TEXT.GITHUB_URL} target="_blank" rel="noopener noreferrer">
                        {UI_TEXT.GITHUB_LABEL}
                    </a>
                </p>
            </footer>
        </>
    );
}

export default Home;