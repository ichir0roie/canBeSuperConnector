const ss=SpreadsheetApp.getActiveSpreadsheet();
const dataSht=ss.getSheetByName("データ");
const values=dataSht.getDataRange().getValues();

const clSt=1;
const rwName=0;
const rwRmd=1;a

function main(){
  let targets=[];
  for (var i=clSt;i<values.length;i++){
    if(values[i][rwName]==""){
      break;
    }
    let date=new Date()
    targets.push(new Target(values[i][rwName],values[i][rwRmd]));
  }
  targets=sortTargets(targets);
  
  console.log("test");

  let text=createText(targets);
  sendTodays(targets[0].name,text);
}

function sortTargets(targets){
  return targets.sort((a,b) => a.date-b.date);
}

function testMail(){
  mSendMail("test");
}


function Target(name,date){
  this.name=name;
  this.date=date;
}

function createText(targets){
  let text="";

  text+="contact list\n";

  for(var i=0;i<targets.length;i++){
    text+="name : "+targets[i].name+" , ";
    var dateText=
    text+="date : "+targets[i].date+"\n";
  }
  return text;
}