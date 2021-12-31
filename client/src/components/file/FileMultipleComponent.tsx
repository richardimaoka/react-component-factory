import { gql } from '@apollo/client'
import { useState } from 'react'
import { FileMultipleComponentFragment } from '../../lib/generated/graphql'
import { FileComponent } from './FileComponent'
import { FileContentComponent } from './FileContentComponent'
import { FileNameMultipleTab } from './FileNameMultipleTab'

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
          <FileNameMultipleTab
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
    ...FileNameMultipleTab
  }
  ${FileComponent.fragment}
  ${FileNameMultipleTab.fragment}
`
