import React from "react";

const CadastroAssoc = () => {
    return (

        <div className="container">
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
            </div>
            <section class="cadastro_user">
                <div class="coluna">
                    <h1 class="gradient">Cadastrar Associados</h1>
                    <form action="/sistema/cadastrar_assoc" method="POST">
                        <div class="td">
                            <div class="info">
                                <input type="text" placeholder="Nome" name="nome" required />
                                <br />
                                <input type="text" placeholder="Endereço" name="endereco" required />
                                <br />
                                <input type="text" placeholder="Complemento" name="comp" required />
                                <br />
                                <div class="info_lado">
                                    <input type="date" placeholder="Data de Nascimento" name="nasc" required />
                                    <img class="logo3" src="../assets/img/logo3.jpg"></img>
                                    <input type="text" placeholder="CEP" name="cep" required />
                                </div>
                                <br />
                            </div>
                        </div>
                        <div class="info2">
                            <div class="itens-cadastro">
                                <input type="text" placeholder="Telefone" name="tel" required />
                                <input type="text" placeholder="CPF" name="cpf" required />
                                <input type="text" placeholder="RG" name="rg" required />
                            </div>
                            <div class="novas_infos">
                                <select name="estado_cv" id="estado_cv" required>
                                    <option value="Casado(a)">Casado(a)</option>
                                    <option value="Solteiro(a)">Solteiro(a)</option>
                                    <option value="Viúvo(a)">Viúvo(a)</option>
                                </select>
                                <img class="logo3" src="../assets/img/logo3.jpg"></img>
                                <input type="text" name="inst_ens" placeholder="Instituição de Ensino" required></input>
                            </div>
                            <div class="info_email">
                                <input type="text" placeholder="Email" name="email" required />
                            </div>
                            <div class="align_buts">
                                <button type="reset">Limpar</button>
                                <button type="submit">Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    );
};

export default CadastroAssoc;