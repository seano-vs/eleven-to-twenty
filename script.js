document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    // Define your flashcards here.
    // 'category' is used for grouping in settings.
    // 'text' is the text side.
    // 'video' is the RELATIVE path to the video file in the 'videos' folder.
    const allFlashcards = [
        { id: 1, category: "Week 1", text: 'Again', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/again.mp4' },
        { id: 2, category: "Week 1", text: 'Slow', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/slow.mp4' },
        { id: 3, category: "Week 1", text: 'Please', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/please.mp4' },
        { id: 4, category: "Week 1", text: 'Right/Correct', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/right-correct.mp4' },
        { id: 5, category: "Week 1", text: 'Wrong', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/wrong.mp4' },
        { id: 6, category: "Week 1", text: 'Sorry', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/sorry.mp4' },
        { id: 7, category: "Week 1", text: 'Understand', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/understand.mp4' },
        { id: 8, category: "Week 1", text: 'Don\'t understand', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/dont+understand.mp4' },
        { id: 9, category: "Week 1", text: 'Think', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/think.mp4' },
        { id: 10, category: "Week 1", text: 'Know', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/know.mp4' },
        { id: 11, category: "Week 1", text: 'I don\'t know', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/i+dont+know.mp4' },
        { id: 12, category: "Week 1", text: 'Forget', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/forget.mp4' },
        { id: 13, category: "Week 1", text: 'Remember', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/remember.mp4' },
        { id: 14, category: "Week 1", text: 'Same', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/same.mp4' },
        { id: 15, category: "Week 1", text: 'Different', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/different.mp4' },
        { id: 16, category: "Week 1", text: 'Good', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/good.mp4' },
        { id: 17, category: "Week 1", text: 'Bad', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/bad.mp4' },
        { id: 18, category: "Week 1", text: 'Thank you', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/thank-you.mp4' },
        { id: 19, category: "Week 1", text: 'Cool/Neat', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/cool-neat.mp4' },
        { id: 20, category: "Week 1", text: 'Yes', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/yes.mp4' },
        { id: 21, category: "Week 1", text: 'No', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/no.mp4' },
    
        // Week 2
        { id: 22, category: "Week 2", text: 'Morning', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/morning.mp4' },
        { id: 23, category: "Week 2", text: 'Afternoon', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/afternoon.mp4' },
        { id: 24, category: "Week 2", text: 'Night', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/night-evening.mp4' },
        { id: 25, category: "Week 2", text: 'Fingerspelling', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/fingerspelling.mp4' },
        { id: 26, category: "Week 2", text: 'English/England', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/english-language.mp4' },
        { id: 27, category: "Week 2", text: 'Maybe', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/maybe.mp4' },
        { id: 28, category: "Week 2", text: 'So-so/Kind of', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/so-so.mp4' },
        { id: 29, category: "Week 2", text: 'Learn', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/learn.mp4' },
        { id: 30, category: "Week 2", text: 'Practice', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/practice.mp4' },
        { id: 31, category: "Week 2", text: 'Study', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/study.mp4' },
        { id: 32, category: "Week 2", text: 'Review', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/review-lookover.mp4' },
        { id: 33, category: "Week 2", text: 'Class', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/class.mp4' },
        { id: 34, category: "Week 2", text: 'Teacher', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/teacher.mp4' },
        { id: 35, category: "Week 2", text: 'Student', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/student.mp4' },
        { id: 36, category: "Week 2", text: 'Question', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/ask-a-question.mp4' },
        { id: 37, category: "Week 2", text: 'Do you have questions?', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/ask-a-question.mp4' },
        { id: 38, category: "Week 2", text: 'Hello/Hi', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/hello.mp4' },
        { id: 39, category: "Week 2", text: 'Name', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/name.mp4' },
        { id: 40, category: "Week 2", text: 'Nice', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/nice.mp4' },
        { id: 41, category: "Week 2", text: 'To meet', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/meet.mp4' },
        { id: 42, category: "Week 2", text: 'Nice to meet you', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/nice+to+meet+you.mp4' },
        { id: 43, category: "Week 2", text: 'To introduce', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/introduce.mp4' },
        { id: 44, category: "Week 2", text: 'You-too/Me-too/Same here', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/same.mp4' },
        { id: 45, category: "Week 2", text: 'What\'s up?', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/whats+up.mp4' },
        { id: 46, category: "Week 2", text: 'To see', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/see.mp4' },
        { id: 47, category: "Week 2", text: 'Later', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/later.mp4' },
        { id: 48, category: "Week 2", text: 'See you later', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/see+you+later.mp4' },
        { id: 49, category: "Week 2", text: 'Goodbye/Bye', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/goodbye.mp4' },
        { id: 50, category: "Week 2", text: 'Monday', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/monday.mp4' },
        { id: 51, category: "Week 2", text: 'Tuesday', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/tuesday.mp4' },
        { id: 52, category: "Week 2", text: 'Wednesday', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/wednesday.mp4' },
        { id: 53, category: "Week 2", text: 'Thursday', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/thursday.mp4' },
        { id: 54, category: "Week 2", text: 'Friday', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/friday.mp4' },
        { id: 55, category: "Week 2", text: 'Saturday', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/saturday.mp4' },
        { id: 56, category: "Week 2", text: 'Sunday', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/sunday.mp4' },
        { id: 57, category: "Week 2", text: 'Today', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/today.mp4' },
        { id: 58, category: "Week 2", text: 'Now', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/now.mp4' },
        { id: 59, category: "Week 2", text: 'Tonight', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/tonight.mp4' },
        { id: 60, category: "Week 2", text: 'Yesterday', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/yesterday.mp4' },
        { id: 61, category: "Week 2", text: 'Tomorrow', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/tomorrow.mp4' },
        { id: 62, category: "Week 2", text: 'Day', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/day.mp4' },
        { id: 63, category: "Week 2", text: 'Week', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/week.mp4' },
        { id: 64, category: "Week 2", text: 'Weekend', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/weekend.mp4' },
        { id: 65, category: "Week 2", text: 'This', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/this.mp4' },
        { id: 66, category: "Week 2", text: 'Last', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/last.mp4' },
        { id: 67, category: "Week 2", text: 'Next', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/next.mp4' },
        { id: 68, category: "Week 2", text: 'Last-week', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/last+week.mp4' },
        { id: 69, category: "Week 2", text: 'Next-week', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/next+week.mp4' },
    
        // Week 3
        { id: 70, category: "Week 3", text: 'Deaf', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/deaf.mp4' },
        { id: 71, category: "Week 3", text: 'Hearing', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/hearing.mp4' },
        { id: 72, category: "Week 3", text: 'Hard of hearing', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/hard+of+hearing.mp4' },
        { id: 73, category: "Week 3", text: 'Excuse me', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/excuse+me.mp4' },
        { id: 74, category: "Week 3", text: 'Do you mind', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/excuse+me.mp4' },
        { id: 75, category: "Week 3", text: 'Hold on/One moment', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/hold+on.mp4' },
        { id: 76, category: "Week 3", text: 'Go ahead', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/go+ahead.mp4' },
        { id: 77, category: "Week 3", text: 'Come', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/come.mp4' },
        { id: 78, category: "Week 3", text: 'Go', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/go.mp4' },
        { id: 79, category: "Week 3", text: 'With', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/with.mp4' },
        { id: 80, category: "Week 3", text: 'In', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/in.mp4' },
        { id: 81, category: "Week 3", text: 'Oh, I see/Ah/Oh/Hmm', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/oh+i+see.mp4' },
        { id: 82, category: "Week 3", text: 'Love', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/love.mp4' },
        { id: 83, category: "Week 3", text: 'Love-it', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/love+it.mp4' },
        { id: 84, category: "Week 3", text: 'Perfect', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/perfect.mp4' },
        { id: 85, category: "Week 3", text: 'Like', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/like.mp4' },
        { id: 86, category: "Week 3", text: 'Fine', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/fine-allright.mp4' },
        { id: 87, category: "Week 3", text: 'Ok', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/fine-allright.mp4' },
        { id: 88, category: "Week 3", text: 'Don\'t-like', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/dont+like.mp4' },
        { id: 89, category: "Week 3", text: 'Hate', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/hate.mp4' },
        { id: 90, category: "Week 3", text: 'Number', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/number.mp4' },
        { id: 91, category: "Week 3", text: 'Letter', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/letter+of+alphabet.mp4' },
        { id: 92, category: "Week 3", text: 'Plus (math)', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/plus.mp4' },
        { id: 93, category: "Week 3", text: 'Minus (math)', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/minus.mp4' },
        { id: 94, category: "Week 3", text: 'Equals (math)', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/equal-math.mp4' },
    
        // Week 4
        { id: 95, category: "Week 4", text: 'Game', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/game.mp4' },
        { id: 96, category: "Week 4", text: 'Play', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/play.mp4' },
        { id: 97, category: "Week 4", text: 'Ship', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/ship.mp4' },
        { id: 98, category: "Week 4", text: 'Miss', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/miss-nothit.mp4' },
        { id: 99, category: "Week 4", text: 'Hit', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/hit.mp4' },
        { id: 100, category: "Week 4", text: 'Your turn', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/your+turn.mp4' },
        { id: 101, category: "Week 4", text: 'My turn', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/my+turn.mp4' },
        { id: 102, category: "Week 4", text: 'Win', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/win.mp4' },
        { id: 103, category: "Week 4", text: 'Lose', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/lose-game.mp4' },
        { id: 104, category: "Week 4", text: 'Lucky', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/lucky.mp4' },
        { id: 105, category: "Week 4", text: 'Start/Begin', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/start.mp4' },
        { id: 106, category: "Week 4", text: 'End/Finish', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/fnish-done.mp4' },
        { id: 107, category: "Week 4", text: 'Easy', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/easy.mp4' },
        { id: 108, category: "Week 4", text: 'Hard/Difficult', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/hard-difficult.mp4' },
        { id: 109, category: "Week 4", text: 'Close/Near', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/almost-close.mp4' },
        { id: 110, category: "Week 4", text: 'Have', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/have-possess.mp4' },
        { id: 111, category: "Week 4", text: 'Fun', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/fun.mp4' },
        { id: 112, category: "Week 4", text: 'Color/Colors', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/color-noun.mp4' },
        { id: 113, category: "Week 4", text: 'Pink', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/pink.mp4' },
        { id: 114, category: "Week 4", text: 'Red', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/red.mp4' },
        { id: 115, category: "Week 4", text: 'Orange', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/orange.mp4' },
        { id: 116, category: "Week 4", text: 'Yellow', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/yellow.mp4' },
        { id: 117, category: "Week 4", text: 'Green', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/green.mp4' },
        { id: 118, category: "Week 4", text: 'Blue', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/blue.mp4' },
        { id: 119, category: "Week 4", text: 'Purple', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/purple.mp4' },
        { id: 120, category: "Week 4", text: 'Brown', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/brown.mp4' },
        { id: 121, category: "Week 4", text: 'Black', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/black.mp4' },
        { id: 122, category: "Week 4", text: 'White', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/white.mp4' },
        { id: 123, category: "Week 4", text: 'Tan', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/tan.mp4' },
        { id: 124, category: "Week 4", text: 'Gray', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/gray.mp4' },
        { id: 125, category: "Week 4", text: 'Silver', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/silver.mp4' },
        { id: 126, category: "Week 4", text: 'Gold', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/gold.mp4' },
        { id: 127, category: "Week 4", text: 'Clear', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/clear.mp4' },
        { id: 128, category: "Week 4", text: 'Dark', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/dark.mp4' },
        { id: 129, category: "Week 4", text: 'Light', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/bright-light.mp4' },
        { id: 130, category: "Week 4", text: 'Bright', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/bright-light.mp4' },
    
        // Week 5
        { id: 131, category: "Week 5", text: 'Who', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/who.mp4' },
        { id: 132, category: "Week 5", text: 'Where', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/where.mp4' },
        { id: 133, category: "Week 5", text: 'What', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/what.mp4' },
        { id: 134, category: "Week 5", text: 'When', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/when.mp4' },
        { id: 135, category: "Week 5", text: 'Why', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/why.mp4' },
        { id: 136, category: "Week 5", text: 'Which', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/which.mp4' },
        { id: 137, category: "Week 5", text: 'How', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/how.mp4' },
        { id: 138, category: "Week 5", text: 'Many', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/many.mp4' },
        { id: 139, category: "Week 5", text: 'Kind/Type', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/kind-type.mp4' },
        { id: 140, category: "Week 5", text: 'Time', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/time.mp4' },
        { id: 141, category: "Week 5", text: 'How-many', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/how-many.mp4' },
        { id: 142, category: "Week 5", text: 'What-kind/What-type', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/what-kind-type.mp4' },
        { id: 143, category: "Week 5", text: 'What\'s-the-time', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/whats-the-time.mp4' },
    
        // Week 6
        { id: 144, category: "Week 6", text: 'Person', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/person.mp4' },
        { id: 145, category: "Week 6", text: 'People', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/people.mp4' },
        { id: 146, category: "Week 6", text: 'Man', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/man.mp4' },
        { id: 147, category: "Week 6", text: 'Woman', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/woman.mp4' },
        { id: 148, category: "Week 6", text: 'Boy', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/boy.mp4' },
        { id: 149, category: "Week 6", text: 'Girl', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/girl.mp4' },
        { id: 150, category: "Week 6", text: 'Child', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/child.mp4' },
        { id: 151, category: "Week 6", text: 'Dog', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/dog.mp4' },
        { id: 152, category: "Week 6", text: 'Cat', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/cat.mp4' },
        { id: 153, category: "Week 6", text: 'Animal', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/animal.mp4' },
        { id: 154, category: "Week 6", text: 'Friend', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/friend.mp4' },
        { id: 155, category: "Week 6", text: 'Family', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/family.mp4' },
        { id: 156, category: "Week 6", text: 'Home', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/home.mp4' },
        { id: 157, category: "Week 6", text: 'Work/Job', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/work.mp4' },
        { id: 158, category: "Week 6", text: 'Food/Eat', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/food.mp4' },
        { id: 159, category: "Week 6", text: 'Water', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/water.mp4' },
        { id: 160, category: "Week 6", text: 'Breakfast', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/breakfast.mp4' },
        { id: 161, category: "Week 6", text: 'Lunch', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/lunch.mp4' },
        { id: 162, category: "Week 6", text: 'Dinner', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/dinner.mp4' },
        { id: 163, category: "Week 6", text: 'Story', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/story.mp4' },
        
        // week 7
        { id: 164, category: "Week 7", text: 'Feel', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/feel.mp4' },
        { id: 165, category: "Week 7", text: 'Happy', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/happy.mp4' },
        { id: 166, category: "Week 7", text: 'Sad', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/sad.mp4' },
        { id: 167, category: "Week 7", text: 'Busy', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/busy.mp4' },
        { id: 168, category: "Week 7", text: 'Sick', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/sick.mp4' },
        { id: 169, category: "Week 7", text: 'Tired', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/tired.mp4' },
        { id: 170, category: "Week 7", text: 'Sleepy', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/sleepy.mp4' },
        { id: 171, category: "Week 7", text: 'Excited', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/excited.mp4' },
        { id: 172, category: "Week 7", text: 'Nervous/Anxious', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/nervous-anxious.mp4' },
        { id: 173, category: "Week 7", text: 'Scared', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/scared.mp4' },
        { id: 174, category: "Week 7", text: 'Bored', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/bored.mp4' },
        { id: 175, category: "Week 7", text: 'Mad/Angry', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/angry.mp4' },
        { id: 176, category: "Week 7", text: 'Calm', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/calm.mp4' },
        { id: 177, category: "Week 7", text: 'Nothing/Not much', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/nothing.mp4' },
        { id: 178, category: "Week 7", text: 'Same old', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/same-old.mp4' },
        { id: 179, category: "Week 7", text: 'Stand', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/stand.mp4' },
        { id: 180, category: "Week 7", text: 'Get up', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/get-up.mp4' },
        { id: 181, category: "Week 7", text: 'Sit', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/sit.mp4' },
        { id: 182, category: "Week 7", text: 'Lay', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/lay.mp4' },
        { id: 183, category: "Week 7", text: 'Walk', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/walk.mp4' },
        { id: 184, category: "Week 7", text: 'Jump', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/jump.mp4' },
        { id: 185, category: "Week 7", text: 'Dance', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/dance.mp4' },
        { id: 186, category: "Week 7", text: 'Kneel', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/kneel.mp4' },
        { id: 187, category: "Week 7", text: 'Run', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/run.mp4' },
        { id: 188, category: "Week 7", text: 'Pull', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/pull.mp4' },
        { id: 189, category: "Week 7", text: 'Push', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/push.mp4' },
        { id: 190, category: "Week 7", text: 'Hit', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/hit.mp4' },
        { id: 191, category: "Week 7", text: 'Kick', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/kick.mp4' },
        { id: 192, category: "Week 7", text: 'Throw', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/throw.mp4' },
        { id: 193, category: "Week 7", text: 'Catch', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/catch.mp4' },
    
        // Week 8
        { id: 194, category: "Week 8", text: 'Eat', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/eat.mp4' },
        { id: 195, category: "Week 8", text: 'Drink', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/drink.mp4' },
        { id: 196, category: "Week 8", text: 'Sleep', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/sleep.mp4' },
        { id: 197, category: "Week 8", text: 'Talk', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/talk.mp4' },
        { id: 198, category: "Week 8", text: 'Say', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/say.mp4' },
        { id: 199, category: "Week 8", text: 'Chat', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/chat.mp4' },
        { id: 200, category: "Week 8", text: 'Listen with ears', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/listen-with-ears.mp4' },
        { id: 201, category: "Week 8", text: 'Listen with eyes', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/listen-with-eyes.mp4' },
        { id: 202, category: "Week 8", text: 'Watch', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/watch.mp4' },
        { id: 203, category: "Week 8", text: 'Get', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/get.mp4' },
        { id: 204, category: "Week 8", text: 'Do/Doing', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/do-doing.mp4' },
        { id: 205, category: "Week 8", text: 'Make', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/make.mp4' },
        { id: 206, category: "Week 8", text: 'Try', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/try.mp4' },
        { id: 207, category: "Week 8", text: 'Look', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/look.mp4' },
        { id: 208, category: "Week 8", text: 'Tell', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/tell.mp4' },
        { id: 209, category: "Week 8", text: 'Ask', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/ask.mp4' },
        { id: 210, category: "Week 8", text: 'Give', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/give.mp4' },
        { id: 211, category: "Week 8", text: 'Move', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/move.mp4' },
        { id: 212, category: "Week 8", text: 'Bring', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/bring.mp4' },
        { id: 213, category: "Week 8", text: 'Help', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/help.mp4' },
        { id: 214, category: "Week 8", text: 'Take', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/take.mp4' },
    
        // Week 9
        { id: 215, category: "Week 9", text: 'If', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/if.mp4' },
        { id: 216, category: "Week 9", text: 'From', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/from.mp4' },
        { id: 217, category: "Week 9", text: 'Born', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/born.mp4' },
        { id: 218, category: "Week 9", text: 'Grow-up/Raised', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/grow-up.mp4' },
        { id: 219, category: "Week 9", text: 'Live', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/live.mp4' },
        { id: 220, category: "Week 9", text: 'State', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/state.mp4' },
        { id: 221, category: "Week 9", text: 'City', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/city.mp4' },
        { id: 222, category: "Week 9", text: 'New York City', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/new-york-city.mp4' },
        { id: 223, category: "Week 9", text: 'California', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/california.mp4' },
        { id: 224, category: "Week 9", text: 'Chicago', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/chicago.mp4' },
        { id: 225, category: "Week 9", text: 'Washington', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/washington.mp4' },
        { id: 226, category: "Week 9", text: 'Seattle', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/seattle.mp4' },
        { id: 227, category: "Week 9", text: 'Ghana', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/ghana.mp4' },
        { id: 228, category: "Week 9", text: 'Atlanta', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/atlanta.mp4' },
        { id: 229, category: "Week 9", text: 'Minnesota', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/minnesota.mp4' },
    
        // Week 10
        // NOTE: It was hard finding sign videos for all the locations >_<
        { id: 230, category: "Week 10", text: 'Manhattan', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/manhattan.mp4' },
        { id: 231, category: "Week 10", text: 'Queens', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/queens-new-york.mp4' },
        { id: 232, category: "Week 10", text: 'Bronx', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/bronx-new-york.mp4' },
        { id: 233, category: "Week 10", text: 'New Jersey', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/new-jersey.mp4' },
        { id: 234, category: "Week 10", text: 'Connecticut', video: 'https://pub-d77bf42ee4d748d7b6dba5a28ea63c40.r2.dev/connecticut.mp4' }
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
