import { FunctionComponent, ReactNode } from "react";
import './InformPanel.css'

interface IPanel {
  text: string,
  status?: string,
  children?: ReactNode
}

export const InformPanel:FunctionComponent<IPanel> = ({text, status, children}) => {
  return <div className="inform-panel">{children}
      <div className={status}>{text}</div>
    </div>
}