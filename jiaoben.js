let dangqian=0;
function bangding(){
    const xuanxiang=document.querySelectorAll(".xuan");
    console.log(xuanxiang.length);
    xuanxiang.forEach(function(button){
        button.onclick=function(){
            answerData.push(button.innerText);
            dangqian++;
            if(dangqian >= timu.length){
                console.log("答题结束");
                let userData={
                    score:0,
                    result:"测试完成",
                    time:new Date().toLocaleDateString()
                };
                testData.push(userData);
                console.log(testData);
                console.log(answerData);
                
                let A=0;
                let B=0;
                let C=0;
                let D=0;
                answerData.forEach(function(item){
                    if(item.startsWith("A")){
                        A++;
                    }
                    if(item.startsWith("B")){
                        B++;
                    }
                    if(item.startsWith("C")){
                        C++;
                    }
                    if(item.startsWith("D")){
                        D++;
                    }
                });
                alert("答题完成！");
                localStorage.setItem("A",A);
                localStorage.setItem("B",B);
                localStorage.setItem("C",C);
                localStorage.setItem("D",D);
                let result=" ";
                if(A>=B && A>=C && A>=D){
                    result="主动热情型";
                }
                else if(B>=A && B>=C && B>=D){
                    result="温柔陪伴型";
                }
                else if(C>=A && C>=B && C>+D){
                    result="理性分析型";
                }
                else{
                    result="自由随性型";
                }
                localStorage.setItem("result",result);
                window.location.href="jieguo.html";
                return;
            }
            document.querySelector("#wenti").innerHTML="第"+(dangqian+1)+"题："+timu[dangqian].wenti;

            let xuan=" ";
            timu[dangqian].xuanxiang.forEach(function(item,index){
                xuan+=`<button class="xuan">${String.fromCharCode(65+index)}.${item}</button>`;
            });
            document.querySelector("#xuanxiang").innerHTML=xuan;
            bangding();
            
        }
    });
}
const kaishi = document.querySelector("#kaishi")
kaishi.onclick=function(){
    document.querySelector("#wenti").innerHTML="第"+(dangqian+1)+"题"+timu[dangqian].wenti;
    let xuan = " ";
    timu[dangqian].xuanxiang.forEach(function(item,index){
        xuan+=`<button class="xuan">${String.fromCharCode(65+index)}.${item}</button>`;
    });
    document.querySelector("#xuanxiang").innerHTML=xuan;
    kaishi.style.display="none";
    bangding();
    
}