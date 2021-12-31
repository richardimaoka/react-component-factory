import { gql } from '@apollo/client'
import { useState } from 'react'
import { FileMultipleComponentFragment } from '../../lib/generated/graphql'
import { FileComponent } from './FileComponent'
import { FileContentComponent } from './FileContentComponent'
import { FileMultipleNameTab } from './FileMultipleNameTab'

interface FileMultipleComponentProps {
  fragment: FileMultipleComponentFragment
}

export const FileMultipleComponent = ({
  fragment,
}: FileMultipleComponentProps): JSX.Element => {
  const [selectFileIndex, setFileIndex] = useState(0)
  if (!fragment.files) {
    return <></>
  } else {
    const selectFile = fragment.files[selectFileIndex]
    if (!selectFile || !selectFile.content) {
      return <></>
    } else {
      return (
        <div>
          <FileMultipleNameTab
            fragment={fragment}
            selectFileIndex={selectFileIndex}
            selectFileCallback={(fileIndex) => setFileIndex(fileIndex)}
          />
          <FileContentComponent
            fileContent={selectFile.content}
            heightSpecification={{ specify: 'height', height: 600 }}
          />
        </div>
      )
    }
  }
}

FileMultipleComponent.fragment = gql`
  fragment FileMultipleComponent on FileMultiple {
    files {
      ...FileComponent
    }
    ...FileMultipleNameTab
  }
  ${FileComponent.fragment}
  ${FileMultipleNameTab.fragment}
`
