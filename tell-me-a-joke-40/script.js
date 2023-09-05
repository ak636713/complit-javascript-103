const jokes = ["You know there's no official training for trash collectors? They just pick things up as they go along.","Why is England the wettest country? Because the queen reigned there for decades.", "When you die, what part of the body dies last? The pupils… they dilate.", "What do the movies Titanic and The Sixth Sense have in common? Icy dead people.", "What's the difference between a golfer and a skydiver? A golfer goes whack darn and a skydiver goes darn whack.","A friend of mine went bald years ago but still cjokesies around an old comb. He just can't part with it.", "I want to die peacefully in my sleep like my grandfather did. Not screaming in terror like the passengers in his car.", "I want to die peacefully in my sleep like my grandfather did. Not screaming in terror like the passengers in his car.", "What do you call a woman who sets fire to all her bills? Bernadette.", "I was kidnapped by mimes once. They did unspeakable things to me.", "I saw Usain Bolt sprinting around the track shouting, Why did the chicken cross the road? It was a running joke.", "What did the full glass say to the empty glass? You look drunk.","Is it ignorance or apathy that's destroying the world today? I don't know, and I don't care."]

const container = document.querySelector('.card-text'); // Use querySelector to select the first element with the class 'card-text'
const btn = document.getElementById('button');

const joke = () => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  container.innerHTML = randomJoke; // Insert the random joke into the container
};

btn.onclick = joke; // Assign the joke function to the button's click event
