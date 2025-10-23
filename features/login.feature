# language: pt
Funcionalidade: Login
    Realizar o login do site www.saucedemo.com

    Esquema do Cenario: Login com sucesso
        Dado que estou na pagina de Login
        Quando preencho o <usuario> e a <senha>
        E clico em Login
        Entao vou para a pagina <url> e vejo <titulo_secao>

    Exemplos:
    | usuario       | senha        | url       | titulo_secao |
    | standard_user | secret_sauce | inventory | Product      |
    | visual_user   | secret_sauce | inventory | Product      |

