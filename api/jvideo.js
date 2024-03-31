let movie = new Movie;
movie.setAPIKey(HkYeJcg8qrMZHYkO5ZoA9kbS3YyY0Vd3WTyBSWA7);
movie.set("resolution", "full-hd");
movie.set("quality", "high");

// Create the scenes of the movie

// Create SCENE 1
let scene1 = new Scene;
scene1.set("background-color", "#4392F1");
scene1.addElement({
	"type": "text",
	"text": "Hello world",
	"duration": 10
});
movie.addScene(scene1);

// Finally, render the movie
movie.render();