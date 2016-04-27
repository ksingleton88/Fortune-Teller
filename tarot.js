function btnGetFortune(){
	var f = Math.floor(Math.random()*11);
	var fortune;
		if(f==0) fortune = "Something you lost will soon turn up.";
		if(f==1) fortune = "Love is for the Lucky and the Brave.";
		if(f==2) fortune = "Fame and Fortune will soon be yours.";
		if(f==3) fortune = "You will live a long, happy life.";
		if(f==4) fortune = "You will be invited to an exciting event.";
		if(f==5) fortune = "Sun always shines after a downpour.";
		if(f==6) fortune = "The one you love is closer than you think.";
		if(f==7) fortune = "You will enjoy good health.";
		if(f==8) fortune = "Difficult roads often lead to beautiful destinations.";
		if(f==9) fortune = "We must take adventures to order to know where we truly belong.";
		if(f==10) fortune = "Stop following others and create your own path.";
		if(f==11) fortune = "Take a hike.";

document.getElementById('txtFortune').innerHTML=fortune;
}