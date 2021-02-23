//logID= "**********";//手動でDocumentを新規作成しIDを調べておく
ssID = "1Sh8Aq2Jbbye9w8i4D9TcD6q7f4fq3Q8KKCgdfv-PGqg";//手動でSpreadsheetを新規作成しIDを調べておく

var subject = "Today's recommended contacts";//メールの題目
var name = "can be super conntector";//送り主の名前

function sendTodays(target,body) {
  subject="today target is '"+target+"'";
  MailApp.sendEmail({ to: toAdr, subject: subject, name: name, body: body });
}
