const imageFrame = {
    props: ['url'],
    template: `<div class="image-frame">
        <!-- image container -->
        <div class="columns is-centered">
            <div class="column">
                <b-image src="https://picsum.photos/600/400" ratio="6by4"></b-image>
            </div>
        </div>

        <!-- button container -->
        <div class="columns is-centered">
            <div class="column is-narrow">
                <b-button type="is-primary" expanded>Random GIF</b-button>
            </div>
        </div>

    </div>`
}

export default imageFrame 