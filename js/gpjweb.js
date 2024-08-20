function GPJWEB(objdoc_GPJWEB,
				objwnd_GPJWEB)
{
	var objctl_GPJWEB = new Object();

	objctl_GPJWEB.objfrm_GPJWEB  = objdoc_GPJWEB.forms["objfrm_GPJWEB"];
	objctl_GPJWEB.strurl_Dominio = "http://www.gpjweb.com.br";
	objctl_GPJWEB.txtcod_Login	 = objdoc_GPJWEB.getElementById("txtcod_Login");
	objctl_GPJWEB.txtcod_Senha	 = objdoc_GPJWEB.getElementById("txtcod_Senha");
	objctl_GPJWEB.txtcod_Chave	 = objdoc_GPJWEB.getElementById("txtcod_Chave");
	objctl_GPJWEB.objbtn_Sistema = objdoc_GPJWEB.getElementById("objbtn_Sistema");
	objctl_GPJWEB.objref_Lembrar = objdoc_GPJWEB.getElementById("objref_Lembrar");
	objctl_GPJWEB.objref_Ajuda	 = objdoc_GPJWEB.getElementById("objref_Ajuda");

	objctl_GPJWEB.txtcod_Login.onfocus = EventoLimparCaixaTexto;
	objctl_GPJWEB.txtcod_Senha.onfocus = EventoLimparCaixaTexto;
	objctl_GPJWEB.txtcod_Chave.onfocus = EventoLimparCaixaTexto;

	objctl_GPJWEB.txtcod_Login.onkeydown = EventoCaixaTextoLogin;
	objctl_GPJWEB.txtcod_Senha.onkeydown = EventoCaixaTextoSenha;
	objctl_GPJWEB.txtcod_Chave.onkeydown = EventoCaixaTextoChave;

	objctl_GPJWEB.objbtn_Sistema.onclick = EventoBotaoSistema;
	objctl_GPJWEB.objref_Lembrar.onclick = EventoLembrarSenha;
	objctl_GPJWEB.objref_Ajuda.onclick	 = EventoAjuda;

	function Sistema(blnflg_Botao)
	{
		var blnflg_Validar = ((event.keyCode == 13) || (blnflg_Botao == true));
		var strcod_Login   = new String(objctl_GPJWEB.txtcod_Login.value);
		var strcod_Senha   = new String(objctl_GPJWEB.txtcod_Senha.value);
		var strcod_Chave   = new String(objctl_GPJWEB.txtcod_Chave.value);
		var strnom_IFrame  = "GPJWEB_blank";//"objifr_GPJWEB";
		var strdes_URL	   = objctl_GPJWEB.strurl_Dominio + "/ASP_GPJ/BCompany/SistemaUsuario/SIS_SistemaUsuario.aspx?des_Acao=VALIDAR";

		if (blnflg_Validar == false)
		{
			return (blnflg_Validar);
		}
		else if (strcod_Login.length == 0)
		{
			alert("Login Inválido.");
			objctl_GPJWEB.txtcod_Login.focus();
			return (false);
		}
		else if (strcod_Senha.length == 0)
		{
			alert("Senha Inválida.");
			objctl_GPJWEB.txtcod_Senha.focus();
			return (false);
		}
		else if (strcod_Chave.length < 10)
		{
			alert("Chave Inválida.");
			objctl_GPJWEB.txtcod_Chave.focus();
			return (false);
		}

		objctl_GPJWEB.objfrm_GPJWEB.target = strnom_IFrame;
		objctl_GPJWEB.objfrm_GPJWEB.action = strdes_URL;
		objctl_GPJWEB.objfrm_GPJWEB.submit();
		objctl_GPJWEB.objfrm_GPJWEB.reset();
		
	}

	function EventoCaixaTextoLogin()
	{
		Sistema(false);
	}

	function EventoCaixaTextoSenha()
	{
		Sistema(false);
	}

	function EventoCaixaTextoChave()
	{
		Sistema(false);
	}

	function EventoBotaoSistema()
	{
		Sistema(true);
	}

	function EventoLembrarSenha()
	{
		var objpar_Senha		= new Object();
		var strdes_Configuracao = "dialogWidth:555px"
								+ ";dialogHeight:160px"
								+ ";dialogLeft:"
								+ ";dialogTop:"
								+ ";center:yes"
								+ ";scroll:no"
								+ ";status:no"
								+ ";dialogHide:no"
								+ ";edge:raised"
								+ ";help:no"
								+ ";resizable:no"
								+ ";unadorned:no";
		var strdes_URL			= objctl_GPJWEB.strurl_Dominio + "/ASP_BCompany/Senha/SIT_Senha.htm";

		objpar_Senha.cod_Login = objctl_GPJWEB.txtcod_Login.value;
		objpar_Senha.cod_Chave = objctl_GPJWEB.txtcod_Chave.value;

		objwnd_GPJWEB.showModalDialog(strdes_URL, objpar_Senha, strdes_Configuracao);
	}

	function EventoAjuda()
	{
		var strdes_Configuracao = "dialogWidth:650px"
								+ ";dialogHeight:400px"
								+ ";dialogLeft:"
								+ ";dialogTop:"
								+ ";center:yes"
								+ ";scroll:yes"
								+ ";status:no"
								+ ";dialogHide:no"
								+ ";edge:raised"
								+ ";help:no"
								+ ";resizable:yes"
								+ ";unadorned:no";
		var strdes_URL			= "Ajuda.htm";

		objwnd_GPJWEB.showModalDialog(strdes_URL, null, strdes_Configuracao);
	}

	function EventoLimparCaixaTexto()
	{
		this.value = "";
	}
}