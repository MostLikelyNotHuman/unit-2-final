START TRANSACTION;

INSERT INTO notes (id, audio, imageurl, name, pitch, text) VALUES
(1, "audio", "/assets/images/notes/c4.webp", "C4", 0, "C"),
(2, "audio", "/assets/images/notes/d4.webp", "D4", 2, "D"),
(3, "audio", "/assets/images/notes/e4.webp", "E4", 4, "E"),
(4, "audio", "/assets/images/notes/f4.webp", "F4", 5, "F"),
(5, "audio", "/assets/images/notes/g4.webp", "G4", 7, "G"),
(6, "audio", "/assets/images/notes/a4.webp", "A4", 9, "A"),
(7, "audio", "/assets/images/notes/b4.webp", "B4", 11, "B"),
(8, "audio", "/assets/images/notes/c5.webp", "C5", 12, "C");

INSERT INTO intervals (id, imageurl, name, size) VALUES
(1, "unison", "Unison", 0),
(2, "minorSecond", "Minor Second", 1),
(3, "majorSecond", "Major Second", 2),
(4, "minorThird", "Minor Third", 3),
(5, "majorThird", "Major Third", 4),
(6, "perfectFourth", "Perfect Fourth", 5),
(7, "tritone", "Tritone", 6),
(8, "perfectFifth", "Perfect Fifth", 7),
(9, "minorSixth", "Minor Sixth", 8),
(10, "majorSixth", "Major Sixth", 9),
(11, "minorSeventh", "Minor Seventh", 10),
(12, "majorSeventh", "Major Seventh", 11),
(13, "octave", "Octave", 12);

INSERT INTO users (username, password) VALUES
("User1", "User1Password");

COMMIT;