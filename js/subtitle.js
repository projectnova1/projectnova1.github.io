function getRandomGreeting() {
  var greetings = [
    "Made you look!",
    "Redbull gives you wings...",
    "Since 2025!",
    "As seen on TV!",
    "doot doot",
    "Cold as ice!",
    "Made in the US!",
    "Made by Project Nova!",
    "Running nova.exe",
    "WARNING: You may lose braincells if you proceed!",
    "Do you bite your ice cream?",
    "nova is a bozo",
    "Powered by 128 Gigs of RAM!",
    "I'm Slim Shady, yes, I'm the real Shady!",
    "You're a real jerk!",
    "w h a t",
    "what the dog doin?",
    "I'm gonna pop some tags",
    "Shoutout to 4chan!",
    "thx stackoverflow!",
    "are you a gaemer?",
    "It is time to get funky!",
    "Don't ask questions if you can't handle the answers!",
    "If you are using Microsoft Edge, you need a Shout out.",
    "Shoutout to 3kh0!",
    "Woo! /g/",
    "https://www.youtube.com/watch?v=Kf26oXG2eIY",
    "youtube.com/@Sambucha",
    "Trust me, I did not copy Minecraft with this",
    "Roblox? Cringe!",
    "Toss the Turtle is pretty fun",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
