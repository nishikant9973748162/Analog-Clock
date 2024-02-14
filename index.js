setInterval(() => {
	d = new Date();
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2;
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hours.style.transform = `rotate(${hr_rotation}deg)`;
	mins.style.transform = `rotate(${min_rotation}deg)`;
	secs.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
