import { render, screen } from '@testing-library/react'
import App from './app'

describe('App component', () => {
  it('Should render elements', () => {
    render(<App />)

    const title = screen.getByText('Evaluación Semestral 2023')
    expect(title).toBeInTheDocument()

    const color1 = screen.getByText('#FFDD00')
    expect(color1).toBeInTheDocument()

    const color2 = screen.getByText('#0F265C')
    expect(color2).toBeInTheDocument()

    const color3 = screen.getByText('#979797')
    expect(color3).toBeInTheDocument()

    const color4 = screen.getByText('#000000')
    expect(color4).toBeInTheDocument()

    const icons = screen.getAllByRole("img")
    expect(icons).toHaveLength(4)

    const apiRestText = screen.getByText('La documentación del API REST la puede ver en el archivo README.md')
    expect(apiRestText).toBeInTheDocument()
  })
})
