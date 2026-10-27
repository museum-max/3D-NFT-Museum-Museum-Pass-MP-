// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "lineWidth": 2,
          "lineType": 0,
          "chartType": "candlesticks",
          "showVolume": true,
          "fontColor": "rgb(106, 109, 120)",
          "gridLineColor": "rgba(242, 54, 69, 0.06)",
          "volumeUpColor": "rgba(34, 171, 148, 0.5)",
          "volumeDownColor": "rgba(247, 82, 95, 0.5)",
          "backgroundColor": "rgba(24, 72, 204, 1)",
          "widgetFontColor": "rgba(56, 142, 60, 1)",
          "upColor": "#22ab94",
          "downColor": "#f7525f",
          "borderUpColor": "rgba(171, 71, 188, 1)",
          "borderDownColor": "rgba(144, 191, 249, 1)",
          "wickUpColor": "rgba(0, 96, 100, 1)",
          "wickDownColor": "#f7525f",
          "colorTheme": "dark",
          "isTransparent": true,
          "locale": "en",
          "chartOnly": false,
          "scalePosition": "right",
          "scaleMode": "Percentage",
          "fontFamily": "Andale Mono, monospace",
          "valuesTracking": "3",
          "changeMode": "price-and-percent",
          "symbols": [
            [
              "Apple",
              "NASDAQ:AAPL|1D"
            ],
            [
              "Google",
              "NASDAQ:GOOGL|1D"
            ],
            [
              "Microsoft",
              "NASDAQ:MSFT|1D"
            ]
          ],
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "fontSize": "10",
          "headerFontSize": "medium",
          "autosize": true,
          "dateFormat": "dd-MM-yyyy",
          "width": "100%",
          "height": "100%",
          "noTimeScale": false,
          "hideDateRanges": false,
          "compareSymbol": {
            "symbol": "BINANCE:BTCUSDT.P",
            "lineColor": "rgba(38, 198, 218, 1)",
            "lineWidth": 2,
            "showLabels": true
          },
          "showMA": true,
          "maLength": 9,
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "hideMarketStatus": false,
          "hideSymbolLogo": false
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener nofollow" target="_blank"><span className="blue-text">Apple</span></a><span className="comma">,</span>&nbsp;<a href="https://www.tradingview.com/symbols/NASDAQ-GOOGL/" rel="noopener nofollow" target="_blank"><span className="blue-text">Google</span></a><span className="comma">,</span><span className="and">&nbsp;and&nbsp;</span><a href="https://www.tradingview.com/symbols/NASDAQ-MSFT/" rel="noopener nofollow" target="_blank"><span className="blue-text">Microsoft stock price</span></a><span className="trademark">&nbsp;by TradingView</span></div>
    </div>
  );
}

export default memo(TradingViewWidget);
