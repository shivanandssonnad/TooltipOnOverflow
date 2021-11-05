import classNames from "classnames";
import React from "react";
import MBTooltipContainer from "./MBTooltipContainer";

function TooltipOnEllipsis(props) {
  const tooltipRef = React.useRef(null);
  const [useTooltip, setUseTooltip] = React.useState(false);

  React.useEffect(() => {
    const element = tooltipRef.current;
    if (element) {
      const bool = element.offsetWidth < element.scrollWidth;
      setUseTooltip(bool);
    }
  }, [props.children, props.width]);

  function renderTooltip() {
    if (props.disabled) return null;
    if (!useTooltip) return null;
    return (
      <div
        className={classNames(
          "mb-tooltip-text",
          props.tooltipTextClassName,
          `position-${props.tooltipPosition}`,
          `float-${props.tooltipFloatPosition}`
        )}
      >
        {props.children}
      </div>
    );
  }

  return (
    <MBTooltipContainer
      class={classNames(props.className)}
      tooltipPosition={props.tooltipPosition}
      style={{ width: props.width }}
      tooltipWidth={props.tooltipWidth}
    >
      <div
        ref={tooltipRef}
        style={{ width: props.width }}
        className="mb-ellipsis-container"
      >
        {props.children}
      </div>
      {renderTooltip()}
    </MBTooltipContainer>
  );
}

TooltipOnEllipsis.defaultProps = {
  width: "auto",
  className: "",
  tooltipTextClassName: "",
  disabled: false,
  tooltipPosition: "bottom",
  tooltipWidth: "300px"
};

export default TooltipOnEllipsis;
