const dolphinsTeamAvg = (96+108+89) /3;
const koalasTeamAvg = (88+91+110) /3;

if((dolphinsTeamAvg > koalasTeamAvg) && (dolphinsTeamAvg >= 100) ){
    console.log("team Dolphin is the winner");
}else if((koalasTeamAvg > dolphinsTeamAvg) && (koalasTeamAvg >= 100)){
    console.log("team Koalas is the winner");
}else if((dolphinsTeamAvg === koalasTeamAvg) &&  (dolphinsTeamAvg >= 100) && (koalasTeamAvg >= 100)){
    console.log("both teams are winners");
}else{
    console.log("No one wins the trophy");
}