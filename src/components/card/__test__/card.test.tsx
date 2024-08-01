import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Card from '../card'

describe('Card component', () => {
  it('Card should render correctly', () => {
    render(<Card />)
    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument()
  })
})
