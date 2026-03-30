/**
 * @file Centralized constants, enums, and static configuration for the loader-overlay demo.
 * All magic strings and numbers are extracted here for maintainability.
 */

import {
  IPlaygroundConfig,
  ILoaderDemoConfig,
  IPropsDataItem,
  LOADER_TYPE,
  LOADER_VARIANT,
  LOADER_SIZE,
  TAG_COLOR,
  BTN_CLASS,
  DEMO_COLOR,
  DEFAULT_STRING,
  TIMING,
  RANGE_LIMIT,
  NUMERIC_DEFAULT,
  DEMO_ID,
  DEMO_TITLE,
  DEMO_DESCRIPTION,
  DEMO_MESSAGE,
  DEMO_TAG_LABEL,
  PROP_NAME,
  PROP_TYPE_SIGNATURE,
  PROP_DEFAULT,
  PROP_DESC,
} from '../types/loader';

// ─── Default Playground Config ──────────────────────────────────────────────

/**
 * Default configuration state for the interactive playground panel.
 */
export const DEFAULT_PLAYGROUND_CONFIG: IPlaygroundConfig = {
  show: false,
  type: LOADER_TYPE.SPINNER,
  size: LOADER_SIZE.MD,
  variant: LOADER_VARIANT.DARK,
  color: DEMO_COLOR.DEFAULT,
  message: DEFAULT_STRING.MESSAGE,
  submessage: '',
  blur: NUMERIC_DEFAULT.BLUR,
  fullScreen: false,
  showProgress: false,
  progress: NUMERIC_DEFAULT.PROGRESS,
  closable: false,
  closeOnOutsideClick: false,
  animateIn: true,
};

// ─── Demo Configurations ────────────────────────────────────────────────────

/**
 * Pre-configured demo cards showcasing different LoaderOverlay combinations.
 */
export const DEMOS: ILoaderDemoConfig[] = [
  {
    id: DEMO_ID.SPINNER_DARK,
    title: DEMO_TITLE.SPINNER_DARK,
    description: DEMO_DESCRIPTION.SPINNER_DARK,
    tags: [
      { label: LOADER_TYPE.SPINNER, color: TAG_COLOR.PURPLE },
      { label: LOADER_VARIANT.DARK, color: TAG_COLOR.BLUE },
    ],
    props: {
      type: LOADER_TYPE.SPINNER,
      variant: LOADER_VARIANT.DARK,
      color: DEMO_COLOR.DEFAULT,
      message: DEFAULT_STRING.MESSAGE,
      fullScreen: true,
    },
    btnClass: BTN_CLASS.PRIMARY,
  },
  {
    id: DEMO_ID.DOTS_GRADIENT,
    title: DEMO_TITLE.DOTS_GRADIENT,
    description: DEMO_DESCRIPTION.DOTS_GRADIENT,
    tags: [
      { label: LOADER_TYPE.DOTS, color: TAG_COLOR.GREEN },
      { label: LOADER_VARIANT.GRADIENT, color: TAG_COLOR.PINK },
    ],
    props: {
      type: LOADER_TYPE.DOTS,
      variant: LOADER_VARIANT.GRADIENT,
      color: DEMO_COLOR.DOTS,
      message: DEMO_MESSAGE.FETCHING,
      fullScreen: true,
    },
    btnClass: BTN_CLASS.SUCCESS,
  },
  {
    id: DEMO_ID.PULSE_BLUR,
    title: DEMO_TITLE.PULSE_BLUR,
    description: DEMO_DESCRIPTION.PULSE_BLUR,
    tags: [
      { label: LOADER_TYPE.PULSE, color: TAG_COLOR.BLUE },
      { label: LOADER_VARIANT.BLUR, color: TAG_COLOR.AMBER },
    ],
    props: {
      type: LOADER_TYPE.PULSE,
      variant: LOADER_VARIANT.BLUR,
      color: DEMO_COLOR.PULSE,
      message: DEMO_MESSAGE.PROCESSING,
      blur: NUMERIC_DEFAULT.PULSE_BLUR,
      fullScreen: true,
    },
    btnClass: BTN_CLASS.INFO,
  },
  {
    id: DEMO_ID.RING_LIGHT,
    title: DEMO_TITLE.RING_LIGHT,
    description: DEMO_DESCRIPTION.RING_LIGHT,
    tags: [
      { label: LOADER_TYPE.RING, color: TAG_COLOR.AMBER },
      { label: LOADER_VARIANT.LIGHT, color: TAG_COLOR.GREEN },
    ],
    props: {
      type: LOADER_TYPE.RING,
      variant: LOADER_VARIANT.LIGHT,
      color: DEMO_COLOR.RING,
      message: DEMO_MESSAGE.SYNCING,
      fullScreen: true,
    },
    btnClass: BTN_CLASS.WARNING,
  },
  {
    id: DEMO_ID.BAR_PROGRESS,
    title: DEMO_TITLE.BAR_PROGRESS,
    description: DEMO_DESCRIPTION.BAR_PROGRESS,
    tags: [
      { label: LOADER_TYPE.BAR, color: TAG_COLOR.PINK },
      { label: DEMO_TAG_LABEL.PROGRESS, color: TAG_COLOR.PURPLE },
    ],
    props: {
      type: LOADER_TYPE.BAR,
      variant: LOADER_VARIANT.DARK,
      color: DEMO_COLOR.BAR,
      message: DEMO_MESSAGE.UPLOADING,
      showProgress: true,
      fullScreen: true,
    },
    btnClass: BTN_CLASS.DANGER,
    hasProgress: true,
  },
  {
    id: DEMO_ID.CLOSABLE_OUTSIDE,
    title: DEMO_TITLE.CLOSABLE_OUTSIDE,
    description: DEMO_DESCRIPTION.CLOSABLE_OUTSIDE,
    tags: [
      { label: DEMO_TAG_LABEL.CLOSABLE, color: TAG_COLOR.GREEN },
      { label: DEMO_TAG_LABEL.OUTSIDE_CLICK, color: TAG_COLOR.BLUE },
    ],
    props: {
      type: LOADER_TYPE.SPINNER,
      variant: LOADER_VARIANT.DARK,
      color: DEMO_COLOR.CLOSABLE,
      message: DEMO_MESSAGE.CLOSABLE,
      submessage: DEMO_MESSAGE.CLOSABLE_SUB,
      closable: true,
      closeOnOutsideClick: true,
      fullScreen: true,
    },
    btnClass: BTN_CLASS.OUTLINE,
  },
];

// ─── Props Table Data ───────────────────────────────────────────────────────

/**
 * API reference data for the LoaderOverlay props table.
 * @type {IPropsDataItem[]}
 */
export const PROPS_DATA = [
  { name: PROP_NAME.SHOW, type: PROP_TYPE_SIGNATURE.BOOLEAN, default: PROP_DEFAULT.TRUE, desc: PROP_DESC.SHOW },
  { name: PROP_NAME.TYPE, type: PROP_TYPE_SIGNATURE.LOADER_TYPE, default: PROP_DEFAULT.SPINNER, desc: PROP_DESC.TYPE },
  { name: PROP_NAME.SIZE, type: PROP_TYPE_SIGNATURE.LOADER_SIZE, default: PROP_DEFAULT.MD, desc: PROP_DESC.SIZE },
  { name: PROP_NAME.VARIANT, type: PROP_TYPE_SIGNATURE.LOADER_VARIANT, default: PROP_DEFAULT.DARK, desc: PROP_DESC.VARIANT },
  { name: PROP_NAME.COLOR, type: PROP_TYPE_SIGNATURE.STRING, default: PROP_DEFAULT.DEFAULT_COLOR, desc: PROP_DESC.COLOR },
  { name: PROP_NAME.MESSAGE, type: PROP_TYPE_SIGNATURE.STRING, default: PROP_DEFAULT.LOADING, desc: PROP_DESC.MESSAGE },
  { name: PROP_NAME.SUBMESSAGE, type: PROP_TYPE_SIGNATURE.STRING, default: PROP_DEFAULT.EMPTY_STRING, desc: PROP_DESC.SUBMESSAGE },
  { name: PROP_NAME.FULL_SCREEN, type: PROP_TYPE_SIGNATURE.BOOLEAN, default: PROP_DEFAULT.FALSE, desc: PROP_DESC.FULL_SCREEN },
  { name: PROP_NAME.Z_INDEX, type: PROP_TYPE_SIGNATURE.NUMBER, default: PROP_DEFAULT.Z_INDEX, desc: PROP_DESC.Z_INDEX },
  { name: PROP_NAME.BLUR, type: PROP_TYPE_SIGNATURE.NUMBER, default: PROP_DEFAULT.BLUR, desc: PROP_DESC.BLUR },
  { name: PROP_NAME.SHOW_PROGRESS, type: PROP_TYPE_SIGNATURE.BOOLEAN, default: PROP_DEFAULT.FALSE, desc: PROP_DESC.SHOW_PROGRESS },
  { name: PROP_NAME.PROGRESS, type: PROP_TYPE_SIGNATURE.NUMBER, default: PROP_DEFAULT.ZERO, desc: PROP_DESC.PROGRESS },
  { name: PROP_NAME.CLOSABLE, type: PROP_TYPE_SIGNATURE.BOOLEAN, default: PROP_DEFAULT.FALSE, desc: PROP_DESC.CLOSABLE },
  { name: PROP_NAME.TIMEOUT, type: PROP_TYPE_SIGNATURE.NUMBER, default: PROP_DEFAULT.ZERO, desc: PROP_DESC.TIMEOUT },
  { name: PROP_NAME.CLOSE_ON_OUTSIDE_CLICK, type: PROP_TYPE_SIGNATURE.BOOLEAN, default: PROP_DEFAULT.FALSE, desc: PROP_DESC.CLOSE_ON_OUTSIDE_CLICK },
  { name: PROP_NAME.ANIMATE_IN, type: PROP_TYPE_SIGNATURE.BOOLEAN, default: PROP_DEFAULT.TRUE, desc: PROP_DESC.ANIMATE_IN },
  { name: PROP_NAME.CHILDREN, type: PROP_TYPE_SIGNATURE.REACT_NODE, default: PROP_DEFAULT.NULL, desc: PROP_DESC.CHILDREN },
];
