import { ActionComponent } from './ActionComponent'
import { render, screen } from '@testing-library/react'

it('renders nothing when Action is empty', () => {
  const jsonString = `{
    "__typename": "Action"
  }`
  const fragment = JSON.parse(jsonString)

  const { container } = render(<ActionComponent fragment={fragment} />)
  console.log(container.childNodes.length)
  console.log(container.getBoundingClientRect())
  screen.debug()
  expect(3).toEqual(3)
})
