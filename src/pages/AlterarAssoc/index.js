import React from "react";

const AlterarAssoc = () => {
    return (

        <div className="container">
            <div class="container">
                <nav>
                    <ul>
                        <img src="../../assets/img/MIDALL NOVOb.png" class="imagem" />
                        <li><a href="/sistema/clipping">Clipping de Email</a></li>
                        <li><a href="/sistema/gerenc_assoc">Gerenciar Associados</a></li>
                        <li><a href="/sistema/cadastro_assoc">Cadastrar Associados</a></li>
                        <img src="../../assets/img/MIDALL NOVOb.png" class="imagem1" />
                    </ul>
                </nav>
            </div>
            <section class="alterar_user">
                <div class="coluna">
                    <h1 class="gradient">Alterar Associados</h1>
                    <form action="/sistema/alterar_assoc/{{Resultado.id}}" method="POST">
                        <input type="hidden" name="id" value="{{Resultado.id}}"></input>
                        <div class="td">
                            <div class="info">
                                <input type="text" placeholder="Nome" name="nome" value="{{Resultado.nome}}" required />
                                <br />
                                <input type="text" placeholder="Endereço" name="endereco" value="{{Resultado.endereco}}" required />
                                <br />
                                <input type="text" placeholder="Complemento" name="comp" value="{{Resultado.comp}}" required />
                                <br />
                                <div class="info_lado">
                                    <input type="date" placeholder="Data de Nascimento" name="nasc" value="{{Resultado.nasc}}" required />
                                    <img class="logo3" src="../../assets/img/logo3.jpg"></img>
                                    <input type="text" placeholder="CEP" name="cep" value="{{Resultado.cep}}" required />
                                </div>
                                <br />
                            </div>
                        </div>
                        <div class="info2">
                            <div class="itens-cadastro">
                                <input type="text" placeholder="Telefone" name="tel" value="{{Resultado.tel}}" required />
                                <input type="text" placeholder="CPF" name="cpf" value="{{Resultado.cpf}}" required />
                                <input type="text" placeholder="RG" name="rg" value="{{Resultado.rg}}" required />
                            </div>
                            <div class="novas_infos">
                                <select name="estado_cv" id="estado_cv" required>
                                    <option value="Casado(a)">Casado(a)</option>
                                    <option value="Solteiro(a)">Solteiro(a)</option>
                                    <option value="Viúvo(a)">Viúvo(a)</option>
                                </select>
                                <img class="logo3" src="../../assets/img/logo3.jpg"></img>
                                <input type="text" name="inst_ens" placeholder="Instituição de Ensino" value="{{Resultado.inst_ens}}" required />
                            </div>
                            <div class="info_email">
                                <input type="text" placeholder="Email" name="email" value="{{Resultado.email}}" required />
                            </div>
                            <div class="align_buts">
                                <button type="submit">Salvar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AlterarAssoc;
