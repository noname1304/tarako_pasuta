const before_text = document.getElementById("before_text");
const after_text = document.getElementById("after_text");
//テキスト変換関数   
function text_replace() {
    
//入力されたテキストを取得（letで宣言しよう）。 ..①
let text_value = before_text.value;
    
//テキストを変換 ..②
text_value = text_value.replace(/な/g,"にゃ");
text_value = text_value.replace(/ね/g,"にぇ");
text_value = text_value.replace(/na/g,"nya");
text_value = text_value.replace(/Na/g,"Nya");
text_value = text_value.replace(/NA/g,"NYA");
text_value = text_value.replace(/ne/g,"nie");
text_value = text_value.replace(/Ne/g,"Nie");
text_value = text_value.replace(/NE/g,"NIE");
    
//変換後のテキストエリアに表示 ..③
after_text.value = text_value;
}
