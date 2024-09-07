function submitPost() {
    // 입력된 글 가져오기
    const content = document.getElementById('postContent').value;

    if (content.trim() === '') {
        alert('글을 입력하세요!');
        return;
    }

    // 새로운 글을 표시할 div 생성
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.textContent = content;

    // 작성된 글을 posts div에 추가
    const postsDiv = document.getElementById('posts');
    postsDiv.appendChild(postDiv);

    // 입력창 비우기
    document.getElementById('postContent').value = '';
}