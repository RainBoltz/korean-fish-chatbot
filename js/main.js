
// replies
REPLIES = {
    '你是誰':[
        'Korean Fish desu.',
        'Fish薯叔喔啾咪>_O'
    ],
    '你好':[
        '你好！',
        'Fish薯叔說：你好～。嘻嘻嘻嘻。'
    ],
    '要什麼':[
        '當然是要發財啊！',
        '要發財。謝謝。',
        '我們都是要發財的，高雄發大財！',
        '發財、發財、發財！',
        '高雄發財需要做的事情。'
        ],
    '做什麼':[
        '做高雄需要我來做的事情。',
        '當然是高雄要做什麼，我就做什麼。',
        '做會讓高雄發大財的事情。'
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
async function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}


// interface render functions
function user_send_msg(msg){
    let current_datetime = new Date();
    current_time = current_datetime.toString().split(" ")[4]
    let html_code = `
        <div class="container darker">
            <img src="img/user.jpg" alt="User Avatar" class="right" style="width:100%;">
            <p>` + msg + `</p>
            <span class="time-left">` + current_time + `</span>
        </div>
    `;
    
    document.getElementById('last_elem').insertAdjacentHTML('beforebegin', html_code);
    window.scrollTo(0,document.body.scrollHeight);
}
function fish_send_msg(msg){
    let current_datetime = new Date();
    current_time = current_datetime.toString().split(" ")[4]
    let html_code = `
        <div class="container">
            <img src="img/fish.jpg" alt="Fish Avatar" style="width:100%;">
            <p>` + msg + `</p>
            <span class="time-right">` + current_time + `</span>
        </div>
    `;
    
    document.getElementById('last_elem').insertAdjacentHTML('beforebegin', html_code);
    window.scrollTo(0,document.body.scrollHeight);
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
async function update_msgbox(){
    let msg = document.getElementById('user-text-msg').value;
    document.getElementById('user-text-msg').value = "";
    if(msg != ""){
        user_send_msg(msg);
        let reply = fish_reply(msg);
        await sleep(1800);
        fish_send_msg(reply);
    }
}
window.onload = async function() {
    let inp = document.getElementById("user-text-msg");
    inp.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit_btn").click();
      }
    });
    
    await sleep(1500);
    fish_send_msg('希望大家能齊心一起抓出假韓粉');
    await sleep(1000);
    fish_send_msg('沒有愛與包容，誰又贏得了2020？');
    
};





















