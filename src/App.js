import TooltipOnEllipsis from "./Components/TooltipOnEllipsis";
import MBTooltip from "./Components/TooltipOnEllipsis/Tooltip";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TooltipOnEllipsis
        disabled={false}
        tooltipTextClassName="custom-tooltip-text"
        tooltipPosition="bottom"
        tooltipWidth="300px"
      >
        ajkshdjkanxlkankjshxbjkalsndbklasgbjalgjksabdnljkashjkbngfhjkbaxsvajhcbkja
      </TooltipOnEllipsis>

      <br />
      <br />
      <MBTooltip
        tooltip="Shivanand"
        tooltipPosition={MBTooltip.TOOLTIP_POSITION.RIGHT}
        tooltipFloatPosition={MBTooltip.TOOLTIP_FLOAT_POSITION.CENTER}
      />
    </div>
  );
}
