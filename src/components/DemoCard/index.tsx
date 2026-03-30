import {
  ILoaderDemoConfig,
  LOADER_TYPE,
  LOADER_ICON,
  NUMERIC_DEFAULT,
  UI_TEXT,
  UI_ICON
} from '../../types/loader';
import { DEMOS } from '../../constants/loader';

/** Props for the DemoCard component. */
interface IDemoCardProps {
  /** The demo configuration object to render. */
  demo: ILoaderDemoConfig;
  /** Callback invoked when the user clicks the launch button. */
  onActivate: (demo: ILoaderDemoConfig) => void;
}

/**
 * Renders a single demo card with preview icon, title, description, tags, and a launch button.
 * The card's fade-in delay is based on its index in the DEMOS array.
 */
function DemoCard({ demo, onActivate }: IDemoCardProps) {
  return (
    <div className={`demo-card fade-in fade-in-delay-${DEMOS.indexOf(demo) % NUMERIC_DEFAULT.FADE_IN_DELAY_COUNT + 1}`}>
      <div className="demo-card-preview">
        <div className="preview-content">
          <div style={{ fontSize: 32, marginBottom: 8, opacity: 0.4 }}>
            {demo.props.type === LOADER_TYPE.SPINNER && LOADER_ICON.SPINNER}
            {demo.props.type === LOADER_TYPE.DOTS && LOADER_ICON.DOTS}
            {demo.props.type === LOADER_TYPE.PULSE && LOADER_ICON.PULSE}
            {demo.props.type === LOADER_TYPE.RING && LOADER_ICON.RING}
            {demo.props.type === LOADER_TYPE.BAR && LOADER_ICON.BAR}
          </div>
          <span>{UI_TEXT.CLICK_PREVIEW}</span>
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
          {UI_ICON.PLAY} {UI_TEXT.LAUNCH_DEMO}
        </button>
      </div>
    </div>
  );
}

export default DemoCard;