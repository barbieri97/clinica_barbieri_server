// form funcitions

// Verifica os campos
function validate(infos) {
  if (infos.nome == "") {
    throw "Isira os campos necessários";
  }
  if (infos.idade == "") {
    throw "Isira os campos necessários";
  }
  if (infos.numero == "") {
    throw "Insira os campos necessários";
  }
}

// Envia o formulario
$("#formsubmit").click((e) => {
  e.preventDefault();
  var infos = {
    nome: $("#formnome").val(),
    numero: $("#formnumero").val(),
    formaEtaria: $("[name=formetaria]:checked")
      .toArray()
      .map((c) => {
        return $(c).val();
      }),
    dia: $("[name=dia]:checked")
      .toArray()
      .map((c) => {
        return $(c).val();
      }),
    periodo: $("[name=periodo]:checked")
      .toArray()
      .map((c) => {
        return $(c).val();
      }),
    texto: $("#texto").val(),
  };
  try {
    validate(infos);
    var body = emailBody(infos);
    sendEmail(body);
  } catch (e) {
    alert(e);
  }
});

// Cria o body do email
function emailBody(infos) {
  var bodyTexto = `
    <h1>Novo contato!</h1>
    <h3>Nome:</h3> 
    <p>${infos.nome}</p>
    <hr>
    <h3>Número:</h3>
    <p>${infos.numero}</p>
    <hr>
    <h3>Faixa etária:</h3>
    <p>${infos.formaEtaria.toString()}</p>
    <hr>
    <h3>Dia:</h3>
    <p>${infos.dia.toString()}</p>
    <hr>
    <h3>Período:</h3>
    <p>${infos.periodo.toString()}</p>
    <hr>
    <h3>texto:</h3>
    <p>${infos.texto}</p>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        * {
        margin: 0;
        margin-left: 5px;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        }
    
        hr {
            margin-bottom: 10px;
            margin-top: 5px;
        }
    </style>
    `;
  return bodyTexto;
}

// Envia o email
function sendEmail(body) {
  const token = "6427981d-1275-48df-afa1-55800b84dfed";

  Email.send({
    SecureToken: token,
    To: "andrepb636@gmail.com",
    From: "andrepb636@gmail.com",
    Subject: "Novo contato",
    Body: body,
  }).then((mensagem) => {
    if (mensagem == "OK") {
      window.location.href = "/agradecimento/1";
    } else {
      alert("houve um erro ao enviar o contato, tente novamente mais tarde.");
    }
  });
}
