import { useState } from "react";
import './Playground.css';
import '../DemoCard/DemoCard.css';
import LoaderOverlay from 'loader-overlay';
import {
    IPlaygroundConfig,
    LOADER_TYPE,
    LOADER_VARIANT,
    LOADER_SIZE,
    RANGE_LIMIT,
    UI_TEXT,
    UI_LABEL,
    UI_ICON,
    PROP_NAME
} from '../../types/loader';
import {
    DEFAULT_PLAYGROUND_CONFIG,
} from '../../constants/loader';

/**
 * Interactive playground panel for configuring and previewing LoaderOverlay in real-time.
 * Users can tweak every prop via controls and instantly see the result in the preview pane.
 *
 * @returns {JSX.Element} Playground component with controls and a live preview area
 */
function Playground() {
    /** @type {[IPlaygroundConfig, Function]} */
    const [config, setConfig] = useState({ ...DEFAULT_PLAYGROUND_CONFIG });

    /**
     * Updates a single key in the playground configuration state with type-safe generic mapping.
     *
     * @param k - Configuration key to update
     * @param v - New value matching the key's type signature
     */
    const update = <K extends keyof IPlaygroundConfig>(k: K, v: IPlaygroundConfig[K]) =>
        setConfig((p) => ({ ...p, [k]: v }));

    return (
        <div className="playground fade-in">
            <div className="playground-controls">
                <h3 style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.04em' }}>{UI_ICON.GEAR} {UI_TEXT.CONTROLS}</h3>

                <div className="control-row">
                    <div className="control-group">
                        <label>{UI_LABEL.TYPE}</label>
                        <select value={config.type} onChange={(e) => update('type', e.target.value as LOADER_TYPE)}>
                            {Object.values(LOADER_TYPE).map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </div>
                    <div className="control-group">
                        <label>Variant</label>
                        <select value={config.variant} onChange={(e) => update(PROP_NAME.VARIANT, e.target.value as LOADER_VARIANT)}>
                            {Object.values(LOADER_VARIANT).map((v) => (
                                <option key={v} value={v}>{v}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="control-row">
                    <div className="control-group">
                        <label>{UI_LABEL.SIZE}</label>
                        <select value={config.size} onChange={(e) => update(PROP_NAME.SIZE, e.target.value as LOADER_SIZE)}>
                            {Object.values(LOADER_SIZE).map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                    <div className="control-group">
                        <label>{UI_LABEL.COLOR}</label>
                        <input type="text" value={config.color} onChange={(e) => update(PROP_NAME.COLOR, e.target.value)} />
                    </div>
                </div>
                <div className="control-group">
                    <label>{UI_LABEL.VARIANT}</label>
                    <input type="text" value={config.message} onChange={(e) => update(PROP_NAME.MESSAGE, e.target.value)} />
                </div>

                <div className="control-group">
                    <label>{UI_LABEL.SUB_MESSAGE}</label>
                    <input type="text" value={config.submessage} onChange={(e) => update(PROP_NAME.SUBMESSAGE, e.target.value)} />
                </div>

                <div className="control-group">
                    <label>{UI_LABEL.BLUR}{config.blur}</label>
                    <input type="range" min={RANGE_LIMIT.BLUR_MIN} max={RANGE_LIMIT.BLUR_MAX} value={config.blur} onChange={(e) => update(PROP_NAME.BLUR, Number(e.target.value))} />
                </div>

                <div className="toggle-group">
                    <label>{UI_LABEL.SHOW_PROGRESS}</label>
                    <input className="toggle" type="checkbox" checked={config.showProgress} onChange={(e) => update(PROP_NAME.SHOW_PROGRESS, e.target.checked)} />
                </div>

                {config.showProgress && (
                    <div className="control-group">
                        <label>{UI_LABEL.PROGRESS}{config.progress}%</label>
                        <input type="range" min={RANGE_LIMIT.PROGRESS_MIN} max={RANGE_LIMIT.PROGRESS_MAX} value={config.progress} onChange={(e) => update(PROP_NAME.PROGRESS, Number(e.target.value))} />
                    </div>
                )}

                <div className="toggle-group">
                    <label>{UI_LABEL.CLOSABLE}</label>
                    <input className="toggle" type="checkbox" checked={config.closable} onChange={(e) => update(PROP_NAME.CLOSABLE, e.target.checked)} />
                </div>

                <div className="toggle-group">
                    <label>{UI_LABEL.CLOSE_OUTSIDE}</label>
                    <input className="toggle" type="checkbox" checked={config.closeOnOutsideClick} onChange={(e) => update(PROP_NAME.CLOSE_ON_OUTSIDE_CLICK, e.target.checked)} />
                </div>

                <div className="toggle-group">
                    <label>{UI_LABEL.ANIMATE_IN}</label>
                    <input className="toggle" type="checkbox" checked={config.animateIn} onChange={(e) => update(PROP_NAME.ANIMATE_IN, e.target.checked)} />
                </div>

                <button
                    className="btn btn-primary"
                    onClick={() => update(PROP_NAME.SHOW, !config.show)}
                >
                    {config.show ? `${UI_ICON.STOP} ${UI_TEXT.HIDE_OVERLAY}` : `${UI_ICON.PLAY} ${UI_TEXT.SHOW_OVERLAY}`}
                </button>
            </div>

            <div className="playground-preview">
                <LoaderOverlay
                    {...config}
                    onClose={() => update(PROP_NAME.SHOW, false)}
                    onOutsideClick={() => { }}
                />
                {!config.show && (
                    <div className="placeholder-text">
                        <div style={{ fontSize: 40, marginBottom: 12, opacity: 0.3 }}>{UI_ICON.GAME}</div>
                        <p>{UI_TEXT.CONFIGURE_OPTIONS} <strong>"{UI_TEXT.SHOW_OVERLAY}"</strong></p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Playground;