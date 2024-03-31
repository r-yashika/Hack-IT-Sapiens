class Movie {
    constructor() {
        this.scenes = [];
        this.renderedFilePath = "C:\\Users\\cw\\Desktop\\hackathon\\test.mp4"; 
        this.apiKey = 'HkYeJcg8qrMZHYkO5ZoA9kbS3YyY0Vd3WTyBSWA7'; // Corrected: API key should be a string
        this.properties = {};
    }

    setAPIKey(apiKey) {
        this.apiKey = apiKey;
    }

    set(key, value) {
        this.properties[key] = value;
    }

    addScene(scene) {
        this.scenes.push(scene);
    }

    render() {
        // Generate the movie by rendering each scene
        // For simplicity, we're just logging the scene information here
        for (let i = 0; i < this.scenes.length; i++) {
            console.log(`Rendering Scene ${i + 1}:`, this.scenes[i]);
        }

        // Simulate rendering process (async operation)
        return new Promise(resolve => {
            setTimeout(() => {
                // Set the rendered file path (dummy path for demonstration)
                this.renderedFilePath ="C:\\Users\\cw\\Desktop\\hackathon\\test.mp4";
                console.log('Movie rendering completed.');
                resolve();
            }, 2000);
        });
    }
}

// Export the Movie class if you're using it in another module
module.exports = Movie;

// Define the Scene class
class Scene {
    constructor() {
        this.elements = [];
    }

    set(key, value) {
        this[key] = value;
    }

    addElement(element) {
        this.elements.push(element);
    }
}

// Usage
let movie = new Movie();
movie.setAPIKey('HkYeJcg8qrMZHYkO5ZoA9kbS3YyY0Vd3WTyBSWA7');
movie.set("resolution", "full-hd");
movie.set("quality", "high");

// Create the scenes of the movie

// Create SCENE 1
let scene1 = new Scene();
scene1.set("background-color", "#4392F1");
scene1.addElement({
    "type": "text",
    "text": "Hello world",
    "duration": 10
});
movie.addScene(scene1);

// Create SCENE 2
let scene2 = new Scene();
scene2.set("background-color", "#4392F1");
scene2.addElement({
    "type": "text",
    "text": "heyy",
    "duration": 10
});
movie.addScene(scene2);

// Create SCENE 3
let scene3 = new Scene();
scene3.set("background-color", "#4392F1");
scene3.addElement({
    "type": "text",
    "text": "How are you?",
    "duration": 10
});
movie.addScene(scene3);

// Finally, render the movie
movie.render().then(() => {
    console.log('Rendering completed.');
}).catch(error => {
    console.error('Error rendering movie:', error);
});
