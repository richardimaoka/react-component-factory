/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import {
  ActionInstructionComponentFragment,
  ParagraphComponentFragment,
} from '../generated/graphql'
import {
  createParagraph,
  isEmptyParagraph,
  ParagraphComponent,
} from '../paragraph/ParagraphComponent'
import { ActionLabel } from './ActionLabel'

interface ActionInstructionComponentProps {
  fragment: ActionInstructionComponentFragment
}

const InnerComponent = ({
  fragment,
}: {
  fragment: ParagraphComponentFragment
}): JSX.Element => (
  <div>
    <ActionLabel />
    <div
      css={css`
        padding: 8px;
        border: solid 1px #eecf33;
      `}
    >
      <ParagraphComponent fragment={fragment} />
    </div>
  </div>
)

export const ActionInstructionComponent = ({
  fragment,
}: ActionInstructionComponentProps): JSX.Element => {
  if (!fragment.instruction || isEmptyParagraph(fragment.instruction)) {
    return (
      <InnerComponent
        fragment={createParagraph('エラー: アクションの指示文がありません')}
      />
    )
  } else {
    return <InnerComponent fragment={fragment.instruction} />
  }
}

ActionInstructionComponent.fragment = gql`
  fragment ActionInstructionComponent on Action {
    instruction {
      ...ParagraphComponent
    }
  }

  ${ParagraphComponent.fragment}
`
