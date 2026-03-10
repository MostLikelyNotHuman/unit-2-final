import './HelpPage.css';
import staffImage from '../assets/images/help-page/staff.png';
import notesImage from '../assets/images/help-page/all-notes.png';
import wholeNote from '../assets/images/rhythm/whole-note.png';
import halfNote from '../assets/images/rhythm/half-note.png';
import quarterNote from '../assets/images/rhythm/quarter-note.png';
import eighthNote from '../assets/images/rhythm/eighth-note.png';
import eighth2 from '../assets/images/rhythm/eighth-2.png';
import sixteenth2 from '../assets/images/rhythm/sixteenth-2.png';
import additionalNotes from '../assets/images/help-page/additional-notes.png'
import sharp from '../assets/images/help-page/sharp.png'
import flat from '../assets/images/help-page/flat.png'
import { intervals } from '../assets/intervals';
import { useRef } from 'react';
import Button from './pieces/Button';
import Divider from './pieces/Divider';

const HelpPage = () => {

    const aboutRef = useRef(null);
    const notesRef = useRef(null);
    const intervalsRef = useRef(null);
    const rhythmRef = useRef(null);

    const handleScroll = (ref) => {  
        const position = ref.current.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
            top: position - 210,
            behavior: 'smooth'
        }) 
    }

    return (
        <main className="helpPage-main">
            <div id="help-content">
                <div id='help-about' ref={aboutRef}>
                    <h3>About This App</h3>
                        <p> Welcome to Music for Beginners! This application is designed for anyone 
                            who is a complete beginner to music, and aims to teach you the very basics of 
                            reading notes and rhythm. Located on the top bar or the home page are links 
                            to a variety of exercises to strengthen your reading skills. Currently, 
                            you can find exercises to test your ability to recognize notes and intervals.</p>
                        <p> The goal is that you take the skills you learn here and go on to:</p>
                        <ul>
                            <li>Read your favorite music!</li>
                            <li>Write your own music!</li>
                            <li>Transcribe your favorite songs!</li>
                            <li>And many more activities!</li>
                        </ul>
                        <p>This help page covers the things you'll need to know to interact with the different 
                            activities, but is by no means a complete overview of the basics of reading music. 
                            Feel free to use whatever other resources you would like to help improve your skills!</p>
                </div>
                <Divider />
                <div id='help-notes' ref={notesRef}>  
                    <h3>Notes</h3>
                        <p>Notes are arranged on something called a <strong>staff</strong>, which is this set of horizontal
                        lines.</p>
                            <img src={staffImage} width={400} alt='A blank musical staff, with five lines and four spaces.'></img>
                        <p>Each line and space on the staff represents a different pitch.
                        A common way to remember where each note goes is to use the mnemonic
                        'Every Good Boy Deserves Fudge' for the lines E G B D F, and
                        the word FACE for the spaces F A C and E.</p>
                            <img src={notesImage} width={400} alt='The notes E through F, spanning the staff.'></img>
                        <p>The exercises here use two additional notes that sit just below the staff, C and D.</p>
                            <img src={additionalNotes} width={150} alt='The notes C and D, just below the staff.'></img>
                        <p>Maybe you've noticed - the notes start over at A after G! The system only 
                        uses the first seven letters of the alphabet to identify notes. However, there are more 
                        than seven notes - there are actually twelve! Each of these notes can be modified in pitch 
                        by placing something called an <strong>accidental</strong> before it. These are 
                        called <strong>Sharps (♯)</strong> and <strong>Flats (♭)</strong>, and represent a slightly 
                        higher or lower pitch, respectively.</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td width={100}><img src={sharp} alt='The musical sharp symbol.'></img>Sharp symbol</td>
                                    <td width={100}><img src={flat} alt='The musical flat symbol.'></img>Flat symbol</td>
                                </tr>
                            </tbody>
                        </table>
                </div> 
                <Divider />
                <div id='help-intervals' ref={intervalsRef}>
                    <h3>Intervals</h3>
                        <p>The word 'interval' refers to the distance in pitch between two notes.
                        The smallest distance between two notes in western music is called a <strong>half-step</strong> or a <strong>semitone</strong>. 
                        This is the distance between G and G♯ or B and B♭, for instance.</p>
                        <p>{`An oddity to keep in mind with this system is that, while most of the notes on the staff above are separated 
                            by two half steps (A -> A♯ -> B), this does not hold for the spaces between B and C and 
                            between E and F. These two sets of notes are only a half step apart. While an E can have a sharp 
                            accidental, an E♯ and an F are the same pitch!`}
                        </p>
                        <p>Every interval has its own unique name. The following are the ones you'll need to know 
                        for the exercises here.</p>
                        <table id='interval-table'>
                            <thead>
                                <tr>
                                    <th>Interval</th>
                                    <th>Distance in Half Steps</th>
                                    <th>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Unison</td>
                                    <td>0</td>
                                    <td><img src={intervals[0].img} alt='The note C on a staff, representing a unison interval.'></img>C - C</td>
                                </tr>
                                <tr>
                                    <td>Minor Second</td>
                                    <td>1</td>
                                    <td><img src={intervals[1].img} alt='The notes C and D flat on a staff, representing a minor second interval.'></img>C - D♭</td>
                                </tr>
                                <tr>
                                    <td>Major Second</td>
                                    <td>2</td>
                                    <td><img src={intervals[2].img} alt='The notes C and D on a staff, representing a major second interval.'></img>C - D</td>
                                </tr>
                                <tr>
                                    <td>Minor Third</td>
                                    <td>3</td>
                                    <td><img src={intervals[3].img} alt='The notes C and E flat on a staff, representing a minor third interval.'></img>C - E♭</td>
                                </tr>
                                <tr>
                                    <td>Major Third</td>
                                    <td>4</td>
                                    <td><img src={intervals[4].img} alt='The notes C and E on a staff, representing a major third interval.'></img>C - E</td>
                                </tr>
                                <tr>
                                    <td>Perfect Fourth</td>
                                    <td>5</td>
                                    <td><img src={intervals[5].img} alt='The notes C and F on a staff, representing a perfect fourth interval.'></img>C - F</td>
                                </tr>
                                <tr>
                                    <td>Tritone</td>
                                    <td>6</td>
                                    <td><img src={intervals[6].img} alt='The notes C and G flat on a staff, representing a tritone interval.'></img>C - G♭</td>
                                </tr>
                                <tr>
                                    <td>Perfect Fifth</td>
                                    <td>7</td>
                                    <td><img src={intervals[7].img} alt='The notes C and G on a staff, representing a perfect fifth interval.'></img>C - G</td>
                                </tr>
                                <tr>
                                    <td>Minor Sixth</td>
                                    <td>8</td>
                                    <td><img src={intervals[8].img} alt='The notes C and A flat on a staff, representing a minor sixth interval.'></img>C - A♭</td>
                                </tr>
                                <tr>
                                    <td>Major Sixth</td>
                                    <td>9</td>
                                    <td><img src={intervals[9].img} alt='The notes C and A on a staff, representing a major sixth interval.'></img>C - A</td>
                                </tr>
                                <tr>
                                    <td>Minor Seventh</td>
                                    <td>10</td>
                                    <td><img src={intervals[10].img} alt='The notes C and B flat on a staff, representing a minor seventh interval.'></img>C - B♭</td>
                                </tr>
                                <tr>
                                    <td>Major Seventh</td>
                                    <td>11</td>
                                    <td><img src={intervals[11].img} alt='The notes C and B on a staff, representing a major seventh interval.'></img>C - B</td>
                                </tr>
                                <tr>
                                    <td>Octave</td>
                                    <td>12</td>
                                    <td><img src={intervals[12].img} alt='Two C notes on a staff, representing an octave.'></img>C - C</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                <Divider />
                <div id='help-rhythm' ref={rhythmRef}>
                    <h3>Rhythm</h3>
                    <p>Notes placed on a staff don't just tell you their pitch, they also tell you their rhythm.
                    You've seen <strong>Quarter Notes</strong> and <strong>Whole Notes</strong> used in the examples 
                    above, but there are many more. A whole note represents four beats, a half note represents 
                    two beats, a quarter note represents a single beat, and so on.</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Beats</th>
                                <th>Note ...</th>
                                <th>is equal in duration to:</th>
                            </tr>
                        </thead>  
                        <tbody>
                            <tr>
                                <td>4</td>
                                <td><img src={wholeNote} alt='One whole note.'></img></td>
                                <td className="table-two-images"><img src={halfNote}></img><img src={halfNote} alt='Two half notes.'></img></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>One Whole Note</td>
                                <td>Two Half Notes</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><img src={halfNote} alt='One half note.'></img></td>
                                <td className="table-two-images"><img src={quarterNote}></img><img src={quarterNote} alt='Two quarter notes.'></img></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>One Half Note</td>
                                <td>Two Quarter Notes</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><img src={quarterNote} alt='One quarter note.'></img></td>
                                <td><img src={eighth2} alt='Two eighth notes'></img></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>One Quarter Note</td>
                                <td>Two Eighth Notes</td>
                            </tr>
                            <tr>
                                <td>1/2</td>
                                <td><img src={eighthNote} alt='One eighth note.'></img></td>
                                <td><img src={sixteenth2} alt='Two sixteenth notes.'></img></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>One Eighth Note</td>
                                <td>Two Sixteenth Notes</td>
                            </tr>
                        </tbody>  
                    </table>
                    <p>Theoretically this continues on forever, but notes with a shorter duration are less common.</p>
                </div>
            </div>
            <div id="nav-bar">
                <p>Navigation</p>
                <ul>
                    <li>
                        <Button text='About This App' onClick={() => {
                            handleScroll(aboutRef)}} />
                    </li>
                    <li>
                        <Button text='Notes' onClick={() => {
                            handleScroll(notesRef)}} />
                    </li>
                    <li>
                        <Button text='Intervals' onClick={() => {
                            handleScroll(intervalsRef)}} />
                    </li>
                    <li>
                        <Button text='Rhythm' onClick={() => {
                            handleScroll(rhythmRef)}} />
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default HelpPage;