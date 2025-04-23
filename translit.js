function send(){
var text = document.getElementById('text').value;
var transl = new Array();
    transl['А']='A';     transl['а']='a';
    transl['Б']='B';     transl['б']='b';
    transl['В']='V';     transl['в']='v';
    transl['Г']='G';     transl['г']='g';
    transl['Д']='D';     transl['д']='d';
    transl['Е']='E';     transl['е']='e';
    transl['Ё']='Yo';    transl['ё']='yo';
    transl['Ж']='Zh';    transl['ж']='zh';
    transl['З']='Z';     transl['з']='z';
    transl['И']='I';     transl['и']='i';
    transl['Й']='J';     transl['й']='j';
    transl['К']='K';     transl['к']='k';
    transl['Л']='L';     transl['л']='l';
    transl['М']='M';     transl['м']='m';
    transl['Н']='N';     transl['н']='n';
    transl['О']='O';     transl['о']='o';
    transl['П']='P';     transl['п']='p';
    transl['Р']='R';     transl['р']='r';
    transl['С']='S';     transl['с']='s';
    transl['Т']='T';     transl['т']='t';
    transl['У']='U';     transl['у']='u';
    transl['Ф']='F';     transl['ф']='f';
    transl['Х']='X';     transl['х']='x';
    transl['Ц']='C';     transl['ц']='c';
    transl['Ч']='Ch';    transl['ч']='ch';
    transl['Ш']='Sh';    transl['ш']='sh';
    transl['Щ']='Shh';    transl['щ']='shh';
    transl['Ъ']='"';     transl['ъ']='"';
    transl['Ы']='Y\'';    transl['ы']='y\'';
    transl['Ь']='\'';    transl['ь']='\'';
    transl['Э']='E\'';    transl['э']='e\'';
    transl['Ю']='Yu';    transl['ю']='yu';
    transl['Я']='Ya';    transl['я']='ya';
 
    var result = '';
    for(i=0;i<text.length;i++) {
        if(transl[text[i]] != undefined) { result += transl[text[i]]; }
        else { result += text[i]; }
    }
    document.getElementById('text').value = result;
}
function sendtwo(){
var text = document.getElementById('text').value;
var transl = new Array();
    transl['A']='А';     transl['a']='а';
    transl['B']='Б';     transl['b']='б';
    transl['V']='В';     transl['v']='в';
    transl['G']='Г';     transl['g']='г';
    transl['D']='Д';     transl['d']='д';
    transl['E']='Е';     transl['e']='е';
    transl['Yo']='Ё';    transl['yo']='ё';
    transl['Zh']='Ж';    transl['zh']='ж';
    transl['Z']='З';     transl['z']='з';
    transl['I']='И';     transl['i']='и';
    transl['J']='Й';     transl['j']='й';
    transl['K']='К';     transl['k']='к';
    transl['L']='Л';     transl['l']='л';
    transl['M']='М';     transl['m']='м';
    transl['N']='Н';     transl['n']='н';
    transl['O']='О';     transl['o']='о';
    transl['P']='П';     transl['p']='п';
    transl['R']='Р';     transl['r']='р';
    transl['S']='С';     transl['s']='с';
    transl['T']='Т';     transl['t']='т';
    transl['U']='У';     transl['u']='у';
    transl['F']='Ф';     transl['f']='ф';
    transl['X']='Х';     transl['x']='х';
    transl['C']='Ц';     transl['c']='ц';
    transl['Ch']='Ч';    transl['ch']='ч';
    transl['Sh']='Ш';    transl['sh']='ш';
    transl['Shh']='Щ';    transl['shh']='щ';
    transl['"']='Ъ';     transl['"']='ъ';
    transl['Y\'']='Ы';    transl['y\'']='ы';
    transl['\'']='Ь';    transl['\'']='ь';
    transl['E\'']='Э';    transl['e\'']='э';
    transl['Yu']='Ю';    transl['yu']='ю';
    transl['Ya']='Я';    transl['ya']='я';
 
    var result = '';
    for(i=0;i<text.length;i++) {
        if(transl[text[i]] != undefined) { result += transl[text[i]]; }
        else { result += text[i]; }
    }
    document.getElementById('text').value = result;
}
function sendcopy() {
  var copyText = document.getElementById("text");
  copyText.select();
  document.execCommand("copy");
}