import React from "react";
import MBTooltip from "../../Components/Tooltip";

function TooltipOnEllipsisExample() {
  return (
    <div>
      <MBTooltip
        tooltipPosition={MBTooltip.TOOLTIP_POSITION.TOP}
        tooltipWidth="300px"
        tooltip="Shivanand Sonnad"
      >
        Shivanand Sonnad
      </MBTooltip>
    </div>
  );
}

export default TooltipOnEllipsisExample;
