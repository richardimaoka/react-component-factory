import { gql } from '@apollo/client'
import { FileComponentFragment } from '../../lib/generated/graphql'
import { FileNameTab } from './FileNameTab'
import { FileContentComponent } from './FileContentComponent'

interface FileComponentProps {
  fragment: FileComponentFragment
}

export const FileComponent = ({
  fragment,
}: FileComponentProps): JSX.Element => {
  if (!fragment.content) {
    return <></>
  } else {
    return (
      <div>
        {!fragment.fileName ? (
          <></>
        ) : (
          <FileNameTab filename={fragment.fileName} selected={true} />
        )}
        <FileContentComponent fileContent={fragment.content} />
      </div>
    )
  }
}

FileComponent.fragment = gql`
  fragment FileComponent on File {
    fileName
    content
  }
`
