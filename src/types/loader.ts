/**
 * @file Type definitions for the loader-overlay demo application.
 */

import type { LoaderType, LoaderVariant } from 'loader-overlay';
import React from 'react';

// ─── UI Text & Labels ───────────────────────────────────────────────────────

/**
 * Common text labels and button text used throughout the interface.
 */
export enum UI_TEXT {
  LAUNCH_DEMO = 'Launch Demo',
  SHOW_OVERLAY = 'Show Overlay',
  HIDE_OVERLAY = 'Hide Overlay',
  CLICK_PREVIEW = 'Click button to preview',
  COPY = 'Copy',
  COPIED = 'Copied!',
  CONFIGURE_OPTIONS = 'Configure options and click',
  NPM_PACKAGE_DEMO = '📦 npm package demo',
  BUILT_WITH = 'Built with ',
  BY = ' by ',
  AUTHOR_NAME = 'Swapnil Patil',
  CONTROLS = 'Controls',
  CLICK_TO_COPY = 'Click to copy',
  NPM_LABEL = 'npm',
  GITHUB_LABEL = 'GitHub',
  NPM_URL = 'https://www.npmjs.com/package/loader-overlay',
  GITHUB_URL = 'https://github.com/swapnilhpatil/loader-overlay',
  AUTHOR_URL = 'https://github.com/swapnilhpatil',
}

/**
 * Labels and steps for the Quick Start guide.
 */
export enum QUICK_START {
  INSTALL = '// 1. Install',
  IMPORT = '// 2. Import & use',
}

/**
 * Syntax-highlighting tokens for the Quick Start code snippet.
 */
export enum UI_SNIPPET {
  IMPORT = 'import',
  FROM = 'from',
  PACKAGE = "'loader-overlay'",
  COMPONENT = 'LoaderOverlay',
  TAG_OPEN = '<',
  TAG_CLOSE = '/>',
  LOADING_VAR = '{loading}',
  SPINNER_VAL = '"spinner"',
  DARK_VAL = '"dark"',
}

/**
 * Form field labels for the playground controls.
 */
export enum UI_LABEL {
  TYPE = 'Type',
  VARIANT = 'Variant',
  SIZE = 'Size',
  COLOR = 'Color',
  MESSAGE = 'Message',
  SUB_MESSAGE = 'Sub Message',
  BLUR = 'Blur (px): ',
  SHOW_PROGRESS = 'Show Progress',
  PROGRESS = 'Progress: ',
  CLOSABLE = 'Closable',
  CLOSE_OUTSIDE = 'Close on Outside Click',
  ANIMATE_IN = 'Animate In',
}

/**
 * Emoji and symbols used as icons within the UI layout.
 */
export enum UI_ICON {
  GEAR = '⚙',
  PLAY = '▶',
  STOP = '⏹',
  GAME = '🎮',
  CHECK = '✓',
  CLIPBOARD = '⧉',
  HEART = '♥',
}

/**
 * Text content for the Hero landing section.
 */
export enum HERO_TEXT {
  TITLE = 'loader-overlay',
  DESCRIPTION = 'A fully-featured React loader overlay — 5 animation types, full theme control, progress tracking, and zero dependencies.',
  INSTALL_SYMBOL = '$',
}

/**
 * Titles for section intros (displayed in small caps or badges).
 */
export enum SECTION_TITLE {
  DEMOS = 'Demos',
  PLAYGROUND = 'Playground',
  API_REFERENCE = 'API Reference',
  QUICK_START = 'Quick Start',
}

/**
 * Main headings for the various page sections.
 */
export enum SECTION_HEADING {
  DEMOS = 'See it in action',
  PLAYGROUND = 'Interactive configuration',
  API_REFERENCE = 'Props',
  QUICK_START = 'Get started in seconds',
}

/**
 * Column headers for the API reference props table.
 */
export enum PROPS_TABLE_HEADER {
  PROP = 'Prop',
  TYPE = 'Type',
  DEFAULT = 'Default',
  DESC = 'Description',
}

// ─── Enums ──────────────────────────────────────────────────────────────────

/**
 * Supported loader animation types.
 *
 * @property {string} SPINNER
 * @property {string} DOTS
 * @property {string} PULSE
 * @property {string} RING
 * @property {string} BAR
 */
export enum LOADER_TYPE {
  SPINNER = 'spinner',
  DOTS = 'dots',
  PULSE = 'pulse',
  RING = 'ring',
  BAR = 'bar',
}

/**
 * Overlay background style variants.
 *
 * @property {string} DARK
 * @property {string} LIGHT
 * @property {string} BLUR
 * @property {string} TRANSPARENT
 * @property {string} GRADIENT
 */
export enum LOADER_VARIANT {
  DARK = 'dark',
  LIGHT = 'light',
  BLUR = 'blur',
  TRANSPARENT = 'transparent',
  GRADIENT = 'gradient',
}

/**
 * Loader size options.
 *
 * @property {string} SM
 * @property {string} MD
 * @property {string} LG
 * @property {string} XL
 */
export enum LOADER_SIZE {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

/**
 * Tag color keys used for demo card badge styling.
 *
 * @property {string} PURPLE
 * @property {string} BLUE
 * @property {string} GREEN
 * @property {string} PINK
 * @property {string} AMBER
 */
export enum TAG_COLOR {
  PURPLE = 'purple',
  BLUE = 'blue',
  GREEN = 'green',
  PINK = 'pink',
  AMBER = 'amber',
}

/**
 * CSS class names for demo card launch buttons.
 *
 * @property {string} PRIMARY
 * @property {string} SUCCESS
 * @property {string} INFO
 * @property {string} WARNING
 * @property {string} DANGER
 * @property {string} OUTLINE
 */
export enum BTN_CLASS {
  PRIMARY = 'btn-primary',
  SUCCESS = 'btn-success',
  INFO = 'btn-info',
  WARNING = 'btn-warning',
  DANGER = 'btn-danger',
  OUTLINE = 'btn-outline',
}

/**
 * Emoji icons mapped to each loader animation type for demo card previews.
 *
 * @property {string} SPINNER
 * @property {string} DOTS
 * @property {string} PULSE
 * @property {string} RING
 * @property {string} BAR
 */
export enum LOADER_ICON {
  SPINNER = '⟳',
  DOTS = '⬤⬤⬤',
  PULSE = '◉',
  RING = '◎',
  BAR = '▬▬▬',
}

/**
 * Accent color hex values used across demo configurations.
 *
 * @property {string} DEFAULT
 * @property {string} DOTS
 * @property {string} PULSE
 * @property {string} RING
 * @property {string} BAR
 * @property {string} CLOSABLE
 */
export enum DEMO_COLOR {
  DEFAULT = 'var(--accent)',
  DOTS = 'var(--bg-dots)',
  PULSE = 'var(--bg-pulse)',
  RING = 'var(--bg-ring)',
  BAR = 'var(--bg-bar)',
  CLOSABLE = 'var(--bg-closable)',
}

/**
 * Default string values used across the application.
 *
 * @property {string} MESSAGE
 * @property {string} INSTALL_COMMAND
 */
export enum DEFAULT_STRING {
  MESSAGE = 'Loading...',
  INSTALL_COMMAND = 'npm i loader-overlay',
}

/**
 * Timing durations in milliseconds used for animations and auto-dismiss.
 *
 * @property {number} PROGRESS_INTERVAL
 * @property {number} PROGRESS_COMPLETE_DELAY
 * @property {number} AUTO_DISMISS
 * @property {number} COPY_FEEDBACK
 */
export enum TIMING {
  PROGRESS_INTERVAL = 80,
  PROGRESS_COMPLETE_DELAY = 400,
  AUTO_DISMISS = 3000,
  COPY_FEEDBACK = 2000,
}

/**
 * Slider range boundaries for playground controls.
 *
 * @property {number} BLUR_MIN
 * @property {number} BLUR_MAX
 * @property {number} PROGRESS_MIN
 * @property {number} PROGRESS_MAX
 */
export enum RANGE_LIMIT {
  BLUR_MIN = 0,
  BLUR_MAX = 30,
  PROGRESS_MIN = 0,
  PROGRESS_MAX = 100,
}

/**
 * Default numeric values for loader configuration.
 *
 * @property {number} BLUR
 * @property {number} PULSE_BLUR
 * @property {number} PROGRESS
 * @property {number} PROGRESS_INCREMENT
 * @property {number} MAX_PROGRESS
 * @property {number} FADE_IN_DELAY_COUNT
 */
export enum NUMERIC_DEFAULT {
  BLUR = 8,
  PULSE_BLUR = 12,
  PROGRESS = 50,
  PROGRESS_INCREMENT = 2,
  MAX_PROGRESS = 100,
  FADE_IN_DELAY_COUNT = 6,
}

/**
 * Unique identifiers for each pre-configured demo card.
 *
 * @property {string} SPINNER_DARK
 * @property {string} DOTS_GRADIENT
 * @property {string} PULSE_BLUR
 * @property {string} RING_LIGHT
 * @property {string} BAR_PROGRESS
 * @property {string} CLOSABLE_OUTSIDE
 */
export enum DEMO_ID {
  SPINNER_DARK = 'spinner-dark',
  DOTS_GRADIENT = 'dots-gradient',
  PULSE_BLUR = 'pulse-blur',
  RING_LIGHT = 'ring-light',
  BAR_PROGRESS = 'bar-progress',
  CLOSABLE_OUTSIDE = 'closable-outside',
}

/**
 * Display titles for each demo card.
 *
 * @property {string} SPINNER_DARK
 * @property {string} DOTS_GRADIENT
 * @property {string} PULSE_BLUR
 * @property {string} RING_LIGHT
 * @property {string} BAR_PROGRESS
 * @property {string} CLOSABLE_OUTSIDE
 */
export enum DEMO_TITLE {
  SPINNER_DARK = 'Spinner · Dark',
  DOTS_GRADIENT = 'Dots · Gradient',
  PULSE_BLUR = 'Pulse · Blur',
  RING_LIGHT = 'Ring · Light',
  BAR_PROGRESS = 'Bar · Progress',
  CLOSABLE_OUTSIDE = 'Closable · Outside Click',
}

/**
 * Descriptions for each demo card.
 *
 * @property {string} SPINNER_DARK
 * @property {string} DOTS_GRADIENT
 * @property {string} PULSE_BLUR
 * @property {string} RING_LIGHT
 * @property {string} BAR_PROGRESS
 * @property {string} CLOSABLE_OUTSIDE
 */
export enum DEMO_DESCRIPTION {
  SPINNER_DARK = 'Classic spinner animation with a dark glassmorphism backdrop.',
  DOTS_GRADIENT = 'Bouncing dots with a gradient background overlay.',
  PULSE_BLUR = 'Pulsing animation with frosted glass blur effect.',
  RING_LIGHT = 'Rotating ring loader with a light theme overlay.',
  BAR_PROGRESS = 'Linear bar loader with animated shimmer progress tracking.',
  CLOSABLE_OUTSIDE = 'Dismiss the loader by clicking outside or the ✕ button.',
}

/**
 * Status messages displayed on the loader overlay for each demo.
 *
 * @property {string} FETCHING
 * @property {string} PROCESSING
 * @property {string} SYNCING
 * @property {string} UPLOADING
 * @property {string} CLOSABLE
 * @property {string} CLOSABLE_SUB
 */
export enum DEMO_MESSAGE {
  FETCHING = 'Fetching data...',
  PROCESSING = 'Processing...',
  SYNCING = 'Syncing...',
  UPLOADING = 'Uploading file...',
  CLOSABLE = 'Click outside to dismiss',
  CLOSABLE_SUB = 'Or click the ✕ button',
}

/**
 * Miscellaneous tag labels used on demo cards that are not derived from existing enums.
 *
 * @property {string} PROGRESS
 * @property {string} CLOSABLE
 * @property {string} OUTSIDE_CLICK
 */
export enum DEMO_TAG_LABEL {
  PROGRESS = 'progress',
  CLOSABLE = 'closable',
  OUTSIDE_CLICK = 'outside-click',
}

/**
 * Prop names for the API reference table.
 *
 * @property {string} SHOW
 * @property {string} TYPE
 * @property {string} SIZE
 * @property {string} VARIANT
 * @property {string} COLOR
 * @property {string} MESSAGE
 * @property {string} SUBMESSAGE
 * @property {string} FULL_SCREEN
 * @property {string} Z_INDEX
 * @property {string} BLUR
 * @property {string} SHOW_PROGRESS
 * @property {string} PROGRESS
 * @property {string} CLOSABLE
 * @property {string} TIMEOUT
 * @property {string} CLOSE_ON_OUTSIDE_CLICK
 * @property {string} ANIMATE_IN
 * @property {string} CHILDREN
 */
export enum PROP_NAME {
  SHOW = 'show',
  TYPE = 'type',
  SIZE = 'size',
  VARIANT = 'variant',
  COLOR = 'color',
  MESSAGE = 'message',
  SUBMESSAGE = 'submessage',
  FULL_SCREEN = 'fullScreen',
  Z_INDEX = 'zIndex',
  BLUR = 'blur',
  SHOW_PROGRESS = 'showProgress',
  PROGRESS = 'progress',
  CLOSABLE = 'closable',
  TIMEOUT = 'timeout',
  CLOSE_ON_OUTSIDE_CLICK = 'closeOnOutsideClick',
  ANIMATE_IN = 'animateIn',
  CHILDREN = 'children',
}

/**
 * Type signatures displayed in the API reference table.
 *
 * @property {string} BOOLEAN
 * @property {string} STRING
 * @property {string} NUMBER
 * @property {string} REACT_NODE
 * @property {string} LOADER_TYPE
 * @property {string} LOADER_SIZE
 * @property {string} LOADER_VARIANT
 */
export enum PROP_TYPE_SIGNATURE {
  BOOLEAN = 'boolean',
  STRING = 'string',
  NUMBER = 'number',
  REACT_NODE = 'ReactNode',
  LOADER_TYPE = "'spinner' | 'dots' | 'pulse' | 'ring' | 'bar'",
  LOADER_SIZE = "'sm' | 'md' | 'lg' | 'xl'",
  LOADER_VARIANT = "'dark' | 'light' | 'blur' | 'transparent' | 'gradient'",
}

/**
 * Default values displayed in the API reference table.
 *
 * @property {string} TRUE
 * @property {string} FALSE
 * @property {string} NULL
 * @property {string} ZERO
 * @property {string} EMPTY_STRING
 * @property {string} SPINNER
 * @property {string} MD
 * @property {string} DARK
 * @property {string} DEFAULT_COLOR
 * @property {string} LOADING
 * @property {string} Z_INDEX
 * @property {string} BLUR
 */
export enum PROP_DEFAULT {
  TRUE = 'true',
  FALSE = 'false',
  NULL = 'null',
  ZERO = '0',
  EMPTY_STRING = "''",
  SPINNER = "'spinner'",
  MD = "'md'",
  DARK = "'dark'",
  DEFAULT_COLOR = "'#a78bfa'",
  LOADING = "'Loading...'",
  Z_INDEX = '999',
  BLUR = '8',
}

/**
 * Descriptions displayed in the API reference table.
 *
 * @property {string} SHOW
 * @property {string} TYPE
 * @property {string} SIZE
 * @property {string} VARIANT
 * @property {string} COLOR
 * @property {string} MESSAGE
 * @property {string} SUBMESSAGE
 * @property {string} FULL_SCREEN
 * @property {string} Z_INDEX
 * @property {string} BLUR
 * @property {string} SHOW_PROGRESS
 * @property {string} PROGRESS
 * @property {string} CLOSABLE
 * @property {string} TIMEOUT
 * @property {string} CLOSE_ON_OUTSIDE_CLICK
 * @property {string} ANIMATE_IN
 * @property {string} CHILDREN
 */
export enum PROP_DESC {
  SHOW = 'Controls overlay visibility',
  TYPE = 'Loader animation type',
  SIZE = 'Size of the loader',
  VARIANT = 'Overlay background style',
  COLOR = 'Accent color (hex/rgb/css var)',
  MESSAGE = 'Primary status text',
  SUBMESSAGE = 'Secondary info text',
  FULL_SCREEN = 'Fixed to viewport vs parent',
  Z_INDEX = 'CSS z-index value',
  BLUR = 'Backdrop blur in px',
  SHOW_PROGRESS = 'Show progress bar',
  PROGRESS = 'Progress value 0–100',
  CLOSABLE = 'Show dismiss ✕ button',
  TIMEOUT = 'Auto-dismiss after ms',
  CLOSE_ON_OUTSIDE_CLICK = 'Click backdrop to dismiss',
  ANIMATE_IN = 'Fade-in animation on mount',
  CHILDREN = 'Custom content replacing icons',
}

// ─── Tag ────────────────────────────────────────────────────────────────────

/**
 * Represents a tag label with an associated color for demo card badges.
 *
 * @property {string} label
 * @property {string} color
 */
export interface ITag {
  label: LOADER_TYPE | LOADER_VARIANT | DEMO_TAG_LABEL | string;
  color: TAG_COLOR;
}

// ─── Loader Props ───────────────────────────────────────────────────────────

/**
 * Props passed directly to the LoaderOverlay component within a demo configuration.
 *
 * @property {string} type
 * @property {string} variant
 * @property {string} color
 * @property {string} message
 * @property {string} [submessage]
 * @property {boolean} [fullScreen]
 * @property {number} [blur]
 * @property {boolean} [showProgress]
 * @property {boolean} [closable]
 * @property {boolean} [closeOnOutsideClick]
 */
export interface ILoaderProps {
  type: LoaderType;
  variant: LoaderVariant;
  color: string;
  message: string;
  submessage?: string;
  fullScreen?: boolean;
  blur?: number;
  showProgress?: boolean;
  closable?: boolean;
  closeOnOutsideClick?: boolean;
}

// ─── Demo Config ────────────────────────────────────────────────────────────

/**
 * Represents a single demo configuration for showcasing loader component features.
 *
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {ITag[]} tags
 * @property {ILoaderProps} props
 * @property {string} btnClass
 * @property {boolean} [hasProgress]
 */
export interface ILoaderDemoConfig {
  id: DEMO_ID;
  title: DEMO_TITLE;
  description: DEMO_DESCRIPTION;
  tags: ITag[];
  props: ILoaderProps;
  btnClass: BTN_CLASS;
  hasProgress?: boolean;
}

// ─── Playground Config ──────────────────────────────────────────────────────

/**
 * Configuration state for the interactive playground panel.
 *
 * @property {boolean} show
 * @property {string} type
 * @property {string} size
 * @property {string} variant
 * @property {string} color
 * @property {string} message
 * @property {string} submessage
 * @property {number} blur
 * @property {boolean} fullScreen
 * @property {boolean} showProgress
 * @property {number} progress
 * @property {boolean} closable
 * @property {boolean} closeOnOutsideClick
 * @property {boolean} animateIn
 */
export interface IPlaygroundConfig {
  show: boolean;
  type: LOADER_TYPE;
  size: LOADER_SIZE;
  variant: LOADER_VARIANT;
  color: string;
  message: string;
  submessage: string;
  blur: number;
  fullScreen: boolean;
  showProgress: boolean;
  progress: number;
  closable: boolean;
  closeOnOutsideClick: boolean;
  animateIn: boolean;
}

// ─── Props Data Item ────────────────────────────────────────────────────────

/**
 * Represents a single row in the API reference props table.
 *
 * @property {string} name
 * @property {string} type
 * @property {string} default
 * @property {string} desc
 */
export interface IPropsDataItem {
  name: string;
  type: string;
  default: string;
  desc: string;
}
