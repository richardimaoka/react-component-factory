/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { PlainElementComponentFragment } from '../lib/generated/graphql'
import { switchExhaustivenessCheck } from '../switchExhaustivenessCheck'
import { CommandComponent, isEmptyCommand } from './command/CommandComponent'
import {
  isEmptyParagraph,
  ParagraphComponent,
} from './paragraph/ParagraphComponent'

interface PlainElementComponentProps {
  fragment: PlainElementComponentFragment
}

export const isEmptyPlainElement = (
  fragment: PlainElementComponentFragment
): boolean => {
  if (!fragment.__typename) {
    return false
  } else {
    const typename = fragment.__typename
    switch (typename) {
      case 'Command':
        return isEmptyCommand(fragment)
      case 'Paragraph':
        return isEmptyParagraph(fragment)
      default:
        return switchExhaustivenessCheck(typename)
    }
  }
}

export const PlainElementComponent = ({
  fragment,
}: PlainElementComponentProps): JSX.Element => {
  if (!fragment.__typename) {
    return <></>
  } else {
    const typename = fragment.__typename
    switch (typename) {
      case 'Command':
        return <CommandComponent fragment={fragment} />
      case 'Paragraph':
        return <ParagraphComponent fragment={fragment} />
      default:
        return switchExhaustivenessCheck(typename)
    }
  }
}

PlainElementComponent.fragment = gql`
  fragment PlainElementComponent on PlainElement {
    ... on Paragraph {
      ...ParagraphComponent
    }
    ... on Command {
      ...CommandComponent
    }
  }

  ${ParagraphComponent.fragment}
  ${CommandComponent.fragment}
`
