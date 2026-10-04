// Nature-Inspired Time-of-Day Atmosphere Engine
// Automatically pairs the portfolio's aesthetic with the natural cycle of the sun.

export function getNaturalAtmosphere(date = new Date()) {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  
  // Format 12-hour time string
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timeString = `${displayHour}:${displayMinutes} ${ampm}`;

  if (hour >= 5 && hour < 12) {
    return {
      id: 'morning',
      name: 'Morning Mist',
      badge: 'Morning Mist',
      icon: 'sunrise',
      symbol: '🌅',
      timeString,
      defaultTheme: 'light',
      greeting: 'Morning dew in Pune',
      description: 'Gentle sunrise, soft ivory earth & dewy greens',
      tagline: 'Sunlit morning hours'
    };
  } else if (hour >= 12 && hour < 18) {
    return {
      id: 'afternoon',
      name: 'Sunlit Canopy',
      badge: 'Sunlit Day',
      icon: 'sun',
      symbol: '☀️',
      timeString,
      defaultTheme: 'light',
      greeting: 'Sunlit afternoon',
      description: 'Crisp natural light, eucalyptus & golden warmth',
      tagline: 'Bright natural daylight'
    };
  } else if (hour >= 18 && hour < 21) {
    return {
      id: 'dusk',
      name: 'Golden Twilight',
      badge: 'Golden Dusk',
      icon: 'sunset',
      symbol: '🌇',
      timeString,
      defaultTheme: 'dark',
      greeting: 'Twilight in Pune',
      description: 'Amber embers, settling canopy & dusk serenity',
      tagline: 'Gentle dusk transition'
    };
  } else {
    return {
      id: 'night',
      name: 'Nocturnal Forest',
      badge: 'Night Canopy',
      icon: 'moon',
      symbol: '🌙',
      timeString,
      defaultTheme: 'dark',
      greeting: 'Nocturnal calm',
      description: 'Quiet obsidian pine, star-moss & firefly glow',
      tagline: 'Quiet nocturnal focus'
    };
  }
}
