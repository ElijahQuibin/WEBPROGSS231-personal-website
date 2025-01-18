Vue.component('gallery-component', {
    template: `
        <div class="gallery-container">
            <div v-for="image in images" :key="image.id" class="gallery-item">
                <img :src="image.src" :alt="image.alt">
            </div>
        </div>
    `,
    data() {
        return {
            images: [
                { id: 1, src: 'pictures/one.jpg', alt: 'Picture 1' },
                { id: 2, src: 'pictures/two.webp', alt: 'Picture 2' },
                { id: 3, src: 'pictures/three.jpg', alt: 'Picture 3' },
                { id: 4, src: 'pictures/four.jpg', alt: 'Picture 4' },
                { id: 5, src: 'pictures/five.JPG', alt: 'Picture 5' }
            ]
        };
    }
});

Vue.component('guestbook-component', {
    template: `
        <div class="comment-section">
            <h2>Comment Section</h2>
            <form @submit.prevent="submitForm">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="name" required>
                </div>
                <div>
                    <label for="message">Message:</label>
                    <textarea id="message" v-model="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div v-if="submitted" class="guestbook-card">
                <h3>Thank you for your message!</h3>
                <p><strong>Name:</strong> {{ name }}</p>
                <p><strong>Message:</strong> {{ message }}</p>
            </div>
        </div>
    `,
    data() {
        return {
            name: '',
            message: '',
            submitted: false
        };
    },
    methods: {
        submitForm() {
            this.submitted = true;
        }
    }
});

new Vue({
    el: '#gallery-app'
});

new Vue({
    el: '#guestbook-app'
});
