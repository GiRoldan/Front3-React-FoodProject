import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import LoginForm from "../components/LoginForm";

describe("Testing LoginForm - render and events", () => {
    test("Title must be rendered", () =>{
        render(<LoginForm/>)
        const title = screen.getByText(/Debe loguearse/i)
        //Es case sentitive, pero con //i ya no lo es
        expect(title).toBeDefined()
})
    test("First input must be rendered", () => {
        render(<LoginForm/>)
        //el render en cada test lo tengo que hacer siempre
        const email = screen.getByRole('email')
        expect(email).toBeDefined()
    })
    test("Second input must be rendered and change event must work", () => {
        render(<LoginForm/>)
        const pass = screen.getByTestId('pass')
        fireEvent.change(pass, {target: {value: "contraseña123"}})
        expect(pass.value).toBe("contraseña123")
        
    })
    test("Button must be rendered", () => {
        const handleClick = vi.fn()
        render(<LoginForm handleClick= {handleClick}/>)
        const btn = screen.getByText("Enviar")
        fireEvent.click(btn)
        expect(handleClick).toBeCalledTimes(1)

    })
    //fireEvent es para la interacción del usuario
})
