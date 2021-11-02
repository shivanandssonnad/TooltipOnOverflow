import React from "react";
import MBTooltipContainer from "./MBTooltipContainer";

const TOOLTIP_POSITION = {
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right"
};

const TOOLTIP_FLOAT_POSITION = {
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right",
  CENTER: "center"
};

const DEFAULT_TOOLTIP_ICON = (function () {
  return (
    <div>
      <div>line 1</div>
      <div>line 2</div>
      <div>line 3</div>
    </div>
  );
})();

const DEFAULT_CONTAINER_STYLE = {
  display: "inline-block"
};

function MBTooltip(props) {
  function renderTooltip() {
    if (props.disabled) return null;
    if (!props.tooltip) return null;
    return (
      <div
        className={`${props.tooltipTextClassName} position-${props.tooltipPosition} float-${props.tooltipFloatPosition} mb-tooltip-text`}
      >
        {props.tooltip}
      </div>
    );
  }

  return (
    <MBTooltipContainer
      class={`${props.className}`}
      tooltipPosition={props.tooltipPosition}
      tooltipFloatPosition={props.tooltipFloatPosition}
      style={{ ...props.style, ...DEFAULT_CONTAINER_STYLE }}
      tooltipWidth={props.tooltipWidth}
    >
      {props.children}
      {renderTooltip()}
    </MBTooltipContainer>
  );
}

MBTooltip.defaultProps = {
  children: DEFAULT_TOOLTIP_ICON,
  disabled: false,
  className: "",
  tooltipPosition: TOOLTIP_POSITION.TOP,
  tooltipFloatPosition: TOOLTIP_FLOAT_POSITION.CENTER,
  style: {},
  tooltipWidth: "120px",
  tooltipTextClassName: ""
};

MBTooltip.TOOLTIP_POSITION = TOOLTIP_POSITION;
MBTooltip.TOOLTIP_FLOAT_POSITION = TOOLTIP_FLOAT_POSITION;

export default MBTooltip;
