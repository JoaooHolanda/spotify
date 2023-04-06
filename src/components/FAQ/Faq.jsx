import "./assets/style.css"
import React from "react";
import Header from "../Header/Header";
import hamburguer from '../FAQ/assets/plus.svg'
import FooterF from "../Footer_Faq/FooterFaq"
import Accordion from 'react-bootstrap/Accordion';





function Faq(){
 
  
    return(
       <div class="Faq">
        
        <Header />
    <div class="flexbox">  
  
  <div class="title">
    <h1>Atendimento do Spotify</h1>
  </div>
  <div class="describe">
    <p> 
      Selecione o item com o qual você precisa de ajuda abaixo</p>
  </div>

      


    <div class="container quest">
    <div class="subs">
        <p>Perguntas Frenquentes</p>
  </div>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Como posso executar uma reinstalação limpa do aplicativo?</Accordion.Header>
        <Accordion.Body id="teste">
        Os problemas mais comuns podem ser corrigidos com uma rápida reinstalação do aplicativo. Em algumas situações, no entanto, pode ser necessária uma reinstalação limpa (mais completa) do aplicativo. Dessa forma, você pode começar de novo com o Spotify no seu dispositivo.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Eu criei uma nova conta. Posso transferir minhas listas de reprodução, músicas salvas e seguidores?</Accordion.Header>
        <Accordion.Body>
        Certifique-se de que todas as suas listas de reprodução em sua conta antiga estejam definidas como Públicas e tenham sido adicionadas ao seu perfil com estas etapas. Você também pode criar uma lista de reprodução chamada Your Music e copiar todas as suas músicas salvas para lá (no Windows, pressione Ctrl + a e no Mac, pressione Cmnd + a) enquanto estiver na seção 'Músicas' e arraste-as para a nova lista de reprodução).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Como fecho (excluo) minha conta do Spotify?</Accordion.Header>
        <Accordion.Body>
        Talvez você tenha uma conta duplicada, talvez só precise de uma pausa no Spotify ou queira começar do zero com uma nova conta? Sem ressentimentos!

        Caso queira apenas parar de pagar, você pode cancelar seu plano Premium e usar o Spotify gratuitamente.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Como altero as configurações do meu país?</Accordion.Header>
        <Accordion.Body>
        Generally, to change the country registered on your Spotify account, you’ll need to visit the profile page. For more info according to your plan, check below.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
</div>
<br></br>
<br></br>
         <FooterF />
       
       </div> 
    )
}

export default Faq;