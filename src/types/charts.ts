export interface PriceDataPoint {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface TechnicalIndicatorData {
  name: string;
  data: number[];
  color?: string;
  strokeWidth?: number;
  visible?: boolean;
}

export interface DrawingTool {
  id: string;
  type: 'trendline' | 'support' | 'resistance' | 'fibonacci' | 'rectangle' | 'circle';
  startPoint: { x: number; y: number };
  endPoint?: { x: number; y: number };
  color: string;
  strokeWidth: number;
  visible: boolean;
}

export interface ChartLayout {
  id: string;
  name: string;
  timeframes: Timeframe[];
  indicators: IndicatorConfig[];
  drawingTools: DrawingTool[];
  chartType: 'candlestick' | 'line' | 'area' | 'bar';
  gridLines: boolean;
  volumeChart: boolean;
  splitScreen: boolean;
}

export interface IndicatorConfig {
  type: 'SMA' | 'EMA' | 'RSI' | 'MACD' | 'BB' | 'STOCH';
  period: number;
  parameters?: Record<string, number>;
  color: string;
  visible: boolean;
  strokeWidth?: number;
}

export type Timeframe = '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '1d' | '1w' | '1M';

export interface ChartComparison {
  symbol: string;
  name: string;
  color: string;
  data: PriceDataPoint[];
  visible: boolean;
}

export interface RealTimeChartState {
  data: PriceDataPoint[];
  isConnected: boolean;
  lastUpdate: number;
  error: string | null;
  loading: boolean;
}

export interface ChartExportOptions {
  format: 'PNG' | 'SVG' | 'PDF';
  width: number;
  height: number;
  quality?: number;
  includeIndicators: boolean;
  includeDrawingTools: boolean;
}

export interface ChartViewport {
  startIndex: number;
  endIndex: number;
  visibleRange: number;
}

export interface ChartInteraction {
  isPanning: boolean;
  isZooming: boolean;
  isDrawing: boolean;
  selectedTool: DrawingTool['type'] | null;
}
