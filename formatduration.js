function formatDuration(seconds) {
  const YEAR_IN_SECONDS = 31536000;
  const DAY_IN_SECONDS = 86400;
  const HOUR_IN_SECONDS = 3600;
  const MINUTE_IN_SECONDS = 60;

  if (seconds === 0) return "now"
  
  let duration = "";

  let years = Math.floor(seconds / YEAR_IN_SECONDS);
  seconds = seconds % YEAR_IN_SECONDS;
  let days = Math.floor(seconds / DAY_IN_SECONDS);
  seconds = seconds % DAY_IN_SECONDS;
  let hours = Math.floor(seconds / HOUR_IN_SECONDS);
  seconds = seconds % HOUR_IN_SECONDS;
  let minutes = Math.floor(seconds / MINUTE_IN_SECONDS);
  seconds = seconds % MINUTE_IN_SECONDS;
  
  if (years > 0) {
    duration += years + (years === 1 ? " year" : " years");
  }

  if (days > 0) {
    if (duration !== "" && (hours > 0 || minutes > 0 || seconds > 0)) {
      duration += ", ";
    } else if (duration !== "") {
      duration += " and ";
    }
    duration += days + (days === 1 ? " day" : " days");

  }


  if (hours > 0) {
    if (duration !== "" && (minutes > 0 || seconds > 0)) {
      duration += ", ";
    } else if (duration !== "") {
      duration += " and ";
    }
    duration += hours + (hours === 1 ? " hour" : " hours");
  }
  
  if (minutes > 0) {
    if (duration !== "" && seconds > 0) {
      duration += ", ";
    } else if (duration !== "") {
      duration += " and ";
    }
    duration += minutes + (minutes === 1 ? " minute" : " minutes");
  }

  if (seconds > 0) {
    if (duration !== "") {
      duration += " and ";
    }
    duration += seconds + (seconds === 1 ? " second" : " seconds");
  }

  return duration.trim();
}
