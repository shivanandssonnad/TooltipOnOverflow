import React from "react";
import MBTooltip from "../../Components/Tooltip";

import styles from "./styles.module.scss";

function TooltipExample() {
  return (
    <div className={styles["flex-right"]}>
      <div className={styles["max-width-200px"]}>
        <MBTooltip.TooltipOnEllipsis
          disabled={false}
          tooltipTextClassName={styles["custom-tooltip-text"]}
          tooltipPosition={MBTooltip.TOOLTIP_POSITION.LEFT}
          tooltipWidth="300px"
        >
          ajkshdjkanxlkankjshxbjkalsndbklasgbjalgjksabdnljkashjkbngfhjkbaxsvajhcbkja
        </MBTooltip.TooltipOnEllipsis>
      </div>
    </div>
  );
}

export default TooltipExample;
