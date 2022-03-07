//Navbar

function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

var defaultThreads = [
    {
        id: 1,
        title: "Random Thread 1",
        author: "Anthony",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Joe",
                date: Date.now(),
                content: "Yo"
            },
            {
                author: "Keenin",
                date: Date.now(),
                content: "Hey Bud"
            }
        ]
    },
    {
        id: 2,
        title: "Random Thread 2",
        author: "Joe",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Anthony",
                date: Date.now(),
                content: "What's going on?"
            },
            {
                author: "Johnny",
                date: Date.now(),
                content: "IDK"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
