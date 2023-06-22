# Sobre esse projeto Anime Sinopse

    Ele é desenvolvido em React.js e está no ar através da Vercel.
    A premissa dele é ser um "joguinho" de acertar a resposta através de uma breve descrição.
    A sua base de dados é um arquivo .JSON em uma API muito básica feita por mim e integrada a esse projeto. Teria opções melhores de criar um banco de dados, porém optei por essa para praticar enquanto desenvolvia esse projeto.

## Detalhes mais específicos sobre o projeto

    Como o banco de dados é uma API e meu conhecimento sobre a área ainda é limitado, e a ideia era deixar esse projeto no ar através da Vercel, acabei tendo um empecilho que foi:

        Ao desenvolver esse projeto e a API na minha máquina, tudo correu como eu havia planejado e está funcionando corretamente. Então irei deixar o código dessa API no meu GitHub com o nome de "anime-sinopse-server", onde no seu README.md deixarei mais detalhes de como rodar caso você queira testar o projeto com todas suas funções funcionando corretamente.

        Mas afinal, o problema que encontrei foi que eu precisava rodar essa API para que meu projeto conseguisse acessá-la. Então utilizei a Vercel novamente, e aqui entra o problema: como ainda não sei a maneira correta de lidar com APIs. Ao deixá-la rodando através da Vercel, esse projeto não conseguia acessar corretamente o arquivo .JSON. Fazendo algumas alterações no código, consegui acessar o array dentro do .JSON e fazer a parte mecânica do "joguinho" funcionar. No entanto, uma das funções que eu havia implementado, que era adicionar um novo item ao "banco de dados" através de um formulário (que pode ser acessado através do ícone de cadeado na página inicial), acabou perdendo sua funcionalidade. Mas, ao invés de remover, optei por mantê-la para que possa ser testada localmente caso haja interesse.

## Como testar o projeto na sua maquina

    Caso você queira testar o projeto em sua máquina, substitua o código do arquivo "animes.js" na pasta src/Serviços por este:

        "
        import axios from "axios"

        const animesAPI = axios.create({baseURL: 'http://localhost:8000'});

        async function getAnimes() {
            const response = await animesAPI.get('/animes', )
            return response.data
        }
        async function postAnimes(nome, sinopse, imagem) {
            const response = await animesAPI.post('/animes', { nome, sinopse, imagem })
            return response.data
        }
        export {
            getAnimes,
            postAnimes
        }
        "
    Salve o arquivo e, no terminal, dentro da pasta onde está este projeto, execute o comando "npm start". No terminal, dentro da pasta do "anime-sinopse-server", utilize o comando "npx nodemon app.js". Se tudo estiver correto, o formulário deve funcionar corretamente, alterando o arquivo .JSON e retornando avisos de erro para o usuário caso ocorra algo inesperado, como a falta de uma imagem ou já existir um item com esse nome.