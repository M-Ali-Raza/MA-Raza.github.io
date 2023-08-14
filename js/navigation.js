var menu=document.querySelector('#menu');
var menu2=document.querySelector('#menu2');
var rotate=document.querySelectorAll('.rotate');
var color=document.querySelectorAll('.color');
var page_title=document.querySelector('#page-title');
var home=document.querySelector('#home');
var notHome=document.querySelectorAll('.color:not(#home)');
var education=document.querySelector('#education');
var notedu=document.querySelectorAll('.color:not(#education)');
var skills=document.querySelector('#skills');
var noskills=document.querySelectorAll('.color:not(#skills)');
var portfolio=document.querySelector('#portfolio');
var noportfolio=document.querySelectorAll('.color:not(#portfolio)');
var services=document.querySelector('#services');
var noservices=document.querySelectorAll('.color:not(#services)');
var contact=document.querySelector('#contact');
var nocontact=document.querySelectorAll('.color:not(#contact)');
var page_title2=document.querySelector('#page-title2');
var home2=document.querySelector('#home2');
var notHome2=document.querySelectorAll('.color:not(#home2)');
var education2=document.querySelector('#education2');
var notedu2=document.querySelectorAll('.color:not(#education2)');
var skills2=document.querySelector('#skills2');
var noskills2=document.querySelectorAll('.color:not(#skills2)');
var portfolio2=document.querySelector('#portfolio2');
var noportfolio2=document.querySelectorAll('.color:not(#portfolio2)');
var services2=document.querySelector('#services2');
var noservices2=document.querySelectorAll('.color:not(#services2)');
var contact2=document.querySelector('#contact2');
var nocontact2=document.querySelectorAll('.color:not(#contact2)');
var page1=document.querySelector('.page1');
var notpage1=document.querySelectorAll('.page:not(.page1)');
var page2=document.querySelector('.page2');
var notpage2=document.querySelectorAll('.page:not(.page2)');
var page3=document.querySelector('.page3');
var notpage3=document.querySelectorAll('.page:not(.page3)');
var page4=document.querySelector('.page4');
var notpage4=document.querySelectorAll('.page:not(.page4)');
var page5=document.querySelector('.page5');
var notpage5=document.querySelectorAll('.page:not(.page5)');
var page6=document.querySelector('.page6');
var notpage6=document.querySelectorAll('.page:not(.page6)');
var pageName=document.querySelectorAll('.pageName');
var imgframe=document.querySelector('.frame');
var real1=document.querySelector('.real1');
var real2=document.querySelector('.real2');
var real3=document.querySelector('.real3');
var real4=document.querySelector('.real4');
var real5=document.querySelector('.real5');
var real6=document.querySelector('.real6');
var real7=document.querySelector('.real7');
for(var i=0,il=color.length;i<il;i++){
    color[i].addEventListener('click',(ev)=>{
        menu.style.transition='all 0.5s linear 0s';
        for(var i =0, il = rotate.length;i<il;i++){
            rotate[i].style.transition='transform 0.5s linear 0s';
        }
        ev.currentTarget.style.outline='none';
        ev.currentTarget.addEventListener('mouseover',(e)=>{
            e.currentTarget.style.outline='none';
        }); 
        let id=null;
        let top=-90;
        clearInterval(id);
        id=setInterval(frame,5);
        function frame(){
            if(top==-5){
                clearInterval(id);
            }
            else{
                top++;
                for(i=0,il=pageName.length;i<il;i++){
                    pageName[i].style.top=top+'px';
                }
            }
        }
        let id2=null;
        let height=0;
        clearInterval(id2);
        id2=setInterval(frame2,7);
        function frame2(){
            if(height==67){
                clearInterval(id2);
            }
            else{
                height++;
                imgframe.style.height=height+'%';
            }
        }
        let id3=null;
        let width=0;
        clearInterval(id3);
        id3=setInterval(frame3,5);
        function frame3(){
            if(width==60){
                clearInterval(id3);
            }
            else{
                width++;
                real1.style.width=width+'%';
            }
        }
        let id4=null;
        let width2=0;
        clearInterval(id4);
        id3=setInterval(frame4,5);
        function frame4(){
            if(width2==50){
                clearInterval(id4);
            }
            else{
                width2++;
                real2.style.width=width2+'%';
            }
        }
        let id5=null;
        let width3=0;
        clearInterval(id5);
        id3=setInterval(frame5,5);
        function frame5(){
            if(width3==40){
                clearInterval(id5);
            }
            else{
                width3++;
                real3.style.width=width3+'%';
                real4.style.width=width3+'%';
                real5.style.width=width3+'%';
            }
        }
        let id6=null;
        let width4=0;
        clearInterval(id6);
        id6=setInterval(frame6,5);
        function frame6(){
            if(width4==30){
                clearInterval(id6);
            }
            else{
                width4++;
                real6.style.width=width4+'%';
                real7.style.width=width4+'%';
            }
        }
        if(ev.currentTarget.id=='home'){
            home.style.backgroundColor='white';
            home.style.color='#262674';
            home.style.height='66px';
            home.style.width='66px';
            page_title.innerHTML="Home";
            menu.style.transform='rotate(0deg)';
            page1.style.width='75vw';
            for(var i=0, il= notpage1.length;i<il;i++){
                notpage1[i].style.width='0';
            }
            for(var i =0, il = rotate.length;i<il;i++){
                rotate[i].style.transform='rotate(0deg)';
            }
            for(var i=0,il=notHome.length;i<il;i++){
                notHome[i].style.backgroundColor='#3c3c89';
                notHome[i].style.color='white';
                notHome[i].style.outline='none';
                notHome[i].style.height='60px';
                notHome[i].style.width='60px';
                if(notHome[i].onmouseover!=true){
                    notHome[i].addEventListener('mouseover',(e2)=>{
                        e2.currentTarget.style.outline='3px solid white';
                    });
                    notHome[i].addEventListener('mouseleave',(e2)=>{
                        e2.currentTarget.style.outline='none';
                    });
                }
            }
        }
        else if(ev.currentTarget.id=='education'){
            education.style.backgroundColor='white';
            education.style.color='#262674';
            education.style.height='66px';
            education.style.width='66px';
            page_title.innerHTML="Education";
            menu.style.transform='rotate(60deg)';
            page2.style.width='75vw';
            for(var i=0, il= notpage2.length;i<il;i++){
                notpage2[i].style.width='0';
            }
            for(var i =0, il = rotate.length;i<il;i++){
                rotate[i].style.transform='rotate(-60deg)';
            }
            for(var i=0,il=notedu.length;i<il;i++){
                notedu[i].style.backgroundColor='#3c3c89';
                notedu[i].style.color='white';
                notedu[i].style.outline='none';
                notedu[i].style.height='60px';
                notedu[i].style.width='60px';
                if(notedu[i].onmouseover!=true){
                    notedu[i].addEventListener('mouseover',(e2)=>{
                        e2.currentTarget.style.outline='3px solid white';
                    });
                    notedu[i].addEventListener('mouseleave',(e2)=>{
                        e2.currentTarget.style.outline='none';
                    });
                }
            }
        }
        else if(ev.currentTarget.id=='skills'){
            skills.style.backgroundColor='white';
            skills.style.color='#262674';
            skills.style.height='66px';
            skills.style.width='66px';
            page_title.innerHTML="Skills";
            menu.style.transform='rotate(120deg)';
            page3.style.width='75vw';
            for(var i=0, il= notpage3.length;i<il;i++){
                notpage3[i].style.width='0';
            }
            for(var i =0, il = rotate.length;i<il;i++){
                rotate[i].style.transform='rotate(-120deg)';
            }
            for(var i=0,il=noskills.length;i<il;i++){
                noskills[i].style.backgroundColor='#3c3c89';
                noskills[i].style.color='white';
                noskills[i].style.outline='none';
                noskills[i].style.height='60px';
                noskills[i].style.width='60px';
                if(noskills[i].onmouseover!=true){
                    noskills[i].addEventListener('mouseover',(e2)=>{
                        e2.currentTarget.style.outline='3px solid white';
                    });
                    noskills[i].addEventListener('mouseleave',(e2)=>{
                        e2.currentTarget.style.outline='none';
                    });
                }
            }
        }
        else if(ev.currentTarget.id=='portfolio'){
            portfolio.style.backgroundColor='white';
            portfolio.style.color='#262674';
            portfolio.style.height='66px';
            portfolio.style.width='66px';
            page_title.innerHTML="Portfolio";
            menu.style.transform='rotate(180deg)';
            page4.style.width='75vw';
            for(var i=0, il= notpage4.length;i<il;i++){
                notpage4[i].style.width='0';
            }
            for(var i =0, il = rotate.length;i<il;i++){
                rotate[i].style.transform='rotate(-180deg)';
            }
            for(var i=0,il=noportfolio.length;i<il;i++){
                noportfolio[i].style.backgroundColor='#3c3c89';
                noportfolio[i].style.color='white';
                noportfolio[i].style.outline='none';
                noportfolio[i].style.height='60px';
                noportfolio[i].style.width='60px';
                if(noportfolio[i].onmouseover!=true){
                    noportfolio[i].addEventListener('mouseover',(e2)=>{
                        e2.currentTarget.style.outline='3px solid white';
                    });
                    noportfolio[i].addEventListener('mouseleave',(e2)=>{
                        e2.currentTarget.style.outline='none';
                    });
                }
            }
        }
        else if(ev.currentTarget.id=='services'){
            services.style.backgroundColor='white';
            services.style.color='#262674';
            services.style.height='66px';
            services.style.width='66px';
            page_title.innerHTML="Services";
            menu.style.transform='rotate(-120deg)';
            page5.style.width='75vw';
            for(var i=0, il= notpage5.length;i<il;i++){
                notpage5[i].style.width='0';
            }
            for(var i =0, il = rotate.length;i<il;i++){
                rotate[i].style.transform='rotate(120deg)';
            }
            for(var i=0,il=noservices.length;i<il;i++){
                noservices[i].style.backgroundColor='#3c3c89';
                noservices[i].style.color='white';
                noservices[i].style.outline='none';
                noservices[i].style.height='60px';
                noservices[i].style.width='60px';
                if(noservices[i].onmouseover!=true){
                    noservices[i].addEventListener('mouseover',(e2)=>{
                        e2.currentTarget.style.outline='3px solid white';
                    });
                    noservices[i].addEventListener('mouseleave',(e2)=>{
                        e2.currentTarget.style.outline='none';
                    });
                }
            }
        }
        else if(ev.currentTarget.id=='contact'){
            contact.style.backgroundColor='white';
            contact.style.color='#262674';
            contact.style.height='66px';
            contact.style.width='66px';
            page_title.innerHTML="Contact";
            menu.style.transform='rotate(-60deg)';
            page6.style.width='75vw';
            for(var i=0, il= notpage6.length;i<il;i++){
                notpage6[i].style.width='0';
            }
            for(var i =0, il = rotate.length;i<il;i++){
                rotate[i].style.transform='rotate(60deg)';
            }
            for(var i=0,il=nocontact.length;i<il;i++){
                nocontact[i].style.backgroundColor='#3c3c89';
                nocontact[i].style.color='white';
                nocontact[i].style.outline='none';
                nocontact[i].style.height='60px';
                nocontact[i].style.width='60px';
                if(nocontact[i].onmouseover!=true){
                    nocontact[i].addEventListener('mouseover',(e2)=>{
                        e2.currentTarget.style.outline='3px solid white';
                    });
                    nocontact[i].addEventListener('mouseleave',(e2)=>{
                        e2.currentTarget.style.outline='none';
                    });
                }
            }
        }
    });
}