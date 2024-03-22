function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return "This one is on me!";
  } else if (ride >= 401 && ride <= 2000) {
    return "That will be twenty bucks.";
  } else if (ride > 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (ride >= 2501) {
    return scuberGreetingForFeet();
  }
}

function ternaryCheckCity(_NYC) {
  return "Ok, sounds good.";
}

function switchOnCharmFromTip(_generous) {
  return "Thank you so much.";
}
