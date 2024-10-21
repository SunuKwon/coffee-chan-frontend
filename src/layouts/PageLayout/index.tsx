import { ReactNode } from 'react'

export default function PageLayout ( props: PageLayoutProps ) {
  const { title, description, renderActions, renderContents } = props

  return (
    <div className="page-layout-container h-full w-4/5 flex  flex-col">
      <div className="page-layout-header w-full border-t border-solid border-[rgb(225,225,225)] flex">
        <div className="font-bold text-lg py-2">{ title }</div>
        { description && <div className="text-gray-400 text-md py-2 mx-1">{ description }</div> }
        {
          renderActions &&
          <div className="page-layout-actions flex">
            { renderActions() }
          </div>
        }
      </div>
      <div className="page-layout-content flex-1">
        { renderContents && renderContents() }
      </div>
    </div>
  )
}

export interface PageLayoutProps {
  title: string;
  description?: string;
  renderActions?(): ReactNode;
  renderContents?(): ReactNode;
}
