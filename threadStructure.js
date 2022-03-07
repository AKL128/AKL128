console.log(threads);
var container = document.querySelector('ol');
for (let thread of threads) {
    var html = `
    <div class="table-row">
        <div class="subjects">
            <a href="thread.html?${thread.id}">
            ${thread.title}
            <br> </a>
            <div class="bottom">
                <p class="timestamp">
                    ${new Date(thread.date).toLocaleString()}
                </p>
                <p class="comment-count">
                    ${thread.comments.length} comments
                </p>
            </div>

            <br>
            <span>Posted by <b><a href="">User</a></b> .</span>
        </div>
        <div class="replies">
            # replies <br>
        </div>
    </div>
    `
    container.insertAdjacentHTML('beforeend', html);
}
