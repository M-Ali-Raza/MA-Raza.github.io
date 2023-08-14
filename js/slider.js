let leftbtn=document.getElementById("left-btn");
let rightbtn=document.getElementById("right-btn1");
let topbtn=document.getElementById("up-btn");
let downbtn=document.getElementById("down-btn");
let arrowbtn=document.querySelectorAll(".arrow-btn");
let slide=document.querySelectorAll(".slide");
let slide2=document.querySelectorAll(".slide-ii");
let portSlider=document.querySelector(".port-slider");
let portSlider2=document.querySelector(".port-slider2");
let part=document.querySelectorAll(".part");
let part2=document.querySelectorAll(".part2");
let plus=-1027;
let minus=0;
let count;
for(let i=0,il=arrowbtn.length;i<il;i++){
    arrowbtn[i].addEventListener("click",(e)=>{
        if(e.currentTarget.id=="right-btn1"){
            for(let i=1,il=slide.length;i<=il;++i){
                document.getElementById("slide"+i).checked=true;
                portSlider.style.left=`-75vw`;
                leftbtn.style.display="flex";
                if(slide[i]==slide[il]){
                    rightbtn.style.display="none";
                }
            }
        }
        else if(e.currentTarget.id=="left-btn"){
            for(let i=slide.length,il=1;i>=il;--i){
                document.getElementById("slide"+i).checked=true;
                portSlider.style.left=`${minus}px`;
                rightbtn.style.display="flex";
                if(slide[i]==slide[il]){
                    leftbtn.style.display="none";
                }
            }
        }
        else if(e.currentTarget.id=="down-btn"){
            for(let i=1,il=slide2.length;i<=il;++i){
                document.getElementById("slide"+i+"-ii").checked=true;
                portSlider2.style.top=`-100%`;
                topbtn.style.display="flex";
                if(slide2[i]==slide2[il]){
                    downbtn.style.display="none";
                }
            }
        }
        else if(e.currentTarget.id=="up-btn"){
            for(let i=slide2.length,il=1;i>=il;--i){
                document.getElementById("slide"+i+"-ii").checked=true;
                portSlider2.style.top=`0`;
                downbtn.style.display="flex";
                if(slide2[i]==slide2[il]){
                    topbtn.style.display="none";
                }
            }
        }
    });
}