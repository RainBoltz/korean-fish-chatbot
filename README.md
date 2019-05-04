# korean-fish-chatbot

**_快來韓薯叔這邊！_**  
體驗網址：https://rainboltz.github.io/korean-fish-chatbot/

## 扛不住獨孤九劍的無心

> 獨孤九劍的要旨在於一個「悟」字，當通曉劍意後則無所施而不可。便是全部變化盡數忘記，也不相干。忘記得越乾淨徹底，越不受原來劍法的拘束。而九劍各式乃以此令使劍者領悟劍意，練到一定程度就是真正的無招，達到劍術最高的境界了。

<p align="center">
    <img src="https://github.com/RainBoltz/korean-fish-chatbot/blob/master/%E9%BB%83%E6%8D%B7%E7%BF%BB%E7%99%BD%E7%9C%BC.jpg" width="250" height="auto" /><br>
    <i>在質詢後期，<a href="https://www.facebook.com/FongshanHuangjie/" target="_blank">黃捷</a>已經白眼翻到不要不要的</i>
</p>

## 來韓薯叔這邊，嚐嚐無招勝有招的威力！

_實際對話_：
```
議員：韓市長，自經區，你具體上要什麼？
韓國瑜：當然是高雄要什麼
議員：所以高雄要什麼？
韓國瑜：高雄要發財呀
議員：天啊，市長，我們都知道要發財，但自經區具體上你要做什麼？
韓國瑜：議員，總目標就是高雄要發財，我們所做的一切都是高雄要發財。這個自經區是其中之一，謝謝
```  
<h3>歡迎大家自由發揮！<a href="https://rainboltz.github.io/korean-fish-chatbot/" target="_blank">(點我體驗)</a><h3><br>
<p align="center">
    <img src="https://github.com/RainBoltz/korean-fish-chatbot/blob/master/demo.png" width="80%" height="auto" />
</p>

## 答覆的部分...

其實在 [main.js](https://github.com/RainBoltz/korean-fish-chatbot/blob/master/js/main.js) 裡面而已：
```javascript
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
```