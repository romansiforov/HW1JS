var x = 6, y = 14, z = 4;

x += y - x++ * z;

/* 
1) Postfix increment x++
2) result x++ Multiple z
3) y subtraction 
4) x+ last

*/


document.write("X : "+x+"<br>");
document.write("Y : "+y+"<br>");
document.write("Z : "+z+"<br><hr>");

x = 6, y = 14, z = 4;
z = --x - y * 5;

/* 
1) Prefix decrement --x
2) multiple y * 5
3) result --x subtraction result  * 5
4) z = result

*/

document.write("X : "+x+"<br>");
document.write("Y : "+y+"<br>");
document.write("Z : "+z+"<br><hr>");

x = 6, y = 14, z = 4;
y /= x + 5 % z;

/* 
1) 5 % z reminder
2) x Addition result 5 % z
3) last y /=

*/

document.write("X : "+x+"<br>");
document.write("Y : "+y+"<br>");
document.write("Z : "+z+"<br><hr>");

x = 6, y = 14, z = 4;
z - x++ + y * 5;

/* 
1) x++ postfix increment
2) multiple y * 5
3) addition result x++ and result y * 5
4) Subtraction z - result

*/

document.write("X : "+x+"<br>");
document.write("Y : "+y+"<br>");
document.write("Z : "+z+"<br><hr>");

x = 6, y = 14, z = 4;
x = y - x++ * z;

/* 
1) x++ postfix increment
2) Multiple result x++ and z
3) Subtraction y - result 
4) last x = result

*/

document.write("X : "+x+"<br>");
document.write("Y : "+y+"<br>");
document.write("Z : "+z+"<br><hr>");