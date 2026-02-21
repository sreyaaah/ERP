import { Link } from "react-router-dom";
import { Tooltip } from "primereact/tooltip";
import { pdf, excel } from "../../utils/imagepath";

interface TooltipIconsProps {
  onPdfClick?: () => void;
  onExcelClick?: () => void;
}

const TooltipIcons: React.FC<TooltipIconsProps> = ({ onPdfClick, onExcelClick }) => {
  onExcelClick?: () => void;
  onPdfClick?: () => void;
}

const TooltipIcons = ({ onExcelClick, onPdfClick }: TooltipIconsProps) => {
  return (
    <>
      <Tooltip target="[data-pr-tooltip]" />

      <li>
        <Link 
          to="#" 
          data-pr-tooltip="Pdf" 
          data-pr-position="top"
          onClick={(e) => {
            e.preventDefault();
            onPdfClick?.();
        <Link to="#" data-pr-tooltip="Pdf" data-pr-position="top"
          onClick={(e) => {
            if (onPdfClick) {
              e.preventDefault();
              onPdfClick();
            }
          }}
        >
          <img src={pdf} alt="img" />
        </Link>
      </li>

      <li>
        <Link 
          to="#" 
          data-pr-tooltip="Excel" 
          data-pr-position="top"
          onClick={(e) => {
            e.preventDefault();
            onExcelClick?.();
        <Link to="#" data-pr-tooltip="Excel" data-pr-position="top"
          onClick={(e) => {
            if (onExcelClick) {
              e.preventDefault();
              onExcelClick();
            }
          }}
        >
          <img src={excel} alt="img" />
        </Link>
      </li>
    </>
  );
};

export default TooltipIcons;
