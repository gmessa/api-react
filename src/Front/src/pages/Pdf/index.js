import React, { useState, useEffect } from "react";
import { renderMatches } from "react-router-dom";
import Header from "../../components/Header";


let pdfDoc = [['Felipe','../../pdfs/teste.pdf'],['Gustavo','https://biblioteca.ibge.gov.br/visualizacao/livros/liv100643.pdf']]
let names = []
let pdfs = []
 
const Pdf = () => {
  names = [];
  pdfs = [];
  pdfDoc.forEach(
    data => {pdfs.push(<a href="./verpdf" target="_blank" rel="noreferrer"><button>abrir</button><br></br></a>);names.push(<span>{data[0]}<br></br> </span>)},
  ) 
  return (
    
    <div className="container">
      
      <div class="container">
        <Header />
      </div>
      <section class="clipping_emails">
        <div class="coluna">
          <h1 class="gradient">Lista de PDF</h1>
          <div class="borda">
            <form action="/sistema/alt_email" method="post"></form>
            <table class="dados1">
                
                <thead>
                  <tr>
                    <th>{pdfs}</th>
                    <th>{names}</th>
                  </tr>
              </thead>

            </table>
          </div>
        </div>
      </section>

    </div>  
    
  )
  
};


export default Pdf