
// constants
REPLIES = {
    '你是誰':[
        'Korean Fish desu.',
        'Fish薯叔喔啾咪>_O'
    ],
    '要什麼':[
        '當然是要發財啊！',
        '要發財。謝謝。',
        '我們都是要發財的，高雄發大財！',
        '發財、發財、發財！'
        ],
    '做什麼':[
        '做高雄需要我來做的事情。',
        '當然是高雄要做什麼，我就做什麼。',
        '跟高雄人做愛做的事。'
    ],
    '怎麼做':[
        '總目標就是高雄要發財，我們所做的一切都是高雄要發財。謝謝。',
        '讓高雄發財，就可以做到。'
    ]
}
RANDOM_REPLY = [
        '好啦別再說了，快來韓薯叔這邊！',
        '我只能說，我一心一意只想要讓高雄發財，其他沒想太多，謝謝。',
        '喔。',
        '聽不懂你在說啥。我只知道高雄發大財。'
    ]


// utility functions
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}


// main functions
function fish_reply(msg){
    for(let k in REPLIES){
        if(msg.includes(k)){
            return choose(REPLIES[k]);
        }
    }
    return choose(RANDOM_REPLY);
}






















