#### Tech Talk 1: KPC
## Contents:
1. Intro
2. Tools
3. Story
4. Lessons


### Intro:
KPC is an Android App, used to interact with the Facebook Group of [Kashmir Photography Club](http://kashmirphotographyclub.com)

### Tools:
* [Android Studio & SDK](https://developer.android.com/studio/index.html) - Main Coding & Designing
* [Adobe Illustrator](http://www.adobe.com/in/products/illustrator.html) - For Vector Drawables (Icons etc)
* [Adobe Photoshop](http://www.adobe.com/in/products/photoshop.html) - For Graphic Assets
* Android Libraries, [details in Credits](http://hackesta.org/projects/kpc/credits.html)

### Story:
Mid-December 2016, my school was going to close for vacations. That week, I was thinking about what project should I work on in the vacations. I wanted to work with something new, to learn more. I decided to work with the [Facebook SDK for Android](https://developers.facebook.com/docs/android/) & [Graph API](https://developers.facebook.com/docs/graph-api). I started working with it, without a specfic app design in mind.

Initially, I learnt how to add Log-In with Facebook, viewing posts, posting new posts, etc. On the last day of school, I was discussing coding in Kashmir, and how some applications, mostly for Android got instant fame in the valley, as they were made for the people of Kashmir. I decided that I am going to work on atleast one project related to Kashmir.

Some days later, while working with the Facebook API, I started to use [Kashmir Photography Club's Facebook Group](https://www.facebook.com/groups/kashmir.photography/) as a data source, and fetch the posts, their comments, likes etc. It is then that it dawned onto me that I can make a photo viewer for [Kashmir Photography Club](http://kashmirphotographyclub.com), and hence I named it KPC Explorer.

[Kashmir Photography Club](http://kashmirphotographyclub.com), popularly known as KPC is a group of photography enthusiasts, mostly from Kashmir but includes members from outside Kashmir as well.
I had already made an app for [Kashmir Photography Club](http://kashmirphotographyclub.com) back in August 2015, an EXIF Reader for Windows, which was appreciated by the members, so I decided to make another one for them.

I wanted to make this project efficiently, so I planned to complete most of the coding by the end of January, and then design the app in February. By the end of January, most of the coding was complete, I had added the grid views for all photos and categories, full screen browser, viewing/adding comments/replies, posting photos, one-click EXIF Info & adding predefined captions. Another week of coding and the app would work like I had planned it to.
While coding, the only thing I faced problems in were posting likes, as they weren't possible, and showing upload progress, which was fixed after the 2nd Beta Release.

I started designing the app in the second week of Febraury 2017. The design was based on [500px Android App](https://play.google.com/store/apps/details?id=com.fivehundredpx.viewer&hl=en), and I tried to follow [Material Design Guidelines](https://material.io/).
It took me around two weeks to design the app, which was by now ready for showing to others.

One of the first persons, to whom I showed the app, was Sajad Rafeeq, an admin of [KPC](http://kashmirphotographyclub.com). I had also contacted him at the time of release of Exif Reader, and when the last message in my Facebook Chat with him was regarding the release of Exif Reader. A day after I messaged him, he saw the app, liked the app and appreciated my efforts. He also gave some ideas for the app, which included favoriting, downloading & sharing the photos. I added those in a few days, and then submitted the app for Facebook Review.

Every app that uses Facebook Account Log-in for uses like publishing new posts, need to be reviewed by Facebook. I had to create a tutorial video & make some changes, like redesigning the Post Photo layout, so as to tell the user that the post was going to be published by their Facebook account. It took a couple of days, and by the end of February, the app was ready to be shown to the public. I released a beta version of it, to make sure it worked perfectly.

I got a lot of apprecitaion, and some suggestions. The suggestions that I implemented were a Single-Photo View in the grid & text-only post capability. I tried to add the ability to add watermarks to photos before posting them, but didn't as it would either reduce the quality of photos, or use a lot of resources of the client device. I postponed that feature for some later release if I am able to find a better way to implement it.

 People also suggested to change the name of the app KPC Explorer, because it had more features than what the name reflects. It was renamed to KPC in the next release.

 Before releasing the app with new features, I tried to fix the bug of not showing the upload progress. After many tries, and mltiple variationso of code, following differet online tutorials, I was sure that it was a bug on Facebook's end, and so I submitted a bug report to Facebook. It took around a week and coding a sample app to demonstrate the bug, and Facebook started looking into it. At the end of March, a month after the first beta release, I released another beta with the new features. This release was mostly stable, but wasn't able to show upload progress.

Couple of days after the release, Facebook replied on the bug report, and gave a solution. The solution, was simple, and I should have tried that, but my trust on online tutorials proved to be a bit too much. I have fixed the bug, and the app is ready for a its release. Just waiting for a good moment to release it.

After the first beta release, I focused on promoting the app. Apart from my social accounts, I also participated in [Youth Speaks](http://fourseasonskashmir.com/events.html#youthspeaks), an initiative for the youth to speak up and be outspoken, organised by [Four Season's](http://fourseasonskashmir.com).

All through the developement process, a friend, [Areeb Beigh](http://areeb12.pythonanywhere.com), who is also a coder helped a lot. He didn't actually write any code, but tested the app and suggested ways to fix bugs.


### Lessons

* Never rely too much on online tutorials
* Plan the developement process, before starting
* Release the app for testing, before a final release
