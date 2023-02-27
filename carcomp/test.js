now = new Date();
hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
document.write("<h6>");
document.write(hours + ":"mins + ":" + secs);
document.write("</h6>");
document.write("<p>");
if(hours<10) document.write("goodmorning");
else if(hours>14 && hours <=17) document.write("Good Afternoon");
else if(hours >17 && hours <=22 )document.write("Good evening! its past working hours");
else("Good day!");
document.write("</p>")