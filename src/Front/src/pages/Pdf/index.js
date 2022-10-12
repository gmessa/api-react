import React, { useState, useEffect } from "react";
import Header from "../../components/Header";

let pdfDoc = [['Felipe','http://www.africau.edu/images/default/sample.pdf'],['Gustavo','https://biblioteca.ibge.gov.br/visualizacao/livros/liv100643.pdf']]
let names = []
let pdfs = []
 
const Pdf = () => {
  names = [];
  pdfs = [];
  pdfDoc.forEach(
    data => {names.push(<a href={data[1]} target="_blank" rel="noreferrer"><button>abrir</button><br></br></a>);pdfs.push(<span>{data[0]}<br></br> </span>)}
    
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
