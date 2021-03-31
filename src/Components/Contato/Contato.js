import React from 'react'
import {
    Container,
    BoxTxt,
    Form
} from "./ContatoElements.js"
import {Footer} from "../Footer/Footer"

export const Contato = () => {
    return (
        <Container id="container-contato">
            <BoxTxt>
                <h1>Are you ready to start your new project?</h1>
                <p>Did you have an idea? Let's have a chat and make it real!</p>

                <Form>
                    <input type="text" name="name" id="name" placeholder="What's your name?"/>
                    <input type="text" name="name" id="name" placeholder="What's your email address?"/>
                    <input type="text" name="name" id="name" placeholder="What's your phone number?"/>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="How may we help you?"></textarea>
                    <button type="submit">Send message</button>
                </Form>
            </BoxTxt>

            <Footer/>            
        </Container>
    )
}
