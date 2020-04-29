import React from 'react'
import { render, cleanup } from '@testing-library/react'
import "jest-demo/extend-expect"
import App from '../App'

test('should check if it renders', done => {
    const { getByTestId } = render(<App />)
    const linkElement = getByTestId('container')
    expect(linkElement).toBeInTheDocument()
})