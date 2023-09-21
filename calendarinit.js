var events = [
// sondertermine
  {'Date': new Date(2023, 10, 24), 'Title': 'Brettspieltage Furtwangen', 'Link' : 'https://allevents.in/trossingen/52-schwarzw%C3%A4lder-spieletage/200025111542459', 'Info' : 'Ab: 16:00 Uhr - in der FHV-Furtwangen' , 'Classes' : 'specialeventday'},
  {'Date': new Date(2023, 10, 25), 'Title': 'Brettspieltage Furtwangen', 'Link' : 'https://allevents.in/trossingen/52-schwarzw%C3%A4lder-spieletage/200025111542459', 'Info' : 'Ganztags - in der FHV-Furtwangen' , 'Classes' : 'specialeventday'},
  {'Date': new Date(2023, 10, 26), 'Title': 'Brettspieltage Furtwangen', 'Link' : 'https://allevents.in/trossingen/52-schwarzw%C3%A4lder-spieletage/200025111542459', 'Info' : 'Bis: 16:00 Uhr - in der FHV-Furtwangen' , 'Classes' : 'specialeventday'},
 
  {'Date': new Date(2023, 10, 3), 'Title': 'Spielwiesen Augsburg', 'Link' : 'https://spielwiesn.de/sw', 'Info' : 'Vermutlich ab 14:00Uhr in Augsburg' , 'Classes' : 'specialeventday'},
 
 // reguläre Termine
  {'Date': new Date(2023,8,5), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,8,12), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr im Evangelischen Gemeindehaus'},
  {'Date': new Date(2023,8,19), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,8,26), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,9,3), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,9,10), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,9,17), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,9,24), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,9,31), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,10,7), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,10,14), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,10,21), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,10,28), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,11,5), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,11,12), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'},
  {'Date': new Date(2023,11,19), 'Title': 'W&ouml;chentlicher Spieletreff', 'Link' : 'https://ludite-kisslegg.de/home', 'Info' : '19:30Uhr - 23:00Uhr in Emmelhofen'}
];

var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);


