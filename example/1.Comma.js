import srtParser2 from "srt-parser-2";

var srt = `
1
00:00:11,544 --> 00:00:12,682
Hello
`;

var parser = new srtParser2();
var result = parser.fromSrt(srt);
console.log(result);
