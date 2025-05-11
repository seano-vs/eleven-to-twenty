document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    // Define your flashcards here.
    // 'category' is used for grouping in settings.
    // 'text' is the text side.
    // 'video' is the RELATIVE path to the video file in the 'videos' folder.
    const allFlashcards = [
        { id: 1, category: "Week 1", text: 'Again', video: 'videos/again.mp4' },
        { id: 2, category: "Week 1", text: 'Slow', video: 'videos/slow.mp4' },
        { id: 3, category: "Week 1", text: 'Please', video: 'videos/please.mp4' },
        { id: 4, category: "Week 1", text: 'Right/Correct', video: 'videos/right-correct.mp4' },
        { id: 5, category: "Week 1", text: 'Wrong', video: 'videos/wrong.mp4' },
        { id: 6, category: "Week 1", text: 'Sorry', video: 'videos/sorry.mp4' },
        { id: 7, category: "Week 1", text: 'Understand', video: 'videos/understand.mp4' },
        { id: 8, category: "Week 1", text: 'Don\'t understand', video: 'videos/dont+understand.mp4' },
        { id: 9, category: "Week 1", text: 'Think', video: 'videos/think.mp4' },
        { id: 10, category: "Week 1", text: 'Know', video: 'videos/know.mp4' },
        { id: 11, category: "Week 1", text: 'I don\'t know', video: 'videos/i+dont+know.mp4' },
        { id: 12, category: "Week 1", text: 'Forget', video: 'videos/forget.mp4' },
        { id: 13, category: "Week 1", text: 'Remember', video: 'videos/remember.mp4' },
        { id: 14, category: "Week 1", text: 'Same', video: 'videos/same.mp4' },
        { id: 15, category: "Week 1", text: 'Different', video: 'videos/different.mp4' },
        { id: 16, category: "Week 1", text: 'Good', video: 'videos/good.mp4' },
        { id: 17, category: "Week 1", text: 'Bad', video: 'videos/bad.mp4' },
        { id: 18, category: "Week 1", text: 'Thank you', video: 'videos/thank-you.mp4' },
        { id: 19, category: "Week 1", text: 'Cool/Neat', video: 'videos/cool-neat.mp4' },
        { id: 20, category: "Week 1", text: 'Yes', video: 'videos/yes.mp4' },
        { id: 21, category: "Week 1", text: 'No', video: 'videos/no.mp4' },
    
        // Week 2
        { id: 22, category: "Week 2", text: 'Morning', video: 'videos/morning.mp4' },
        { id: 23, category: "Week 2", text: 'Afternoon', video: 'videos/afternoon.mp4' },
        { id: 24, category: "Week 2", text: 'Night', video: 'videos/night-evening.mp4' },
        { id: 25, category: "Week 2", text: 'Fingerspelling', video: 'videos/fingerspelling.mp4' },
        { id: 26, category: "Week 2", text: 'English/England', video: 'videos/english-language.mp4' },
        { id: 27, category: "Week 2", text: 'Maybe', video: 'videos/maybe.mp4' },
        { id: 28, category: "Week 2", text: 'So-so/Kind of', video: 'videos/so-so.mp4' },
        { id: 29, category: "Week 2", text: 'Learn', video: 'videos/learn.mp4' },
        { id: 30, category: "Week 2", text: 'Practice', video: 'videos/practice.mp4' },
        { id: 31, category: "Week 2", text: 'Study', video: 'videos/study.mp4' },
        { id: 32, category: "Week 2", text: 'Review', video: 'videos/review-lookover.mp4' },
        { id: 33, category: "Week 2", text: 'Class', video: 'videos/class.mp4' },
        { id: 34, category: "Week 2", text: 'Teacher', video: 'videos/teacher.mp4' },
        { id: 35, category: "Week 2", text: 'Student', video: 'videos/student.mp4' },
        { id: 36, category: "Week 2", text: 'Question', video: 'videos/ask-a-question.mp4' },
        { id: 37, category: "Week 2", text: 'Do you have questions?', video: 'videos/ask-a-question.mp4' },
        { id: 38, category: "Week 2", text: 'Hello/Hi', video: 'videos/hello.mp4' },
        { id: 39, category: "Week 2", text: 'Name', video: 'videos/name.mp4' },
        { id: 40, category: "Week 2", text: 'Nice', video: 'videos/nice.mp4' },
        { id: 41, category: "Week 2", text: 'To meet', video: 'videos/meet.mp4' },
        { id: 42, category: "Week 2", text: 'Nice to meet you', video: 'videos/nice+to+meet+you.mp4' },
        { id: 43, category: "Week 2", text: 'To introduce', video: 'videos/introduce.mp4' },
        { id: 44, category: "Week 2", text: 'You-too/Me-too/Same here', video: 'videos/same.mp4' },
        { id: 45, category: "Week 2", text: 'What\'s up?', video: 'videos/whats+up.mp4' },
        { id: 46, category: "Week 2", text: 'To see', video: 'videos/see.mp4' },
        { id: 47, category: "Week 2", text: 'Later', video: 'videos/later.mp4' },
        { id: 48, category: "Week 2", text: 'See you later', video: 'videos/see+you+later.mp4' },
        { id: 49, category: "Week 2", text: 'Goodbye/Bye', video: 'videos/goodbye.mp4' },
        { id: 50, category: "Week 2", text: 'Monday', video: 'videos/monday.mp4' },
        { id: 51, category: "Week 2", text: 'Tuesday', video: 'videos/tuesday.mp4' },
        { id: 52, category: "Week 2", text: 'Wednesday', video: 'videos/wednesday.mp4' },
        { id: 53, category: "Week 2", text: 'Thursday', video: 'videos/thursday.mp4' },
        { id: 54, category: "Week 2", text: 'Friday', video: 'videos/friday.mp4' },
        { id: 55, category: "Week 2", text: 'Saturday', video: 'videos/saturday.mp4' },
        { id: 56, category: "Week 2", text: 'Sunday', video: 'videos/sunday.mp4' },
        { id: 57, category: "Week 2", text: 'Today', video: 'videos/today.mp4' },
        { id: 58, category: "Week 2", text: 'Now', video: 'videos/now.mp4' },
        { id: 59, category: "Week 2", text: 'Tonight', video: 'videos/tonight.mp4' },
        { id: 60, category: "Week 2", text: 'Yesterday', video: 'videos/yesterday.mp4' },
        { id: 61, category: "Week 2", text: 'Tomorrow', video: 'videos/tomorrow.mp4' },
        { id: 62, category: "Week 2", text: 'Day', video: 'videos/day.mp4' },
        { id: 63, category: "Week 2", text: 'Week', video: 'videos/week.mp4' },
        { id: 64, category: "Week 2", text: 'Weekend', video: 'videos/weekend.mp4' },
        { id: 65, category: "Week 2", text: 'This', video: 'videos/this.mp4' },
        { id: 66, category: "Week 2", text: 'Last', video: 'videos/last.mp4' },
        { id: 67, category: "Week 2", text: 'Next', video: 'videos/next.mp4' },
        { id: 68, category: "Week 2", text: 'Last-week', video: 'videos/last+week.mp4' },
        { id: 69, category: "Week 2", text: 'Next-week', video: 'videos/next+week.mp4' },
    
        // Week 3
        { id: 70, category: "Week 3", text: 'Deaf', video: 'videos/deaf.mp4' },
        { id: 71, category: "Week 3", text: 'Hearing', video: 'videos/hearing.mp4' },
        { id: 72, category: "Week 3", text: 'Hard of hearing', video: 'videos/hard+of+hearing.mp4' },
        { id: 73, category: "Week 3", text: 'Excuse me', video: 'videos/excuse+me.mp4' },
        { id: 74, category: "Week 3", text: 'Do you mind', video: 'videos/excuse+me.mp4' },
        { id: 75, category: "Week 3", text: 'Hold on/One moment', video: 'videos/hold+on.mp4' },
        { id: 76, category: "Week 3", text: 'Go ahead', video: 'videos/go+ahead.mp4' },
        { id: 77, category: "Week 3", text: 'Come', video: 'videos/come.mp4' },
        { id: 78, category: "Week 3", text: 'Go', video: 'videos/go.mp4' },
        { id: 79, category: "Week 3", text: 'With', video: 'videos/with.mp4' },
        { id: 80, category: "Week 3", text: 'In', video: 'videos/in.mp4' },
        { id: 81, category: "Week 3", text: 'Oh, I see/Ah/Oh/Hmm', video: 'videos/oh+i+see.mp4' },
        { id: 82, category: "Week 3", text: 'Love', video: 'videos/love.mp4' },
        { id: 83, category: "Week 3", text: 'Love-it', video: 'videos/love+it.mp4' },
        { id: 84, category: "Week 3", text: 'Perfect', video: 'videos/perfect.mp4' },
        { id: 85, category: "Week 3", text: 'Like', video: 'videos/like.mp4' },
        { id: 86, category: "Week 3", text: 'Fine', video: 'videos/fine-allright.mp4' },
        { id: 87, category: "Week 3", text: 'Ok', video: 'videos/fine-allright.mp4' },
        { id: 88, category: "Week 3", text: 'Don\'t-like', video: 'videos/dont+like.mp4' },
        { id: 89, category: "Week 3", text: 'Hate', video: 'videos/hate.mp4' },
        { id: 90, category: "Week 3", text: 'Number', video: 'videos/number.mp4' },
        { id: 91, category: "Week 3", text: 'Letter', video: 'videos/letter+of+alphabet.mp4' },
        { id: 92, category: "Week 3", text: 'Plus (math)', video: 'videos/plus.mp4' },
        { id: 93, category: "Week 3", text: 'Minus (math)', video: 'videos/minus.mp4' },
        { id: 94, category: "Week 3", text: 'Equals (math)', video: 'videos/equal-math.mp4' },
    
        // Week 4
        { id: 95, category: "Week 4", text: 'Game', video: 'videos/game.mp4' },
        { id: 96, category: "Week 4", text: 'Play', video: 'videos/play.mp4' },
        { id: 97, category: "Week 4", text: 'Ship', video: 'videos/ship.mp4' },
        { id: 98, category: "Week 4", text: 'Miss', video: 'videos/miss-nothit.mp4' },
        { id: 99, category: "Week 4", text: 'Hit', video: 'videos/hit.mp4' },
        { id: 100, category: "Week 4", text: 'Your turn', video: 'videos/your+turn.mp4' },
        { id: 101, category: "Week 4", text: 'My turn', video: 'videos/my+turn.mp4' },
        { id: 102, category: "Week 4", text: 'Win', video: 'videos/win.mp4' },
        { id: 103, category: "Week 4", text: 'Lose', video: 'videos/lose-game.mp4' },
        { id: 104, category: "Week 4", text: 'Lucky', video: 'videos/lucky.mp4' },
        { id: 105, category: "Week 4", text: 'Start/Begin', video: 'videos/start.mp4' },
        { id: 106, category: "Week 4", text: 'End/Finish', video: 'videos/fnish-done.mp4' },
        { id: 107, category: "Week 4", text: 'Easy', video: 'videos/easy.mp4' },
        { id: 108, category: "Week 4", text: 'Hard/Difficult', video: 'videos/hard-difficult.mp4' },
        { id: 109, category: "Week 4", text: 'Close/Near', video: 'videos/almost-close.mp4' },
        { id: 110, category: "Week 4", text: 'Have', video: 'videos/have-possess.mp4' },
        { id: 111, category: "Week 4", text: 'Fun', video: 'videos/fun.mp4' },
        { id: 112, category: "Week 4", text: 'Color/Colors', video: 'videos/color-noun.mp4' },
        { id: 113, category: "Week 4", text: 'Pink', video: 'videos/pink.mp4' },
        { id: 114, category: "Week 4", text: 'Red', video: 'videos/red.mp4' },
        { id: 115, category: "Week 4", text: 'Orange', video: 'videos/orange.mp4' },
        { id: 116, category: "Week 4", text: 'Yellow', video: 'videos/yellow.mp4' },
        { id: 117, category: "Week 4", text: 'Green', video: 'videos/green.mp4' },
        { id: 118, category: "Week 4", text: 'Blue', video: 'videos/blue.mp4' },
        { id: 119, category: "Week 4", text: 'Purple', video: 'videos/purple.mp4' },
        { id: 120, category: "Week 4", text: 'Brown', video: 'videos/brown.mp4' },
        { id: 121, category: "Week 4", text: 'Black', video: 'videos/black.mp4' },
        { id: 122, category: "Week 4", text: 'White', video: 'videos/white.mp4' },
        { id: 123, category: "Week 4", text: 'Tan', video: 'videos/tan.mp4' },
        { id: 124, category: "Week 4", text: 'Gray', video: 'videos/gray.mp4' },
        { id: 125, category: "Week 4", text: 'Silver', video: 'videos/silver.mp4' },
        { id: 126, category: "Week 4", text: 'Gold', video: 'videos/gold.mp4' },
        { id: 127, category: "Week 4", text: 'Clear', video: 'videos/clear.mp4' },
        { id: 128, category: "Week 4", text: 'Dark', video: 'videos/dark.mp4' },
        { id: 129, category: "Week 4", text: 'Light', video: 'videos/bright-light.mp4' },
        { id: 130, category: "Week 4", text: 'Bright', video: 'videos/bright-light.mp4' },
    
        // Week 5
        { id: 131, category: "Week 5", text: 'Who', video: 'videos/who.mp4' },
        { id: 132, category: "Week 5", text: 'Where', video: 'videos/where.mp4' },
        { id: 133, category: "Week 5", text: 'What', video: 'videos/what.mp4' },
        { id: 134, category: "Week 5", text: 'When', video: 'videos/when.mp4' },
        { id: 135, category: "Week 5", text: 'Why', video: 'videos/why.mp4' },
        { id: 136, category: "Week 5", text: 'Which', video: 'videos/which.mp4' },
        { id: 137, category: "Week 5", text: 'How', video: 'videos/how.mp4' },
        { id: 138, category: "Week 5", text: 'Many', video: 'videos/many.mp4' },
        { id: 139, category: "Week 5", text: 'Kind/Type', video: 'videos/kind-type.mp4' },
        { id: 140, category: "Week 5", text: 'Time', video: 'videos/time.mp4' },
        { id: 141, category: "Week 5", text: 'How-many', video: 'videos/how-many.mp4' },
        { id: 142, category: "Week 5", text: 'What-kind/What-type', video: 'videos/what-kind-type.mp4' },
        { id: 143, category: "Week 5", text: 'What\'s-the-time', video: 'videos/whats-the-time.mp4' },
    
        // Week 6
        { id: 144, category: "Week 6", text: 'Person', video: 'videos/person.mp4' },
        { id: 145, category: "Week 6", text: 'People', video: 'videos/people.mp4' },
        { id: 146, category: "Week 6", text: 'Man', video: 'videos/man.mp4' },
        { id: 147, category: "Week 6", text: 'Woman', video: 'videos/woman.mp4' },
        { id: 148, category: "Week 6", text: 'Boy', video: 'videos/boy.mp4' },
        { id: 149, category: "Week 6", text: 'Girl', video: 'videos/girl.mp4' },
        { id: 150, category: "Week 6", text: 'Child', video: 'videos/child.mp4' },
        { id: 151, category: "Week 6", text: 'Dog', video: 'videos/dog.mp4' },
        { id: 152, category: "Week 6", text: 'Cat', video: 'videos/cat.mp4' },
        { id: 153, category: "Week 6", text: 'Animal', video: 'videos/animal.mp4' },
        { id: 154, category: "Week 6", text: 'Friend', video: 'videos/friend.mp4' },
        { id: 155, category: "Week 6", text: 'Family', video: 'videos/family.mp4' },
        { id: 156, category: "Week 6", text: 'Home', video: 'videos/home.mp4' },
        { id: 157, category: "Week 6", text: 'Work/Job', video: 'videos/work.mp4' },
        { id: 158, category: "Week 6", text: 'Food/Eat', video: 'videos/food.mp4' },
        { id: 159, category: "Week 6", text: 'Water', video: 'videos/water.mp4' },
        { id: 160, category: "Week 6", text: 'Breakfast', video: 'videos/breakfast.mp4' },
        { id: 161, category: "Week 6", text: 'Lunch', video: 'videos/lunch.mp4' },
        { id: 162, category: "Week 6", text: 'Dinner', video: 'videos/dinner.mp4' },
        { id: 163, category: "Week 6", text: 'Story', video: 'videos/story.mp4' },
        
        // week 7
        { id: 164, category: "Week 7", text: 'Feel', video: 'videos/feel.mp4' },
        { id: 165, category: "Week 7", text: 'Happy', video: 'videos/happy.mp4' },
        { id: 166, category: "Week 7", text: 'Sad', video: 'videos/sad.mp4' },
        { id: 167, category: "Week 7", text: 'Busy', video: 'videos/busy.mp4' },
        { id: 168, category: "Week 7", text: 'Sick', video: 'videos/sick.mp4' },
        { id: 169, category: "Week 7", text: 'Tired', video: 'videos/tired.mp4' },
        { id: 170, category: "Week 7", text: 'Sleepy', video: 'videos/sleepy.mp4' },
        { id: 171, category: "Week 7", text: 'Excited', video: 'videos/excited.mp4' },
        { id: 172, category: "Week 7", text: 'Nervous/Anxious', video: 'videos/nervous-anxious.mp4' },
        { id: 173, category: "Week 7", text: 'Scared', video: 'videos/scared.mp4' },
        { id: 174, category: "Week 7", text: 'Bored', video: 'videos/bored.mp4' },
        { id: 175, category: "Week 7", text: 'Mad/Angry', video: 'videos/angry.mp4' },
        { id: 176, category: "Week 7", text: 'Calm', video: 'videos/calm.mp4' },
        { id: 177, category: "Week 7", text: 'Nothing/Not much', video: 'videos/nothing.mp4' },
        { id: 178, category: "Week 7", text: 'Same old', video: 'videos/same-old.mp4' },
        { id: 179, category: "Week 7", text: 'Stand', video: 'videos/stand.mp4' },
        { id: 180, category: "Week 7", text: 'Get up', video: 'videos/get-up.mp4' },
        { id: 181, category: "Week 7", text: 'Sit', video: 'videos/sit.mp4' },
        { id: 182, category: "Week 7", text: 'Lay', video: 'videos/lay.mp4' },
        { id: 183, category: "Week 7", text: 'Walk', video: 'videos/walk.mp4' },
        { id: 184, category: "Week 7", text: 'Jump', video: 'videos/jump.mp4' },
        { id: 185, category: "Week 7", text: 'Dance', video: 'videos/dance.mp4' },
        { id: 186, category: "Week 7", text: 'Kneel', video: 'videos/kneel.mp4' },
        { id: 187, category: "Week 7", text: 'Run', video: 'videos/run.mp4' },
        { id: 188, category: "Week 7", text: 'Pull', video: 'videos/pull.mp4' },
        { id: 189, category: "Week 7", text: 'Push', video: 'videos/push.mp4' },
        { id: 190, category: "Week 7", text: 'Hit', video: 'videos/hit.mp4' },
        { id: 191, category: "Week 7", text: 'Kick', video: 'videos/kick.mp4' },
        { id: 192, category: "Week 7", text: 'Throw', video: 'videos/throw.mp4' },
        { id: 193, category: "Week 7", text: 'Catch', video: 'videos/catch.mp4' },
    
        // Week 8
        { id: 194, category: "Week 8", text: 'Eat', video: 'videos/eat.mp4' },
        { id: 195, category: "Week 8", text: 'Drink', video: 'videos/drink.mp4' },
        { id: 196, category: "Week 8", text: 'Sleep', video: 'videos/sleep.mp4' },
        { id: 197, category: "Week 8", text: 'Talk', video: 'videos/talk.mp4' },
        { id: 198, category: "Week 8", text: 'Say', video: 'videos/say.mp4' },
        { id: 199, category: "Week 8", text: 'Chat', video: 'videos/chat.mp4' },
        { id: 200, category: "Week 8", text: 'Listen with ears', video: 'videos/listen-with-ears.mp4' },
        { id: 201, category: "Week 8", text: 'Listen with eyes', video: 'videos/listen-with-eyes.mp4' },
        { id: 202, category: "Week 8", text: 'Watch', video: 'videos/watch.mp4' },
        { id: 203, category: "Week 8", text: 'Get', video: 'videos/get.mp4' },
        { id: 204, category: "Week 8", text: 'Do/Doing', video: 'videos/do-doing.mp4' },
        { id: 205, category: "Week 8", text: 'Make', video: 'videos/make.mp4' },
        { id: 206, category: "Week 8", text: 'Try', video: 'videos/try.mp4' },
        { id: 207, category: "Week 8", text: 'Look', video: 'videos/look.mp4' },
        { id: 208, category: "Week 8", text: 'Tell', video: 'videos/tell.mp4' },
        { id: 209, category: "Week 8", text: 'Ask', video: 'videos/ask.mp4' },
        { id: 210, category: "Week 8", text: 'Give', video: 'videos/give.mp4' },
        { id: 211, category: "Week 8", text: 'Move', video: 'videos/move.mp4' },
        { id: 212, category: "Week 8", text: 'Bring', video: 'videos/bring.mp4' },
        { id: 213, category: "Week 8", text: 'Help', video: 'videos/help.mp4' },
        { id: 214, category: "Week 8", text: 'Take', video: 'videos/take.mp4' },
    
        // Week 9
        { id: 215, category: "Week 9", text: 'If', video: 'videos/if.mp4' },
        { id: 216, category: "Week 9", text: 'From', video: 'videos/from.mp4' },
        { id: 217, category: "Week 9", text: 'Born', video: 'videos/born.mp4' },
        { id: 218, category: "Week 9", text: 'Grow-up/Raised', video: 'videos/grow-up.mp4' },
        { id: 219, category: "Week 9", text: 'Live', video: 'videos/live.mp4' },
        { id: 220, category: "Week 9", text: 'State', video: 'videos/state.mp4' },
        { id: 221, category: "Week 9", text: 'City', video: 'videos/city.mp4' },
        { id: 222, category: "Week 9", text: 'New York City', video: 'videos/new-york-city.mp4' },
        { id: 223, category: "Week 9", text: 'California', video: 'videos/california.mp4' },
        { id: 224, category: "Week 9", text: 'Chicago', video: 'videos/chicago.mp4' },
        { id: 225, category: "Week 9", text: 'Washington', video: 'videos/washington.mp4' },
        { id: 226, category: "Week 9", text: 'Seattle', video: 'videos/seattle.mp4' },
        { id: 227, category: "Week 9", text: 'Ghana', video: 'videos/ghana.mp4' },
        { id: 228, category: "Week 9", text: 'Atlanta', video: 'videos/atlanta.mp4' },
        { id: 229, category: "Week 9", text: 'Minnesota', video: 'videos/minnesota.mp4' },
    
        // Week 10
        // NOTE: It was hard finding sign videos for all the locations >_<
        { id: 230, category: "Week 10", text: 'Manhattan', video: 'videos/manhattan.mp4' },
        { id: 231, category: "Week 10", text: 'Queens', video: 'videos/queens-new-york.mp4' },
        { id: 232, category: "Week 10", text: 'Bronx', video: 'videos/bronx-new-york.mp4' },
        { id: 233, category: "Week 10", text: 'New Jersey', video: 'videos/new-jersey.mp4' },
        { id: 234, category: "Week 10", text: 'Connecticut', video: 'videos/connecticut.mp4' }
    ];

     // --- STATE ---
    let currentCards = []; // The filtered & shuffled cards for the current session
    let currentCardIndex = 0;
    let startWith = 'text'; // 'text' or 'video'
    let isFlipped = false;

    // --- DOM ELEMENTS ---
    const settingsArea = document.getElementById('settings-area');
    const practiceArea = document.getElementById('practice-area');
    const cardSetSelection = document.getElementById('card-set-selection');
    const startButton = document.getElementById('start-button');
    const stopButton = document.getElementById('stop-button');

    const flashcard = document.getElementById('flashcard');
    const cardCounterElement = document.getElementById('card-counter');

    const prevButton = document.getElementById('prev-button');
    const flipButton = document.getElementById('flip-button');
    const nextButton = document.getElementById('next-button');
    
    // Card face elements - will be created dynamically
    let cardFront, cardBack, cardTextElement, cardVideoElement;

    // --- FUNCTIONS ---
    
    // Set up proper HTML structure for the flashcard
    function setupFlashcardStructure() {
        // Clear existing flashcard content
        flashcard.innerHTML = '';
        
        // Create front face
        cardFront = document.createElement('div');
        cardFront.className = 'card-face card-front';
        flashcard.appendChild(cardFront);
        
        // Create back face
        cardBack = document.createElement('div');
        cardBack.className = 'card-face card-back';
        flashcard.appendChild(cardBack);
        
        // Create text element
        cardTextElement = document.createElement('div');
        cardTextElement.id = 'card-text';
        
        // Create video element
        cardVideoElement = document.createElement('video');
        cardVideoElement.id = 'card-video';
        
        // Configure video element
        cardVideoElement.loop = true;
        cardVideoElement.muted = true;
        cardVideoElement.controls = false;
        cardVideoElement.autoplay = true;
        
        // Place elements based on startWith preference
        if (startWith === 'text') {
            cardFront.appendChild(cardTextElement);
            cardBack.appendChild(cardVideoElement);
        } else {
            cardFront.appendChild(cardVideoElement);
            cardBack.appendChild(cardTextElement);
        }
    }

    // Populate settings checkboxes based on categories in data
    function populateSettings() {
        const categories = [...new Set(allFlashcards.map(card => card.category))]; // Get unique categories
        cardSetSelection.innerHTML = ''; // Clear loading message
        if (categories.length === 0) {
             cardSetSelection.innerHTML = '<p>No card sets defined.</p>';
             startButton.disabled = true;
             return;
        }
        categories.forEach(category => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = category;
            checkbox.checked = true; // Default to checked
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${category}`));
            cardSetSelection.appendChild(label);
        });
         startButton.disabled = false;
    }

    // Shuffle array in place (Fisher-Yates)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    // Start the practice session
    function startPractice() {
        // 1. Get selected categories
        const selectedCategories = Array.from(cardSetSelection.querySelectorAll('input[type="checkbox"]:checked'))
                                        .map(checkbox => checkbox.value);

        if (selectedCategories.length === 0) {
            alert('Please select at least one card set.');
            return;
        }

        // 2. Filter flashcards based on selection
        currentCards = allFlashcards.filter(card => selectedCategories.includes(card.category));

        if (currentCards.length === 0) {
            alert('No cards found in the selected set(s).');
            return;
        }

        // 3. Shuffle the selected cards
        shuffleArray(currentCards);

        // 4. Get start side preference
        startWith = document.querySelector('input[name="startSide"]:checked').value;

        // 5. Setup the flashcard structure based on preference
        setupFlashcardStructure();

        // 6. Reset state and UI
        currentCardIndex = 0;
        isFlipped = false;
        settingsArea.classList.add('hidden');
        practiceArea.classList.remove('hidden');

        // 7. Display the first card
        displayCard();
    }

    // Stop the practice session and return to settings
    function stopPractice() {
        practiceArea.classList.add('hidden');
        settingsArea.classList.remove('hidden');
        
        // Pause video if it's playing
        if (cardVideoElement) {
            cardVideoElement.pause();
        }
        
        currentCards = []; // Clear current session cards
    }

// Display the current card
function displayCard() {
    if (currentCards.length === 0) return; // Should not happen if startPractice checks

    const card = currentCards[currentCardIndex];

    // Update content
    cardTextElement.textContent = card.text;
    cardVideoElement.src = card.video;
    cardVideoElement.load(); // Important to load metadata

    // Reset flip state visually
    flashcard.classList.remove('is-flipped');
    isFlipped = false;

    // --- MODIFIED SECTION START ---
    // Set initial visibility based on 'startWith' and manage video state
    if (startWith === 'text') {
        // Show text, hide video initially
        cardTextElement.style.display = ''; // Reset to default (usually block or inline)
        cardVideoElement.style.display = 'none'; // Hide video element
        cardVideoElement.pause(); // Ensure video is paused
    } else { // Start with video
        // Hide text, show video initially
        cardTextElement.style.display = 'none'; // Hide text element
        cardVideoElement.style.display = ''; // Reset to default display
        // Video is on the back face structurally, so we need to flip the card visually
        cardVideoElement.play(); // Play video as it's the starting visible element
    }
    // --- MODIFIED SECTION END ---

    // Update counter
    cardCounterElement.textContent = `Card ${currentCardIndex + 1} of ${currentCards.length}`;

    // Disable/Enable Nav buttons
    prevButton.disabled = currentCardIndex === 0;
    nextButton.disabled = currentCardIndex === currentCards.length - 1;
}

// Flip the current card
function flipCard() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle('is-flipped'); // Visually rotate the card

    // --- MODIFIED SECTION START ---
    // Toggle the display of text and video elements based on the NEW flipped state
    if (isFlipped) {
        // Card is now flipped (showing the back face relative to start)
        if (startWith === 'text') {
            // Was showing text (front), now showing video (back)
            cardTextElement.style.display = 'none'; // Hide text
            cardVideoElement.style.display = '';    // Show video
            cardVideoElement.play();                // Play the now visible video
        } else {
            // Was showing video (front), now showing text (back)
            cardTextElement.style.display = '';    // Show text
            cardVideoElement.style.display = 'none'; // Hide video
            cardVideoElement.pause();               // Pause the now hidden video
        }
    } else {
        // Card is NOT flipped (showing the front face relative to start)
        if (startWith === 'text') {
            // Was showing video (back), now showing text (front)
            cardTextElement.style.display = '';    // Show text
            cardVideoElement.style.display = 'none'; // Hide video
            cardVideoElement.pause();               // Pause the now hidden video
        } else {
            // Was showing text (back), now showing video (front)
            cardTextElement.style.display = 'none'; // Hide text
            cardVideoElement.style.display = '';    // Show video
            cardVideoElement.play();                // Play the now visible video
        }
    }
}

    // Go to the next card
    function nextCard() {
        if (currentCardIndex < currentCards.length - 1) {
            currentCardIndex++;
            cardVideoElement.pause(); // Pause current video before changing
            displayCard();
        }
    }

    // Go to the previous card
    function prevCard() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            cardVideoElement.pause(); // Pause current video before changing
            displayCard();
        }
    }

    // --- EVENT LISTENERS ---
    startButton.addEventListener('click', startPractice);
    stopButton.addEventListener('click', stopPractice);
    flipButton.addEventListener('click', flipCard);
    flashcard.addEventListener('click', flipCard); // Allow clicking card itself to flip
    nextButton.addEventListener('click', nextCard);
    prevButton.addEventListener('click', prevCard);

    // --- INITIALIZATION ---
    populateSettings(); // Create checkboxes when the page loads
});
