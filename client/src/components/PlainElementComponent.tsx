/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { PlainElementComponentFragment } from '../lib/generated/graphql'
import { CommandComponent } from './command/CommandComponent'
import { ParagraphComponent } from './paragraph/ParagraphComponent'

interface PlainElementComponentProps {
  fragment: PlainElementComponentFragment
}

export const PlainElementComponent = ({
  fragment,
}: PlainElementComponentProps): JSX.Element => {
  const typename = fragment.__typename
  switch (typename) {
    case 'Command':
      return <CommandComponent fragment={fragment} />
    case 'Paragraph':
      return <ParagraphComponent fragment={fragment} />
    default:
      // A TypeScript error like `Type 'string' is not assignable to type 'never'.ts(2322)`
      // means switch statement's exhastiveness check failed. (i.e.) you are missing some `case` branches above.
      // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
      const _exhaustiveCheck: never = typename
      return _exhaustiveCheck
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
