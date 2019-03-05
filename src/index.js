module.exports = function check(str, bracketsConfig) {
  var tst=[], k=' ', act=0;
  for (i=0; i<str.length; i++) {
    for (j=0; j<bracketsConfig.length; j++){
      if (str[i]==bracketsConfig[j][1]){
       if (tst.length>0 && tst[tst.length-1]==bracketsConfig[j][0]) tst.pop();
        else tst.push(str[i]);           
       }
      else if (str[i]==bracketsConfig[j][0]) tst.push(str[i]);
    }
  }    
  if (tst.length==0) return true;
  else return false; 
}
