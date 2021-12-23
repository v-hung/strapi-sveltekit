export const formatTime = (t) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let time = new Date(t)

  let day = time.getDate()
  let month = months[time.getMonth()]
  var year = time.getFullYear();

  return (day < 10) ? `0${day} ` : `${day} ` + month + ', ' + year;
}
