import React from "react";
import Header from "../../components/Header";

const GerencAssoc = () => {

    return (

        <div className="container">
            <div class="container">
            <Header />
            </div>
            <section class="Gerenciar_Associados">
                <div class="coluna">
                    <h1 class="gradient">Gerenciar Associados</h1>
                    <div class="borda">
                        <table class="dados1">
                            <tr class="gradient">
                                <th> </th>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th>Instituição</th>
                            </tr>
                            {/* {{#each Assoc}} */}
                            <label for="{{id}}">
                            <div class="dados">
                                <tr>
                                    <td><input type="hidden" name="id" value="{{id}}" />
                                        {/* <p>{{id}}</p> */}
                                    </td>
                                <div class="nome_assoc">
                                    <td>
                                        {/* <p>{{nome}}</p> */}
                                    </td>
                                </div>
                                <div class="desc">
                                    <td>
                                        {/* <p>{{tel}}</p> */}
                                    </td>
                                </div>
                                <div class="ema">
                                    <td>
                                        {/* <p>{{email}}</p> */}
                                    </td>
                                </div>
                                <div class="inst">
                                    <td>
                                        {/* <p>{{inst_ens}}</p> */}
                                    </td>
                                </div>
                                <div class="align_buts">
                                <td>
                                    <a href="/sistema/gerenc_associ/{{id}}"><button type="submit">Alterar</button></a>
                                </td>
                            </div>
                            </tr>
                            </div>
                            </label>
                            {/* {{/each}} */}
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GerencAssoc;