<%
@Language=VBScript CodePage = 65001%>

<%
Session.CodePage = 65001
Response.charset ="utf-8"

Dim ObjSendMail
Set ObjSendMail = CreateObject("CDO.Message") 
         
'This section provides the configuration information for the remote SMTP server.
     
ObjSendMail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2 'Send the message using the network (SMTP over the network).
ObjSendMail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpserver") ="smtplw.com.br"
ObjSendMail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 587 
ObjSendMail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpusessl") = False 'Use SSL for the connection (True or False)
ObjSendMail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpconnectiontimeout") = 60
     
' If your server requires outgoing authentication uncomment the lines bleow and use a valid email address and password.
ObjSendMail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1 'basic (clear-text) authentication
ObjSendMail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/sendusername") ="bcompany1"
ObjSendMail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/sendpassword") ="bc02289bc"
     
ObjSendMail.Configuration.Fields.Update
     
'End remote SMTP server configuration section==
ObjSendMail.To = "aprado@apradoadvocacia.com.br"
ObjSendMail.Subject = "Contato - Site www.apradoadvocacia.com.br"
ObjSendMail.From = "envio@gojur.com.br"
     
' we are sending a text email.. simply switch the comments around to send an html email instead
'ObjSendMail.HTMLBody = "this is the body"
ObjSendMail.TextBody = "Nome: " + request.form("nome") + vbCrLf + "Email: "+ request.form("email")+ vbCrLf + "Telefone: "+ request.form("phone") + vbCrLf  + vbCrLf + vbCrLf  + "Mensagem: "  + request.form("message")
     
ObjSendMail.Send
     
Set ObjSendMail = Nothing 
%>