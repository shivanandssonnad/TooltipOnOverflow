import styled from "styled-components";

const MBTooltipContainer = styled.div`
  position: relative;
  padding: 5px;

  .mb-ellipsis-container {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mb-tooltip-text {
    visibility: hidden;
    position: absolute;
    width: ${(props) => props.tooltipWidth};
    border: 1px #ddd solid;
    border-radius: 10px;
    padding: 10px 10px;
    box-shadow: 1px 3px #ddd;
    background: #fff;
    z-index: 10;

    &.position-top {
      bottom: 100%;

      &.float-center {
        left: 50%;
        margin-left: ${(props) =>
          `-${props.tooltipWidth.replace("px", "") / 2}px`};
      }

      &.float-left {
        left: 0%;
      }

      &.float-right {
        left: ${(props) => `calc(100% - ${props.tooltipWidth})`};
      }
    }

    &.position-bottom {
      top: 100%;

      &.float-center {
        left: 50%;
        margin-left: ${(props) =>
          `-${props.tooltipWidth.replace("px", "") / 2}px`};
      }

      &.float-left {
        left: 0%;
      }

      &.float-right {
        left: ${(props) => `calc(100% - ${props.tooltipWidth})`};
      }
    }

    &.position-right {
      left: 100%;
      top: -10px;
    }
  }

  &:hover .mb-tooltip-text {
    visibility: visible;
  }
`;
export default MBTooltipContainer;
