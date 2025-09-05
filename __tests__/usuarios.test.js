import { render, screen } from '@testing-library/react'
import Usuarios from '../src/app/(private)/(main-pages)/usuarios/page'

describe('users page', () => {
  it('renderiza o texto principal', () => {
    render(<Usuarios />)
    expect(screen.getByText(/Lista de Usuarios/i)).toBeInTheDocument()
  })
})