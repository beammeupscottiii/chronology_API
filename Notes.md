
## S y n c S e q . x y z
#### Project Notes & Planning
-----------------------------------------------------------------------------------------



### 12. 06. 2023
@1145 commentCount concern, solution provided. FrontEnd counts comments - updates on loads
			and comments for posts



### 12. 05. 2023
@1445
****To Do Next - finishing CSS
		- style comments ✅
		- style notifications
		- fix styling of post options & commentBox ✅
		- monthChart styling
			- signify current day some way
			- transition effect

- commentCount & deleting comments
- Cleaning up the backend


@0335 CSS for <CreatePost> added

****To Do Next:
		- create array of image thumbnails for posts within <Log> ✅ 
		- on post click, slide element before going to <Post> ✅


### 12. 03. 2023
@1400 only needed to add animation by default to <Entry>
			mount transition effect also added for <Post>

@0545 Added the transition animations effects to current sections and pages (other than Post)
			but current implementation is abit shoddy

Will switch to giving elements a default entrance animation
the ::before to appear when component dismount


### 11. 30. 2023
@1555 added ::before psuedo element to <Entry>

latent components, i.e <CreatePost>, to have ::before opacity1 by default
onMount: use state to change component className to leave

****To Do:
		- add _latent_ toggle animations to...
			<CreatePost> ✅   
			<manageConnections> ✅
			<interactionList> ✅ 
		- add _regular_ toggle animations to
		  <Entry> ✅
		  <Home> ✅

For Latent:
	load with enter, true
	 - wait 100, then enter, false
	 on leave - enter, true


### 11. 29. 2023
@1230 
****To Do Next:
		- come up with process for editing a post
		- Clean up backend code and CSS . . .

Finishing 1.0A
- implement editing post & deleting comments & adding all comments

@1130 notifs are weird - but they work for now. Will remain as is with the whole double nested issue...
			however, all old notifs removed - working to implement notif.details now
			in both <InteractionsList>


### 11. 28. 2023
@1520 new comments and comment replies now created and added to Post doc without creating 
			individual docs 

****To Do Next:
		- process for deleting comments
		- adding notifs to user's notifList -correctly-
		- adjust route for marking a notif read
		- process for editing a post
			- replace text in content fields with new data
			- delete photos or add to pinned media 
			- option to pin post in details box


@0410 comment created and added to post Doc - however, will need to change getComments function
			within posts, as comments are no longer individual docs.
			simply get postData again after each comment upload 
			- will have to write function to count all nested comments


### 11. 27. 2023
@0355 add sanbanbaka and make post tagging user to investigate below notes

@0345 worked on CSS for <Home> and <InteractionsList> components

@1225 

****To Do:
		- Discern whether creating post makes seperate docs in DB for each content 
			( 11. 28. 2023 | it doesnt - never did lol) ✅
		- can new comment be created and added to post without saving directly?
			( 11. 28. 2023 | done ) ✅
		- can notifs be created and added to user's list without being saved ???
			( 11. 28. 2023 | Current processes work well enough as is)




### 11. 25. 2023
@1950 Deleted all DB groups, other than users
			Have noticed that my user notifications remain, and I can mark them read without
		  the supposed doc being editted (external doc doesnt exist)

Will look to take this approach with post content...
Also must make sure no new notifs are then created xD


@1115 <Entry> page CSS complete!
- checks whether all fields in form have input
- returns error messages with popUp notif
- transition animations between signUp and logIn
- animation for successful sign up (will add svgs later)

****To Do Next:
		- CSS for all <Home> & <Post> components

		- delete all DB content and users, start from scratch
		- document and organize all functions, make sure they work as intended
			- fix what doesn't work


@0100 
****To Do Next:
		- create error popUp alert. Activates when ✅
			- error from API
			- input field is missing value

same format: popUp stateVar,
	active: true, false
	message: API error or frontEnd check for missing field



### 11. 24. 2023
@1230 
****To Do Next:
		- add check for whether inputs have value onSubmit, if not:
			error message pop up 'please fill in all inputs'

- after successful signup,  ✅
	set transition state var in main component,
	when set true,
	- set signup false
	  delay. 
	  then set transition component on (same set up as other components)
	  after sequence complete,
	  turn off transition component then turn on log in

	  two elements in transition component
	  delay in animation sequence for second element
	  can define element within main Entry component



### 11. 23. 2023

@1145 added animation styling for loginOrSignup and the forms
      added toggling between the different forms

****To Do:
	  - form submit buttons "login" & "signup" to be nonActive and do nothing unless all
	  	inputs have values ✅
	  	- can check ref form.children[0].children for value
	  	- map array of input details, returned element can have value={state}

@1000 for initial button choice, on option select, loginOrSignup dissappears


### 11. 22. 2023
@1200 element toggle stateVar changes element class:

if true: element.class = on
- animation to display, then opacity 1

if false: element.class = off
- animation to opacity 0, display none

To Do Next:
- add animation classes to <forms> - same for both ✅
- for loginOrSignup, it dissappears on first click. ✅
	- can useRef and inline js for change
- fadeOut page on navigate


### 11. 19. 2023
@1955 Unexpected end of JSON error for user responding to their own comment...

implemented change to commentsSchema - now have field for parentPost, so that
all comments can be deleted alongside post



@1355 added component flow for deleting posts via <popUpNotif> :D
on backEnd - need to implement measure for deleting ALL comments associated with a post ...

@1245 comments issues fixed :D

@1100 Fixed the postConfirmation popUp issue - however, now posting comments doesnt cause
			a pop up... atleast, when user comments on own post

another user commenting on post give them a popUp, but also a notif about the comment as well
so, theres a mix up...


### 11. 18. 2023
@2350 postConfirmation keeps popping up after successful submit - fix

@2340 fixed concerning newLines in <CreatePost> 
		  Issue was the newLines would cause repeated entry of the same textArea, with new content
		  now update to textarea updates content in at respective index

newLines aren't maintained from submission to display (both comments and post)... will work on

@2110 userLog and unreadNotif count retrieved upon initial login
have to get the userKey with every api call - which is how it was done in the previous ver.


### 11. 17. 2023
@1620 perhaps in a preStep to 1.0A, after creating new accounts and data, 
-go to post from interactionsList- can be added.

As of now, new notifs will have change, but not previous. 
for notifs, postTitle, commentID is kept in notif.details
anything placed in details is JSON object


### 11. 15. 2023
@1500 will consider the scrollToComment issue 'closed' for now. May be able tp fix eventually
		  with CSS cleanup

@1405 scrollToComment does actually work now - but section#POST moving still an issue...

@1045 section#POST moves up by a tiny bit when scrollToComment is active
scrollToComment still not working however...


### 11. 13. 2023
@1725 need <Post> to reRender after initial load, so that it can find the comment and scrollTo...

@1425 commentCount function to be active for 1.0A (old posts dont have commentCount field)

@0655
****To Do
		- work on issue with frontEnd comment count ✅
		- work on commentCount issue ✅
		- tagged and comment notifs 'interact' to take user to post ✅
		- content within textbox for comments + postBody needs to be single string WHILE finding
			way to preserve newlines \nl 
			- could reuse bodyParse

@0640 Marking notif (atleast about comments) as read works, but the unReadcount doesnt update
      upon doing so ....
      I may just have to accept this as an 'up in the air' issue for now...
      it isn't experience breaking...



### 11. 12. 2023
@1350 api call for post isn't returning the object sent from backend - the ID. just keeps sending
		  true...
		  need id from successful notif to be passed to <instant> via socketMessage...

@1320
interactionList now updates immediately after marking a notif as read 

****'interact' option for tag alerts and comments to navigate to post (import navigate into <Instant>)
		!? scroll distance lost once selected
		!? backButton on post specifically returns user home -> UI concern???

### 11. 11. 2023
@1900 Issues fixed:
			- scroll distance and section maintained once returning from a post
			- user no longer recieves notif about their own comment on a their own post
			- all posts in <Log>are in descending order

Next:
- put notif.id in socketMessage after recieving confirmation, so that it can be marked read
  in the popUpNotif
- content within textbox needs to be single string 
  - how to preserve new lines

and something is currently wrong with marking posts asRead...




@1020 'option' created for error messages via <instant>

@0800 
****To Do . . . After
		- work on algo, middleware, for managing tags:
		   - creating, adding tags to posts - adding posts in tags' list

@0745 removed manageTags middleware & tags model from backend . . . intend to replace with
			'Groups' . . . 

Thus, new algo needs to be ordained for 
- creating tags
- adding tags to post
&
- adding posts to tags

This group model is also to be used for: User collections and Groups...

For 1.0A, will only have tags - private and nonPrivate


### 11. 10. 2023
@2230 Proactive & retroactive posts via monthChart now working :D !
there should REALLY be some indication as to whether a retro/pro post was made ...


@2220 date saved when returning from viewing post from <MonthChart>
			Change implemented so that <Log> doesn't save selectedPost when
			viewing on monthChart.

@2025 App recalls where user was on <MonthChart> when viewing post,
		  need to have date saved as well...

@1225 setting stateVar for current within the <Main> component and passing it down is a
	    successful solution to maintaining scroll distance & section user is viewing

selectedDate state var within <MonthChart> needs to be moved to <Main>
dateInView will be replaced by selectedDate as well...
^should allow <monthChart> to be maintained when pulling up a post

for <log> if monthChart is true, dont save post index 

and, in <Post> reAdd contingency for when selectedDate.date has value,
so createdPost is a retro/pro post


@0815 base function for scrolling to post within log works! 
	    now need to find method for getting index of post when selected to save ...


### 11. 09. 2023
@1830 scrollIntoView on element itself works...

@0715 Got the <Log> component to work within the <monthChart> 
		  however... clicking on the post goes to the <post> page, 
		  removing the chart from being up...

May have to implement router. Current research says that the contextProvider
can go around the <Routes> component in the MAIN return statement... we shall see

Context data would need to maintain the date info for the calendar
would also like it to maintain the currentSection and scrollDistance...
or, we could even use good ole js scrollToLink....


### 11. 08. 2023
@1845 reusing the <log> component within the <monthChart> doesnt seem to be working, so will
	    make another function for handling posts within it... 

### 11. 07. 2023
@1330 Calendar base functions working !
		  April 2024 month is organized incorrectly...

**** To Do Next
	   - fix issue with getting pattern for April 2024
	     - also happens with June 2024
	   - october 2023 has full blank array? check for and remove ✅
	   - fix css animation for calendar during transition
	   - add list below for postsPerDate
	     - shooould be able to simply add <log> component here...

@1040 backEnd is actually returning right amount of postsPerDate . . .

@0255 calendar now renders correctly :D !!!
**** To Do Next:
		 - backEnd is returning incorrect amount of postsPerDate ❌
		 - come up with more efficient / clean solution for changing months

@0200 Api calls now work (issue was fetch func had 'header' instead of 'headers T- T')
	    but now cal isnt rendering :/


### 11. 06. 2023
@1600 The bare minimum to have the calendar render has been imported over. 
		  Currently having issue with the api calls for the necessary data, says
		  call is unauthorized...


### 11. 01. 2023
@1155 apiAccess functions written for monthChart calls. previous api routes should be fine, left
	  as is. 
	  removed code which removes first entry from the reversed array of posts...
	  We'll see if it's necessary


### 10. 31. 2023
@1255 Found a better fix :D
**** To Be Done:
	 - Import Month Chart !
	 - work on subIssues

!? number one addition to make to API once finalizing 1.0A is all routes should have catch for errors
   if one received, send error message to frontEnd (to appear in <popUpNotif>) so that the server
   stays up regardless of errors

@1245 current solution to <popUpNotif> flash appearing whenever a page is loaded:
	  removed the nonActive class. component simply disappears after closing

@1155 
Sub issues to work on ...
- prevent user from getting notifs about their own comments
- component flow for deleting posts
- content within textbox needs to be made into one string
  - will have to work on bodyParse...
  ? how to preserve new lines
- disable submission if 'title' and 'content' are empty
- marking notif as read doesn't update component the first time, but does on the second...
- put notifID in socketMessage after confirming notif upload in <Instant>


@1150 it was the most simple issue preventing the popUp from appearing T- T
	  - im not sure if comment replies are causing notifications...

@1100 component flow for deleting post:
	  - pressing delete button prompts popUp with confirmation request
	    - socketMessage houses postID necessary for api req
	  - on confirmation, return user to <Home> then popUp with confirm message

@0808 Need to make sure text content is always ONE STRING...

@0150 backEnd websocket not recieving message...
      notif type concerning tagged posts, in <interactionList> not displaying text

!!! also, delete function needs to be added back ...


### 10. 30. 2023
@2020 skeleton for dropSelection component for selecting users to tag is done

Next:
- get user's connectionList on <CreatePost> mount
- go through stateVar housing selected users upon submission, include
  their ID's in socketMessage
- <Instant> route for taggedPosts
- backend Instant.js for taggedPosts
- API - DB route for making notifs for taggedPosts


!!! disable submission if 'title' and 'content' are empty


### 10. 29. 2023
@1345 userLog now updates after a post is made :D
	  will have to look into having posts log properly organized - new posts should be
	  at the top of the current day's list

****To Do Next
	- have backend send user's connectionList upon making a post
	- make check box with user's connections, 
		- frontEnd sends socketMessage & makes DB update to recipients notifs list
		  (done through <Instant>)
	and then
	- import monthChart and get it working 

@1340 I changed nothing, yet making uploads with post content having newlines now works...
	  the newline doesn't transfer over, ofc...

!? posts made same day appear in bottom up order: most recent post is at bottom of list for that day

@1310 successful posting results in a popUp notif

?! however, entering a newline within a post's content area
	causes the upload to fail, due to the way the data is sent over / or saved due to the unique
	form...

?! also, userLog isn't updating after an upload

@1130 marking a notif as read now updates the list :D !

@0755 MarkRead API-DB call works, however frontEnd isn't updating the notifList after 
	  the response from backend...  does update upon remounting...


### 10. 27. 2023
****To Do Next
	- markRead function on frontEnd & backEnd ✅
	- successfully uploading a post to trigger confirmation popUp ✅
	and then
	- have backend send user's connectionList upon making a post ✅
	- make check box with user's connections, ✅
		- frontEnd sends socketMessage & makes DB update to recipients notifs list
		  (done through <Instant>)
	and then
	- import monthChart and get it working

after which, all functionality for 1.0A will be complete

@1930 Works as intended - interactionsList updates when new socketMessage comes in

@1920 user's unread interaction count now available upon log in, and when interationsList 
	  updates
	  also set interactionList to update on socketMessage change,
	  let's see if it works as intended...


### 10. 26. 2023
@2010 will have to run experiment at some point to see

@1345 Comment notification for both parties works as intended
	  need to clean up the wording of the whole notif / popUpNotif arrangement T- T

****To Do Next:
	- make sure process works when post owner and comment author are different.... ✅
	  - notif gets added to both recipients, !HOWEVER need specific notif message for replies ...
	- have commenting update the post correctly ✅
	- have backend send unread notifAmount on signIn ✅
	- have backend send user's connectionList upon making a post
	!!! add functionality for tagging users !!!


@1330 comments arent updating corrently after a post . . .

!!! socketMessage set AFTER recieving a message can't have same exact message and type T_T xD !!!

!!! will also need to add function for deleting all comments associated with a post ... 



### 10. 25. 2023
@1430 currently setting socketMessage from handleSubmit() in <Post> to send notif data
	  with comment info

@1110 
- set up api subroute for adding comment to respective users notifications ✅
- set up instant.js on backend for comment messages... ✅
- new accessAPI function call... ✅
- <Instant> to have condition for comment message types ✅
	- when sending comments
	- when recieving comments
- commenting initiates everything above ✅



@1050 webSockets (seemingly) successfully moved to main
	  <Posts> now has <interactionList> and <popUpNotif>

setSocketMessage for when comments are made on post.
a notif and socketMessage needs to be made from the info...

@0930 deep nesting comments works :D !
Absolute win

****To Do Next
	- Move webSockets to <Main> ✅
		- have notif count in main as well...
	- add <interactionList> and <popUpNotif> to <Post> ✅

### 10. 24. 2023
@1725 issue resolved T-T it was an issue with asynchronicity, as i'd suspected

to do: find out whats happening to reply of a reply

@1645 created script to get comment replies (currently unsure if it works for 3 times nested
	  comments, but it should)
	  issue is - on initial page load, only the initial comments appear. Replies to comments
	  show up A F T E R making a change to the file, causing the page to update (not reload)

!!! need to figure out how to have ALL comments loaded and diplayed on initial page load


### 10. 23. 2023
@1320 . . . .
backend recieves random id number when I send it for post comments . . .

getting post comments seperately shows first nesting, yet was unable to make
a second nested commented

It is an issue on the back end, that nesting sub documents only goes 2 docs deep....

@0905 will try creating a seperate fetch function for post comments,
	  which gets post comments upon load...

would also need to create function for counting all comments to a post...



### 10. 22. 2023
@1414 Having trouble with nested comments on backend. Need to find correct way to nest comments in commments

@0845 Algo for responding to comments:

onClick of reply:
- get commentID in stateVar, comment number & number of replies
	- set type to reply
- directly open comment form
- for handleSubmit function, discern whether state type is 'initial' or 'reply'
	- if reply, parentID is ID of comment being replied to





### 10. 20. 2023
@1850 commenting now works :D !!!

But there's so much to clean up T- T
will need to find out how to make reloading a post page fetch the postData from the backEnd ...

**** To Do Next !
	 - make post body scrollable
	 - clean up comment skeleton style

!? reorganize component structure so that <Posts> utilizes same webSocket info 
	(meaning, initialize it in the <Main> component )

!? add popUp notif and interactionsList to <Post>



@1120 finished skeleton for optionsMenu in <Post> + comment box

for now, user comments to only have 'reply' button which also triggers
the same comment box to open.

**** Will need function to fetch post data so that page may be updated upon commenting
	12:07 getPost() satistfies this requirement


### 10. 19. 2023
@1600 useRef to reference optionToggling button in <Post> 
	  on toggle, it fades and display: none,
	  options take its place and buttonBar element slides upwards
on exit, reverse action


@1535 interacting with notifs a la interact() now working correctly...


### 10. 18. 2023
@1235 Initial layout and styling complete for interactionsList

**** To Be Done:
	 - setUp interact function to setSocketMessage for accepting and ignoring requests
	 !? (can add interact function for going to posts after I add commenting and tagging)

Need to add 'recieved' notif message for notifs T- T ✅


### 10. 13. 2023
@2200 a lil more work on the component...

@1315 set up some skeleton for the interactionList messages per notif
	  - the response object is currently an array, inside an array ...
	    another weird thing to account for during dev

@1140 ignoring a request now works :D


### 10. 12. 2023
@1515 process now fixed and working completely as intended T-T 

**** To Do
	 - add interact function option for ignoring connection request ✅
	 ! begin interactionsList

- after, begin work on commenting.
	- initial comment on post, and responding to other comments

	- post page to have it's own buttonBar...

!!! Need to change notifications in user model to be array of subDocs
!!! removing connections seems to display array of some info...?

@1500 the process for adding connections through the notif pop seems to be completing on the backend
	  SOMETIMES.
	  Others, it gets caught in a loop (current cant find cause)
	  or if it goes through, confirmation from the DB function isn't returned to frontEnd
	  to initiate webSocket message to original requester...

At one point, it seemed as though the server was becoming confused between the websocket message
and the http one T- T
Only solved this by changing the websocket message that the server is supposed to SEND


@0735 Current idea is to create a stateVar in the Main component so that all the other
	  pages can draw from it for: interactionsList & socketConnection
Everytime the user accesses a new page, the webSocket will reconnect, but the notifs
will always draw from the same store


### 10. 11. 2023
@2200 
To Do Next
  - finish connectionRequest functions in Instant.js popUpNotif 
    accept or ignore should get sender's ID from accessID stateVar

  - build interactionsList - list out different versions of notification

  - Would like to move post as sub route of home - however, I may need to
  	find some solution to having the Instant component available on other
  	pages....

@1540 it all works now 😩 i believe the issue was primarily with the fact that I was using 
	  JSON.stringify instead of parse T- T

@0900 webSocket + http call works well from first client to server
	  second client recieves the message - but react is not updating upon recieving it

current idea for a solution is to move the reception algos into a useEffect function,
which listens to the change of 'lastMessage' state var...



### 10. 10. 2023
@1640 reverse order of notifs before they're sent to frontEnd

@1020 newNotif api request works ...



### 10. 09. 2023
@1340 Set up front end so that on connectionRequest, requested user should get new notif + popUp notif
	  need to replace notif route in backend with the update, however....

	  once it works, finish with request options and start interactionsList

??? should closing a popUp mark the notif as read??
	individual notifs may need to be saved, in DB, in order to mark them as read...

@0655 WEB SOCkET FUNCTIONALITY IS WORKING :D !!!

**** To Do Next:
	  - reception of message triggers popUp
	  - complete connections process with http api calls

On reception of any message, instant should prompt interactionsList to update



### 10. 08. 2023
@0100 need to parse messages through JSON for websockets

@1205 Set up general outline of data.types for <Instant> to listen and respond to



### 10. 07. 2023
@1915 Had to reassess my plan for implementing the websockets...

Instant.js returns the popUp notifs (different variants) based on messages recieved.
Also responsible for sending webSocket messages based on message.type change

**** Will need to have all other external pages (like posts, groupPages and global) as nested
routes through the <Outlet> within the home component, so that instant is always available

@1255 need to utilize context for instants websockets...


### 10. 06. 2023
@1630 Algo for Notifs and Pop Ups:

* When an action ON FRONT END involves creating a notif, setWebSocket message is also 
  triggered This is a stateObj with the setup:

  type: 
  		-requestSent, 
  		-requestAccepted, 
  		-requestIgnored,
  		-commentInitial, 
  		commentResponse, 
  		tagging
  sender: initiator of notif
  recipients: those to notify of action
  
  frontEnd and backEnd websocket function will discern object type

* in instant.js, message type is the first check to determine what notif gets sent
  - an http request is sent based on message & same message object gets sent to backEnd websockets



@0830 Fuzzy search within <manageConnections> now works !!!
	  Next to work on is the interactionsList, a simple pull request and display, mattaku ne...

Real work commences with instant.js...

### 10. 04. 2023

@1645 users connections now get pulled correctly. (pretty sure that removal button doesn't
	  work tho)

**** To Do Next:
	 - fix search (only on backend: front end fetch working fine)✅

?! Requests to be done through notif route



### 10. 03. 2023
@2135 turns out issue is actually - only one user object is being sent, and its outside
	  of an array. The function to reduce the user object also doesn't seem to be working.

**** Tend to backend to fix issue ....

@2130 Currently having issue with <manageConnections > component
	  Opening it and running api request on mount for connections
	  seems to be causing the issue...?

@1305 Moved <CreatePost> component to HOME in Main.jsx

**** To Do Next
	 - Create confirmation modal which opens upon successful submission❌
	 - make sure postUpload works correctly ✅

   - Import manageConnections ✅
   - import interactionsList

   - Finally, commence work on instant.jsx


@0910 Will need to place the section's inner managing component within the HOME component 
	  in Main.jsx (i.e, userLog -> createPost, socialLog -> manageConnects)

**** To Do:
	 - Export and Move managingComponents to Home ✅
	 - For each section, if openModal = true && currentSection is it's number, then it opens ✅


### 10. 02. 2023
@2000 Fixed front and backend issue with the posts being arranged in the correct, sequential
	  order + each post made on an individual day having a date header

**** To Do Next -> createPost & manageConnections





### 09. 29. 2023
@1225 Initial ButtonBar html & css done 
	  Currently not toggling the opening of modal element, despite current implementation


### 09. 28. 2023
@1730 To Do Next
	  - import over buttonBar ✅
	  - recreate createPost & manageConnections sections
	  - recreate interactionsList
	  - finish instant, websocket handler and popUpNotif component

@1655 it was an issue with using null this whole time T- T 
	  But issue with the userLog doubleloading is now fixed !
	  In future, will need to create a context for managing the currentSection,
	  amonst some other things. However, that can easily be replaced retroactively

@1330 still having issue

@1030 on initial load, need to set class of userLog element to 'not' when prop, active, 
	  changes. classname will change however, when coming back to section


### 09. 27. 2023
@2025 Create overlay element in index.html 
	  Whenever home element mounts, get it and change to opacity: 0 and display none
	  display block and fade in on page changes

@1820 copy over postDetails set up

@0905 return button svg added to post page

@0150 Router to open post now works, with using params to get post - despite loaderData
	  with BrowserRouter not working...
	  HomeOrEntry not reRouting user to intended location, however . . .
	  I ***think*** something needs to be adjusted within Entry.jsx itself . . .

Also, the posts need to be correctly reordered . . .

****To Do Next
	- modify header, so that when on a post, a back button appears at the top ✔️
	- build out the post page ✔️
		- make contingency for currently seperated post content T- T ✔️

### 09. 26. 2023
@1815 On first log in, frontEnd is unable to get user's log as credentials dont seem to
	  to be immediately avaiable . . . .
	  Could try delaying the redirect - either way, need to fix


### 09. 25. 2023
@0100 Now working on importing blogpost ...


### 09. 23. 2023
@1435 Now got to create new route for blogpost
	  - header should have back button which only appears on a post ✔️
	  - Need to add loader to route in Main.js
	  - Need to add function for Navigate to ./post/:id in log for each postItem ✔️ 
	  - to send data using navigate.... ✔️

let toPost = () => {
	navigate('/post/:id', {state: {key: value, key: value}});
}

function Post ({}) {
	const location = useLocation();
	let thing = location.state.key;
}




@1050 made fix for seperated postContent. 
	  Will keep for now as I recreate the blogpost and createPost component

****To Do Next:
	- Create socialLog ✔️
	- css for log, differentiate social and user ✔️
	- import blogpost 
		then createPost

@0820 blogLog gets and displays post content as originally intended.
	  Due to change in postContent structure however, content from all prior posts
	  is split into an array...
	  ? can delete all prior posts, start from scratch??
	  ?! content pieces also do not refer to original post... which is slightly concerning?


### 09. 22. 2023
@1630 changeSection affect works as intended.
****To Do Next:
    - Add scale and fade animations to sections ✔️
    - begin importing over prior code for sections:✔️
    	- blogLog: make generic log component for userLog, socialLog ✔️
    	- blogPost: display blog content in external route / page
    	- manageConnections for socialLog
    - add ButtonBar and functionality for opening section's modals

make external, independant components for bloglog and blogpost


### 09. 21. 2023
@1450 test the changeSection affect . . .

@0110 Begun HTML skeleton and initial JS for sectionsWrapper and sections


### 09. 20. 2023
@1250 CarouselNav visual functionality completed . . .
	  Will leave spacing as is for now

****To Do Next:
	- move currentOpt stateVar to <home> so that mainSections can have access, for switching
	  sections


### 09. 19. 2023

@1850 IT WORKS !!!
	Now to implement solution for right side!
	Also need to work on better spacing...

@1510 Still need to figure out the buttons...

@1345 Begun working on CarouselNav. Need to figure out button placement and sizing, then
	  linking animations for scaling the font-size of the options to the buttons


### 09. 18. 2023

@1450 Header Skeleton and BaseCSS finished. 
	****To Do Next:
		- Build the <CarouselNav> and HomeSections . . .


@1400 Wrapper Element for both <carouselNav> and Main Section Panes. Whatever element
	  is nested within <Home> will have same height as that wrapper


@0750 Login and the auth context w/ router now works 

****To Do Next
	- Almost all routes will be nested through HOME component, which consists of: <header> <carouselNav> and <buttonBar>.  In between nav and bar is where the <outlet> will go, allowing other 'pages' to be viewed.
		- Within a Home route, create other routes for the elements


### 09. 17. 2023
@2025 the authentication context doesn't seem to be working as intended. 
	  Will have to find some other way to block protected routes . . .
	  Will try moving the router into an App.js file....


### 09. 16. 2023
@1030 Gonna start using this file for notes again, as keeping track of progress between FE & BE becomes tedious and difficult . . . 

Functions for API calls of basic routes needed for 1.0A all written

Overall goal, currently, is to reWrite all current components as necessary for routed 
conversion. 

****To Do Next . . .
   	- ReWriting UserEntry.js as entry.jsx

