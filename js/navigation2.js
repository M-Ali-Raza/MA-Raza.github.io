for(var i=0,il=color.length;i<il;i++){
    color[i].addEventListener('click',(ev)=>{
        menu2.style.transition='all 0.5s linear 0s';
        navbar2.style.transition='width 0.5s linear 0.5s';
        burger.innerHTML='Menu';
        navbar2.style.width='0';
        background2.style.transition='all 0.5s linear 0.5s';
        background2.style.opacity='0';
        background2.style.zIndex='0';
        if(ev.currentTarget.id=='home2'){
            home2.style.backgroundColor='white';
            home2.style.color='#262674';
            home2.style.height='66px';
            home2.style.width='66px';
            page_title2.innerHTML="Home";
            menu2.style.transform='rotate(0deg)';
            page1.style.width='75vw';
            for(var i=0, il= notpage1.length;i<il;i++){
                notpage1[i].style.width='0';
            }
            for(var i =0, il = rotate.length;i<il;i++){
                rotate[i].style.transform='rotate(0deg)';
            }
            for(var i=0,il=notHome2.length;i<il;i++){
                notHome2[i].style.backgroundColor='#3c3c89';
                notHome2[i].style.color='white';
                notHome2[i].style.outline='none';
                notHome2[i].style.height='60px';
                notHome2[i].style.width='60px';
                if(notHome2[i].onmouseover!=true){
                    notHome2[i].addEventListener('mouseover',(e2)=>{
                        e2.currentTarget.style.outline='3px solid white';
                    });
                    notHome2[i].addEventListener('mouseleave',(e2)=>{
                        e2.currentTarget.style.outline='none';
                    });
                }
            }
        }
        else if(ev.currentTarget.id=='education2'){
            education2.style.backgroundColor='white';
            education2.style.color='#262674';
            education2.style.height='66px';
            education2.style.width='66px';
            page_title2.innerHTML="Education";
            menu2.style.transform='rotate(60deg)';
            page2.style.width='75vw';
            for(var i=0, il= notpage2.length;i<il;i++){
                notpage2[i].style.width='0';
            }
            for(var i =0, il = rotate.length;i<il;i++){
                rotate[i].style.transform='rotate(-60deg)';
            }
            for(var i=0,il=notedu2.length;i<il;i++){
                notedu2[i].style.backgroundColor='#3c3c89';
                notedu2[i].style.color='white';
                notedu2[i].style.outline='none';
                notedu2[i].style.height='60px';
                notedu2[i].style.width='60px';
                if(notedu2[i].onmouseover!=true){
                    notedu2[i].addEventListener('mouseover',(e2)=>{
                        e2.currentTarget.style.outline='3px solid white';
                    });
                    notedu2[i].addEventListener('mouseleave',(e2)=>{
                        e2.currentTarget.style.outline='none';
                    });
                }
            }
        }
        else if(ev.currentTarget.id=='skills2'){
            skills2.style.backgroundColor='white';
            skills2.style.color='#262674';
            skills2.style.height='66px';
            skills2.style.width='66px';
            page_title2.innerHTML="Skills";
            menu2.style.transform='rotate(120deg)';
            page3.style.width='75vw';
            for(var i=0, il= notpage3.length;i<il;i++){
                notpage3[i].style.width='0';
            }
            for(var i =0, il = rotate.length;i<il;i++){
                rotate[i].style.transform='rotate(-120deg)';
            }
            for(var i=0,il=noskills2.length;i<il;i++){
                noskills2[i].style.backgroundColor='#3c3c89';
                noskills2[i].style.color='white';
                noskills2[i].style.outline='none';
                noskills2[i].style.height='60px';
                noskills2[i].style.width='60px';
                if(noskills2[i].onmouseover!=true){
                    noskills2[i].addEventListener('mouseover',(e2)=>{
                        e2.currentTarget.style.outline='3px solid white';
                    });
                    noskills2[i].addEventListener('mouseleave',(e2)=>{
                        e2.currentTarget.style.outline='none';
                    });
                }
            }
        }
        else if(ev.currentTarget.id=='portfolio2'){
            portfolio2.style.backgroundColor='white';
            portfolio2.style.color='#262674';
            portfolio2.style.height='66px';
            portfolio2.style.width='66px';
            page_title2.innerHTML="Portfolio";
            menu2.style.transform='rotate(180deg)';
            page4.style.width='75vw';
            for(var i=0, il= notpage4.length;i<il;i++){
                notpage4[i].style.width='0';
            }
            for(var i =0, il = rotate.length;i<il;i++){
                rotate[i].style.transform='rotate(-180deg)';
            }
            for(var i=0,il=noportfolio2.length;i<il;i++){
                noportfolio2[i].style.backgroundColor='#3c3c89';
                noportfolio2[i].style.color='white';
                noportfolio2[i].style.outline='none';
                noportfolio2[i].style.height='60px';
                noportfolio2[i].style.width='60px';
                if(noportfolio2[i].onmouseover!=true){
                    noportfolio2[i].addEventListener('mouseover',(e2)=>{
                        e2.currentTarget.style.outline='3px solid white';
                    });
                    noportfolio2[i].addEventListener('mouseleave',(e2)=>{
                        e2.currentTarget.style.outline='none';
                    });
                }
            }
        }
        else if(ev.currentTarget.id=='services2'){
            services2.style.backgroundColor='white';
            services2.style.color='#262674';
            services2.style.height='66px';
            services2.style.width='66px';
            page_title2.innerHTML="Services";
            menu2.style.transform='rotate(-120deg)';
            page5.style.width='75vw';
            for(var i=0, il= notpage5.length;i<il;i++){
                notpage5[i].style.width='0';
            }
            for(var i =0, il = rotate.length;i<il;i++){
                rotate[i].style.transform='rotate(120deg)';
            }
            for(var i=0,il=noservices2.length;i<il;i++){
                noservices2[i].style.backgroundColor='#3c3c89';
                noservices2[i].style.color='white';
                noservices2[i].style.outline='none';
                noservices2[i].style.height='60px';
                noservices2[i].style.width='60px';
                if(noservices2[i].onmouseover!=true){
                    noservices2[i].addEventListener('mouseover',(e2)=>{
                        e2.currentTarget.style.outline='3px solid white';
                    });
                    noservices2[i].addEventListener('mouseleave',(e2)=>{
                        e2.currentTarget.style.outline='none';
                    });
                }
            }
        }
        else if(ev.currentTarget.id=='contact2'){
            contact2.style.backgroundColor='white';
            contact2.style.color='#262674';
            contact2.style.height='66px';
            contact2.style.width='66px';
            page_title2.innerHTML="Contact";
            menu2.style.transform='rotate(-60deg)';
            page6.style.width='75vw';
            for(var i=0, il= notpage6.length;i<il;i++){
                notpage6[i].style.width='0';
            }
            for(var i =0, il = rotate.length;i<il;i++){
                rotate[i].style.transform='rotate(60deg)';
            }
            for(var i=0,il=nocontact2.length;i<il;i++){
                nocontact2[i].style.backgroundColor='#3c3c89';
                nocontact2[i].style.color='white';
                nocontact2[i].style.outline='none';
                nocontact2[i].style.height='60px';
                nocontact2[i].style.width='60px';
                if(nocontact2[i].onmouseover!=true){
                    nocontact2[i].addEventListener('mouseover',(e2)=>{
                        e2.currentTarget.style.outline='3px solid white';
                    });
                    nocontact2[i].addEventListener('mouseleave',(e2)=>{
                        e2.currentTarget.style.outline='none';
                    });
                }
            }
        }
    });
}