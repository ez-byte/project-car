now = new Date();
hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
document.write("<h2>");
document.write(hours +":" + mins +":" + secs);
document.write("</h2>");
document.write("<p>");
if(hours <10) document.write("Good Morning.");
else if(hours >=14 && hours <=17) document.write("Good Afternoon.");
else if(hours >17) document.write("Good Evening. It's past working,");
else document.write("Good Day");
document.write("</p>");