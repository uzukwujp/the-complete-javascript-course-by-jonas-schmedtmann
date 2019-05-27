export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img) {
        const like = { id, title, author, img };
        this.likes.push(like);

        // Persist data in localstorage
        this.persistDate();
        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);

        // Persist data in localstorage
        this.persistDate();
        this.likes.splice(index, 1);
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    persistDate() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('likes'));

        // Restore likes from local storage.
        if (storage) this.likes = storage;
    }
}