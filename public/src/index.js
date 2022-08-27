import './components/post/myPost.js'

class MyContainer extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({ mode:'open' })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `
                <my-post
                username="Richi-jeje"
                ubicacion="Universidad ICESI"
                numerolikes="362,013 Likes"

                usernamecomentario="<strong>Richi-jeje:</strong>"
                micomentario1="Hola profe esta es mi primer publicación en"

                micomentario2="instagram, gracias a la mejor clase."

                fechapublicacion="Hace 10mins"
                ></my-post>
        `   
    }
}

customElements.define('my-container', MyContainer)