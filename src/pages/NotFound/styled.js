import styled from 'styled-components'

export const NotFoundArea = styled.div`
background-color: #999;

.conteudo {
    display: flex;
    height: 400px;

    .botao {
        width: 200px;
        height: 50px;
        line-height: 30px;
        display: flex;
        margin-top: 300px;
        margin-right: 30px;
        margin-left: auto;

        a {
            text-decoration: none;
            padding: 10px 20px;
            background-color: #BA55D3;
            border-radius: 5px;
            border: 1px solid #4B0082;
            color: #FFF;
            transition: all ease 0.4s;

            &:hover {
                background-color: #4B0082;
                border: 1px solid #BA55D3;
            }
        }

    }
}

`