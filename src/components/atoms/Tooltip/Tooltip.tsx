import type { FC } from 'react';

interface TooltipProps {
  tooltipID: string;
  tooltipText: string;
}

const Tooltip: FC<TooltipProps> = (props) => {
  const { tooltipID, tooltipText } = props;

  return (
    <div
      id={tooltipID}
      role="tooltip"
      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      {tooltipText}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
};

export default Tooltip;
