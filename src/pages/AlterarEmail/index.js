import React from "react";

const AlterarEmail = () => {
    return (

        <div class="container">
            <nav>
                <ul>
                    <img src="../assets/img/MIDALL NOVOb.png" class="imagem" />
                    <li><a href="/sistema/clipping">Clipping de Email</a></li>
                    <li><a href="/sistema/gerenc_assoc">Gerenciar Associados</a></li>
                    <li><a href="/sistema/cadastro_assoc">Cadastrar Associados</a></li>
                    <img src="../assets/img/MIDALL NOVOb.png" class="imagem1" />
                </ul>
            </nav>
            <section class="alterar_emails">
                <div class="column">
                    <div class="title">
                        <h1 class="gradient">Alterar email</h1>
                    </div>
                    <form action="/sistema/altera_email" method="post">
                        <div class="inputs_alt">
                            <div class="nome_assoc">
                                <input type="text" placeholder="Nome do Associado..." />
                            </div>
                            <div class="ass">
                                <input type="text" placeholder="Assunto do Email..." />
                            </div>
                            <div class="descrit">
                                <textarea name="desc_em" id="desc_em" placeholder="Descrição do Email..."></textarea>
                            </div>
                        </div>
                        <div class="align_buts">
                            <button onclick="voltar()">Apagar</button> 
                            <button type="reset">Limpar</button>
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AlterarEmail;