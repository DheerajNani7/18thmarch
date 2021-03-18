function timeanddate(){
    let d=new Date();
    let t=d.toLocaleTimeString();
    setTimeout(t,1000);
    console.log(t);
}
timeanddate();