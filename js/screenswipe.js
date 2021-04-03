var swipeCurrent = "screen_loading";
function swipe(target1ID,target2ID,Direction="random"){// swipes from a screen to a screen in the direction you say
    if(target1ID==target2ID){}else{
    var t1=document.getElementById(target1ID),
    t2=document.getElementById(target2ID),
    lst=document.querySelectorAll(".screen"),
    i=0,
    c1='',
    c2='';
    if(Direction!='up'&&Direction!='down'&&Direction!='left'&&Direction!='right'){Direction = ['up','down','left','right'][Math.floor(Math.random()*4)];}
    console.log(Direction);
    switch(Direction){
        case 'up':{c1='screenSwipeUpOut';c2='screenSwipeUpIn'}break;
        case 'down':{c1='screenSwipeDownOut';c2='screenSwipeDownIn'}break;
        case 'left':{c1='screenSwipeLeftOut';c2='screenSwipeLeftIn'}break;
        case 'right':{c1='screenSwipeRightOut';c2='screenSwipeRightIn'}break;
    }
    for(i=0;i<lst.length;i++){
        lst[i].preventDefault;
        lst[i].classList.remove("screenSwipeLeftIn");
        lst[i].classList.remove("screenSwipeLeftOut");
        lst[i].classList.remove("screenSwipeRightIn");
        lst[i].classList.remove("screenSwipeRightOut");
        lst[i].classList.remove("screenSwipeUpIn");
        lst[i].classList.remove("screenSwipeUpOut");
        lst[i].classList.remove("screenSwipeDownIn");
        lst[i].classList.remove("screenSwipeDownOut");
        lst[i].classList.add("pop");
        lst[i].style.zIndex=0;
    }
    t1.classList.remove("pop");
    t2.classList.remove("pop");
    t1.classList.add(c1);
    t2.classList.add(c2);
    t2.style.zIndex=1;
    swipeCurrent = t2.id;
    }
    //console.log("[]->",findScreen().id);
}
function swipeRandom(fromID){// swipes to a random screen from the screen you send
    var lst = document.querySelectorAll(".screen"),
    eft=['up','down','left','right'],
    r=Math.floor(Math.random()*lst.length),
    e=Math.floor(Math.random()*eft.length);
    while(String(fromID)==String(lst[r].id)){r=Math.floor(Math.random()*lst.length);}
    swipe(fromID,lst[r].id,eft[e]);
    //console.log("swipeRandom("+fromID+","+lst[r].id+","+eft[e]+")");
}

//console.log("screenswipe loaded");