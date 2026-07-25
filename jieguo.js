let result = localStorage.getItem("result");

let fenxi = "";

if(result=="主动热情型"){
    fenxi = `
    <h2>主动热情型</h2>
    <p>
    你是一个喜欢主动探索和表达自己的人。
    面对新的机会，你通常愿意尝试并采取行动。
    </p>
    `;
}

else if(result=="温柔陪伴型"){
    fenxi = `
    <h2>温柔陪伴型</h2>
    <p>
    你重视人与人之间的关系，
    喜欢通过陪伴和关心表达自己的感情。
    </p>
    `;
}

else if(result=="理性分析型"){
    fenxi = `
    <h2>理性分析型</h2>
    <p>
    你习惯先思考和分析，再做决定，
    做事情比较有规划。
    </p>
    `;
}

else if(result=="自由随性型"){
    fenxi = `
    <h2>自由随性型</h2>
    <p>
    你追求自由和舒适，
    喜欢按照自己的节奏生活。
    </p>
    `;
}

else{
    fenxi = `
    <h2>暂无结果</h2>
    `;
}


document.querySelector("#jieguo").innerHTML = fenxi;